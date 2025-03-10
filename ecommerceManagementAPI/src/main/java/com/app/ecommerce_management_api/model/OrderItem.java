package com.app.ecommerce_management_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;
//comment
@Entity
@Table(name = "order_item")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_order")
    private Order order;

    @OneToOne
    @JoinColumn(name = "id_product", nullable = false, unique = true)
    private Product product;


    @ManyToMany
    @JoinTable(
            name = "order_items_discounts",
            joinColumns = @JoinColumn(name = "id_order_item"),
            inverseJoinColumns = @JoinColumn(name = "id_discount")
    )
    private List<Discount> discounts;
    private Integer amount;
    private BigDecimal price;
}
