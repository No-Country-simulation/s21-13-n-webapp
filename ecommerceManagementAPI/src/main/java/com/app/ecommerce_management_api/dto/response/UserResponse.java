package com.app.ecommerce_management_api.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {

  private String username;
  private String role;
  private String imageProfile;
}

