package com.app.ecommerce_management_api.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

  @Autowired
  private Dotenv dotenv;

  @PostConstruct
  public void init() {
    System.setProperty("cloudinary.cloud-name", dotenv.get("CLOUD_NAME"));
    System.setProperty("cloudinary.api-key", dotenv.get("API_KEY"));
    System.setProperty("cloudinary.api-secret", dotenv.get("API_SECRET"));
  }

  @Bean
  public Cloudinary cloudinary() {
    return new Cloudinary(ObjectUtils.asMap(
            "cloud_name", dotenv.get("CLOUD_NAME"),
            "api_key", dotenv.get("API_KEY"),
            "api_secret", dotenv.get("API_SECRET")
    ));
  }
}