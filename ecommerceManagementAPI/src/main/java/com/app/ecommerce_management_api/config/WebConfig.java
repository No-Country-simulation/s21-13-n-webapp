package com.app.ecommerce_management_api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//comment
@Configuration
public class WebConfig implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
            .allowedOrigins(
                    "https://intimate-chinchilla-equipo-s21-13-n-webapp-f92794e5.koyeb.app/",
                    "https://intimate-chinchilla-equipo-s21-13-n-webapp-f92794e5.koyeb.app",
                    "https://ecommercemanagementapi-production.up.railway.app/",
                    "https://heladeria-deploy.vercel.app",
                    "http://localhost:3000",
                    "http://localhost:3001"
            ) // 👈 Pasamos todos los dominios en un solo llamado
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*")
            .allowCredentials(true);
  }
}
