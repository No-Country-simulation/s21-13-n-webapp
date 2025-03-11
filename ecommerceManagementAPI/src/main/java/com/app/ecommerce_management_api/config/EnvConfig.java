package com.app.ecommerce_management_api.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EnvConfig {

  @Bean
  public Dotenv dotenv() {
    String activeProfile = System.getenv("SPRING_PROFILES_ACTIVE");
    String envFile = ".env";

    if ("dev".equals(activeProfile)) {
      envFile = ".env.development";
    }

    return Dotenv.configure().filename(envFile).ignoreIfMissing().load();
  }
}