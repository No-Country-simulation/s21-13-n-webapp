package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.model.User;
import jakarta.servlet.http.HttpServletRequest;
//comment
public interface UserService {
  User getUserInfoByUsername(String username);

  User getUserById(Long id);

  String getUsernameFromRequest(HttpServletRequest request);

  Long getUserIdFromRequest(HttpServletRequest request);

  String extractTokenFromRequest(HttpServletRequest request);

  User getUserFromToken(HttpServletRequest request);

  void updateUserProfileImage(Long userId, String url);

  String getUserProfileImageUrl(Long userId);

  String generatePublicIdProfile(Long userId);
}
