package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.dto.UserDTO;
import com.app.ecommerce_management_api.exception.ResourceNotFoundException;
import com.app.ecommerce_management_api.model.User;
import com.app.ecommerce_management_api.dto.response.UserResponse;
import com.app.ecommerce_management_api.repository.UserRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Set;
//comment
@Service
public class JwtUserDetailsService implements UserDetailsService {


  private final CartService cartService;

  private final UserRepository userRepository;


  public JwtUserDetailsService(CartService cartService, UserRepository userRepository) {
      this.cartService = cartService;
      this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username);
    if (user == null) {
      throw new UsernameNotFoundException("User not found with username: " + username);
    }
    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
            getAuthority(user));
  }

  private Set<SimpleGrantedAuthority> getAuthority(User user) {
    return Collections.singleton(new SimpleGrantedAuthority(user.getRole()));
  }

  public User save(UserDTO user) {
    User newUser = new User();
    newUser.setUsername(user.getUsername());
    newUser.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
    newUser.setRole("ROLE_USER"); // Asignar rol por defecto
    newUser.setEmail(user.getEmail());
    try {
      return userRepository.save(newUser);
    }
    catch (DataIntegrityViolationException e){
    throw new RuntimeException("El usuario ya existe");
    }
  }

  public UserResponse userWithCard(String username) throws UsernameNotFoundException {
    try {
      User user = userRepository.findByUsername(username);
      if (user == null) {
        throw new UsernameNotFoundException("User not found with username: " + username);
      }
      Long cartId = cartService.findCartByUser_Id(user.getId());
      UserResponse userResponse = new UserResponse();
      userResponse.setCardId(cartId);
      userResponse.setImageProfile(user.getImageProfile());
      userResponse.setRole(user.getRole());
      userResponse.setUsername(user.getUsername());
      userResponse.setEmail(user.getEmail());

      return userResponse;

    } catch (ResourceNotFoundException e) {
      throw new ResourceNotFoundException("Error al cargar el usuario.");
    }
  }
}
