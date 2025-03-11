package com.app.ecommerce_management_api.dto;

import io.swagger.v3.oas.annotations.media.Schema;
//comment
@Schema(description = "Request for JWT authentication")
public class JwtRequest {
  @Schema(description = "Username of the user", example = "john_doe")
  private String username;
  @Schema(description = "Password of the user", example = "password123")
  private String password;

  // Constructor
  public JwtRequest() {
  }

  public JwtRequest(String username, String password) {
    this.username = username;
    this.password = password;
  }

  // Getters y Setters
  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
