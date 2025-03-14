package com.app.ecommerce_management_api;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

//comment
@SpringBootApplication
public class EcommerceManagementApiApplication {

  private static final Logger logger = LoggerFactory.getLogger(EcommerceManagementApiApplication.class);

  public static void main(String[] args) {
    String activeProfile = System.getenv("SPRING_PROFILES_ACTIVE");

    if (!"prod".equals(activeProfile)) {
      String envFile = ".env";
      if ("dev".equals(activeProfile)) {
        envFile = ".env.development";
      }

      Dotenv dotenv = Dotenv.configure().filename(envFile).ignoreIfMissing().load();
      setSystemProperty("DB_NAME", dotenv.get("DB_NAME"));
      setSystemProperty("DB_USER", dotenv.get("DB_USER"));
      setSystemProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
      setSystemProperty("SPRING_PROFILES_ACTIVE", dotenv.get("SPRING_PROFILES_ACTIVE"));
      setSystemProperty("DB_HOST", dotenv.get("DB_HOST"));
      setSystemProperty("DB_PORT", dotenv.get("DB_PORT"));
    } else {
      // En producción, las variables de entorno se configuran externamente
      setSystemProperty("DB_NAME", System.getenv("DB_NAME"));
      setSystemProperty("DB_USER", System.getenv("DB_USER"));
      setSystemProperty("DB_PASSWORD", System.getenv("DB_PASSWORD"));
      setSystemProperty("SPRING_PROFILES_ACTIVE", activeProfile);
      setSystemProperty("DB_HOST", System.getenv("DB_HOST"));
      setSystemProperty("DB_PORT", System.getenv("DB_PORT"));
    }

    SpringApplication.run(EcommerceManagementApiApplication.class, args);
  }

  private static void setSystemProperty(String key, String value) {
    if (value != null) {
      System.setProperty(key, value);
    } else {
      logger.warn("Environment variable {} is not set", key);
    }
  }

  @PostConstruct
  public void logSwaggerUrl() {
    logger.info("Swagger UI available at: https://intimate-chinchilla-equipo-s21-13-n-webapp-f92794e5.koyeb.app/swagger-ui/index.html");
    logger.info("11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111");

  }
}