package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
//comment
public interface ProductService {
  Page<Product> getProducts(Specification<Product> spec, Pageable pageable);
  Product getProductById(Long id);
}
