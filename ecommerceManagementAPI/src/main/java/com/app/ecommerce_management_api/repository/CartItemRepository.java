package com.app.ecommerce_management_api.repository;

import com.app.ecommerce_management_api.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
//comment
@Repository
public interface CartItemRepository extends JpaRepository<CartItem,Long> {
  List<CartItem> findByCartId(Long cartId);

  Optional<CartItem> findByCartIdAndProductId(Long cartId, Long productId);
}
