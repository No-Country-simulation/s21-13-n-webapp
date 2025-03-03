package com.app.ecommerce_management_api.security;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import java.io.Serial;
import java.io.Serializable;
import java.security.Key;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.function.Function;
import java.util.logging.Logger;


@Component
public class JwtTokenUtil implements Serializable {

  @Serial
  private static final long serialVersionUID = -2550185165626007488L;
  public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
  public static final long REFRESH_TOKEN_VALIDITY = 30 * 24 * 60 * 60;

  private final Key key;
  private static final Logger logger = Logger.getLogger(JwtTokenUtil.class.getName());

  public JwtTokenUtil(@Value("${jwt.secret:default_secret}") String secret) {
    try {
      byte[] decodedKey = Base64.getDecoder().decode(secret);
      this.key = Keys.hmacShaKeyFor(decodedKey);
      logger.info("Clave secreta cargada correctamente.");
    } catch (IllegalArgumentException | IllegalStateException e) {
      throw new RuntimeException("Error al cargar la clave secreta JWT.", e);
    }
  }

  @PostConstruct
  public void init() {
    logger.info("Componente JwtTokenUtil inicializado.");
  }

  public String getUsernameFromToken(String token) {
    return getClaimFromToken(token, Claims::getSubject);
  }

  public Date getExpirationDateFromToken(String token) {
    return getClaimFromToken(token, Claims::getExpiration);
  }

  public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
    final Claims claims = getAllClaimsFromToken(token);
    return claims != null ? claimsResolver.apply(claims) : null;
  }

  private Claims getAllClaimsFromToken(String token) {
    try {
      return Jwts.parserBuilder()
              .setSigningKey(key)
              .build()
              .parseClaimsJws(token)
              .getBody();
    } catch (JwtException e) {
      throw new RuntimeException("Token inválido o expirado.");
    }
  }

  public Boolean isTokenExpired(String token) {
    Date expiration = getExpirationDateFromToken(token);
    return expiration != null && expiration.before(new Date());
  }

  public List<String> getRolesFromToken(String token) {
    Claims claims = getAllClaimsFromToken(token);
    Object rolesObj = claims != null ? claims.get("roles") : null;
    return (rolesObj instanceof List<?>) ? ((List<?>) rolesObj).stream()
            .filter(o -> o instanceof String)
            .map(o -> (String) o)
            .toList() : Collections.emptyList();
  }

  public String generateToken(UserDetails userDetails) {
    Map<String, Object> claims = new HashMap<>();
    claims.put("roles", userDetails.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .toList());
    String token = doGenerateToken(claims, userDetails.getUsername(), JWT_TOKEN_VALIDITY);
    logTokenExpiration(token);
    return token;
  }

  public String generateRefreshToken(UserDetails userDetails) {
    return doGenerateToken(new HashMap<>(), userDetails.getUsername(), REFRESH_TOKEN_VALIDITY);
  }

  private String doGenerateToken(Map<String, Object> claims, String subject, long validity) {
    return Jwts.builder()
            .setClaims(claims)
            .setSubject(subject)
            .setIssuedAt(new Date(System.currentTimeMillis()))
            .setExpiration(new Date(System.currentTimeMillis() + validity * 1000))
            .signWith(key, SignatureAlgorithm.HS256)
            .compact();
  }

  public Boolean validateToken(String token, UserDetails userDetails) {
    final String username = getUsernameFromToken(token);
    return username != null && username.equals(userDetails.getUsername()) && !isTokenExpired(token);
  }

  public void logTokenExpiration(String token) {
    Date expirationDate = getExpirationDateFromToken(token);
    if (expirationDate != null) {
      SimpleDateFormat dateFormat = new SimpleDateFormat("dd 'de' MMMM 'de' yyyy 'a las' HH:mm:ss", new Locale("es", "ES"));
      logger.info("El access token expira a las: " + dateFormat.format(expirationDate));
    }
  }
}
