package com.app.ecommerce_management_api.repository;

import com.app.ecommerce_management_api.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//comment
@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem,Long> {
}
