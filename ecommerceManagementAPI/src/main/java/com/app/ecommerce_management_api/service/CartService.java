package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.model.Cart;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
//comment
public interface CartService {
  void save(Cart cart);

  Cart findById(Long cartId);

  @Transactional
  void updatePrice(Long cartId, BigDecimal newPrice);

  Long findCartByUser_Id(Long userId);
}
