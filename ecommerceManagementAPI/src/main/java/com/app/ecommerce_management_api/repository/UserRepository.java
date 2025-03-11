package com.app.ecommerce_management_api.repository;

import com.app.ecommerce_management_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;
//comment
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  User getUserById(Long id);
  User findByUsername(@NonNull  String username);
  User save(@NonNull User newUser);
}