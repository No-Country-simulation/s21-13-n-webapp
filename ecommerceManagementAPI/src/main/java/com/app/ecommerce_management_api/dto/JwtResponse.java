package com.app.ecommerce_management_api.dto;

import io.swagger.v3.oas.annotations.media.Schema;
//comment
@Schema(description = "Response containing JWT token and refresh token")
public class JwtResponse {
  @Schema(description = "JWT token")
  private final String jwtToken;
  @Schema(description = "Refresh token")
  private final String refreshToken;

  public JwtResponse(String jwtToken, String refreshToken) {
    this.jwtToken = jwtToken;
    this.refreshToken=refreshToken;
  }

  public String getJwtToken() {
    return jwtToken;
  }

  public String getRefreshToken() {
    return refreshToken;
  }
}