package com.app.ecommerceManagementAPI;

import io.github.cdimascio.dotenv.Dotenv;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EcommerceManagementApiApplicationTests {

  @BeforeAll
  public static void setup() {
    Dotenv dotenv = Dotenv.load();
    System.setProperty("POSTGRES_DB", dotenv.get("POSTGRES_DB"));
    System.setProperty("POSTGRES_USER", dotenv.get("POSTGRES_USER"));
    System.setProperty("POSTGRES_PASSWORD", dotenv.get("POSTGRES_PASSWORD"));

  }
}
