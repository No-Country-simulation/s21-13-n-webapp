package com.app.ecommerce_management_api.service.impl;

import com.app.ecommerce_management_api.model.Cart;
import com.app.ecommerce_management_api.repository.CartRepository;
import com.app.ecommerce_management_api.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.util.Optional;

//comment
@Service
public class CartServiceImpl implements CartService {

  private final CartRepository cartRepository;

  public CartServiceImpl(CartRepository cartRepository) {
    this.cartRepository = cartRepository;
  }

  @Override
  public void save(Cart cart) {
    cartRepository.save(cart);
  }

  @Override
  public Cart findById(Long cartId) {
    return cartRepository.findById(cartId).orElseThrow(() -> new RuntimeException("Cart not found"));
  }

  @Override
  @Transactional
  public void updatePrice(Long cartId, BigDecimal newPrice) {
    Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cart not found"));
    cart.setTotalAmount(newPrice);
    cartRepository.save(cart);
  }

  @Override
  public Long findCartByUser_Id(Long userId) {
    return cartRepository.findCartIdByUserId(userId);
  }


}
