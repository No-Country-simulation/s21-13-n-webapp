package com.app.ecommerce_management_api.config;

import com.app.ecommerce_management_api.dto.response.CartItemResponse;
import com.app.ecommerce_management_api.model.CartItem;
import org.modelmapper.Condition;
import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;

//comment
@Configuration
public class AppConfig {

  @Bean
  public ModelMapper modelMapper(){
      ModelMapper modelMapper = new ModelMapper();

    // Condición para verificar si el valor es nulo
    Condition<?, ?> notNull = Conditions.isNotNull();

    // Definir mapeo personalizado para CartItem a CartItemResponse
    modelMapper.addMappings(new PropertyMap<CartItem, CartItemResponse>() {
      @Override
      protected void configure() {

        when(notNull).map(source.getProduct().getId(), destination.getProductId());
        when(notNull).map(source.getProduct().getName(), destination.getProductName());
        when(notNull).map(source.getProduct().getDescription(), destination.getProductDescription());
        when(notNull).map(source.getProduct().getPrice(), destination.getProductPrice());
      //  when(notNull).map(source.getPrice().multiply(BigDecimal.valueOf(source.getAmount())), destination.getTotalPrice());

        // Mapear otros campos necesarios
      }
    });

      return modelMapper;
  }
}
