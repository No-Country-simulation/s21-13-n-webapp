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
@Table(name = "cart_item")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cart_id", nullable = false)
    private Cart cart;

    @OneToOne
    @JoinColumn(name = "id_product", nullable = false)
    private Product product;

    @ManyToMany
    @JoinTable(
            name = "cart_items_discounts",
            joinColumns = @JoinColumn(name = "id_cart_item"),
            inverseJoinColumns = @JoinColumn(name = "id_discount")
    )
    private List<Discount> discounts;
    private Integer amount;
    private BigDecimal price;


}
