package com.app.ecommerce_management_api.service.impl;

import com.app.ecommerce_management_api.model.Product;
import com.app.ecommerce_management_api.repository.ProductRepository;
import com.app.ecommerce_management_api.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

//comment
@Service
public class ProductServiceImpl implements ProductService {

  private final ProductRepository productRepository;

  public ProductServiceImpl(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }


  @Override
  public Product getProductById(Long id) {
    return productRepository.findProductById(id);
  }


  public Page<Product> getProducts(Specification<Product> spec, Pageable pageable) {
    return productRepository.findAll(spec, pageable);  // Usamos el Pageable para paginar
  }

}
