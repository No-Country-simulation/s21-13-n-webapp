package com.app.ecommerce_management_api.service.impl;

import com.app.ecommerce_management_api.exception.ResourceNotFoundException;
import com.app.ecommerce_management_api.model.User;
import com.app.ecommerce_management_api.repository.UserRepository;
import com.app.ecommerce_management_api.security.JwtTokenUtil;
import com.app.ecommerce_management_api.service.CloudinaryService;
import com.app.ecommerce_management_api.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.io.IOException;

//comment
@Service
public class UserServiceImpl implements UserService {

  private final JwtTokenUtil jwtTokenUtil;

  private final UserDetailsService userDetailsService;

  private final CloudinaryService cloudinaryService;
  private final UserRepository userRepository;

  public UserServiceImpl(JwtTokenUtil jwtTokenUtil, UserDetailsService userDetailsService, CloudinaryService cloudinaryService, UserRepository userRepository) {
    this.jwtTokenUtil = jwtTokenUtil;
    this.userDetailsService = userDetailsService;
    this.cloudinaryService = cloudinaryService;
    this.userRepository = userRepository;
  }

  @Override
  public User getUserInfoByUsername(String username) {
    return userRepository.findByUsername(username);
  }

  @Override
  public User getUserById(Long id) {
    return null;
  }

  private String extractUsernameFromToken(String token) {
    return jwtTokenUtil.getUsernameFromToken(token);
  }
  @Override
  public String getUsernameFromRequest(HttpServletRequest request) {
    String token = extractTokenFromRequest(request);
    return extractUsernameFromToken(token);
  }

  @Override
  public Long getUserIdFromRequest(HttpServletRequest request) {
    String token = extractTokenFromRequest(request);
    String username = extractUsernameFromToken(token);
    UserDetails userDetails = userDetailsService.loadUserByUsername(username);
    User user = userRepository.findByUsername(userDetails.getUsername());
    return user.getId();
  }

  @Override
  public String extractTokenFromRequest(HttpServletRequest request) {
    return request.getHeader("Authorization").substring(7);
  }
  @Override
  public User getUserFromToken(HttpServletRequest request) {
    String token = extractTokenFromRequest(request);
    String username = extractUsernameFromToken(token);
    return userRepository.findByUsername(username);
  }

  @Override
  public void updateUserProfileImage(Long userId, String url) {
    try {
      User userToUpdate = userRepository.getUserById(userId);

      userToUpdate.setImageProfile(url);
      userRepository.save(userToUpdate);
    }
    catch (ResourceNotFoundException e){
      throw new ResourceNotFoundException("User not found");
    }
  }

  @Override
  public String getUserProfileImageUrl(Long userId) {
    User user = userRepository.getUserById(userId);
    return user.getImageProfile();
  }

  @Override
  public String generatePublicIdProfile(Long userId) {
    User user = userRepository.getUserById(userId);
    //TODO: cambiar mas adelantey verificar unicidad
    return String.join("_",user.getUsername(),"IMAGE_PROFILE");
  }

}
