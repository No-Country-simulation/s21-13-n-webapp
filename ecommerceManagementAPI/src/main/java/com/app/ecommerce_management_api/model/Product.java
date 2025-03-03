package com.app.ecommerce_management_api.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;
//comment
@Entity
@Table(name = "product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100)
    private String name;
    @Column(length = 50)
    private String type;
    @Column(length = 50)
    private String brand;
    @Column(length = 255)
    private String description;
    private BigDecimal price;
    @Column(length = 255)
    private String imageUrl;
    private Instant createdAt;

    @OneToOne(mappedBy = "product", cascade = CascadeType.ALL)
    private StockProduct stockProduct;

}
