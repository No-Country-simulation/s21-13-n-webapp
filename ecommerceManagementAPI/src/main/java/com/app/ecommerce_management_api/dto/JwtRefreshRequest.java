package com.app.ecommerce_management_api.dto;

import io.swagger.v3.oas.annotations.media.Schema;
//comment
@Schema(description = "Request for refreshing JWT token")
public class JwtRefreshRequest {
  private String refreshToken;

  public String getRefreshToken() {
    return refreshToken;
  }

  public void setRefreshToken(String refreshToken) {
    this.refreshToken = refreshToken;
  }
}
