package com.app.ecommerce_management_api.dto;


import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Data transfer object for user registration",
        requiredProperties = {"username", "password"})
public class UserDTO {
  @Schema(description = "Username of the user", example = "john_doe")
  private String username;
  @Schema(description = "Password of the user", example = "password123")
  private String password;
  //  @Schema(description = "Role of the user", example = "USER")
  private String role;

  private String imageProfile;

  public void setImageProfile(String imageProfile) {
    this.imageProfile = imageProfile;
  }

  public String getImageProfile() {
    return imageProfile;
  }

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

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }
}