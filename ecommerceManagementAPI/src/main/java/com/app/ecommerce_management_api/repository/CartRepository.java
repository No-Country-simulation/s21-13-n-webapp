package com.app.ecommerce_management_api.repository;

import com.app.ecommerce_management_api.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//comment
@Repository
public interface CartRepository extends JpaRepository<Cart,Long> {

    @Query("SELECT c.id FROM Cart c WHERE c.user.id = :userId")
    Long findCartIdByUserId(@Param("userId") Long userId);
}
