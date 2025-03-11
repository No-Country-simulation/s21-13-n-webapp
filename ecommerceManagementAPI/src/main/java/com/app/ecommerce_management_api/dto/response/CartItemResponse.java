package com.app.ecommerce_management_api.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class CartItemResponse {
  private Long id;
  private Long productId;
  private String productName;
  private String productDescription;
  private BigDecimal productPrice;
  private Integer amount;
  private BigDecimal totalPrice;
//  private List<DiscountResponse> discounts;

  // Getters and Setters
}