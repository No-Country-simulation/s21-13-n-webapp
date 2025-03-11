package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.dto.response.CartItemResponse;
import com.app.ecommerce_management_api.model.CartItem;
import com.app.ecommerce_management_api.service.CartItemService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cartItem")
@Tag(name = "Cart Item Management", description = "Endpoints para la gestión de ítems del carrito de compras")
public class CartItemController {

  private final CartItemService cartItemService;
  public CartItemController(CartItemService cartItemService) {
    this.cartItemService = cartItemService;
  }

  @Operation(
          summary = "Create cart item",
          description = "Crea un nuevo ítem en el carrito de compras.",
          requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                  description = "Detalles del ítem del carrito a crear",
                  required = true,
                  content = @io.swagger.v3.oas.annotations.media.Content(
                          mediaType = "application/json",
                          schema = @io.swagger.v3.oas.annotations.media.Schema(
                                  implementation = CartItem.class
                          )
                  )
          ),
          responses = {
                  @io.swagger.v3.oas.annotations.responses.ApiResponse(
                          responseCode = "200",
                          description = "Cart item created successfully",
                          content = @io.swagger.v3.oas.annotations.media.Content(
                                  mediaType = "application/json",
                                  schema = @io.swagger.v3.oas.annotations.media.Schema(
                                          implementation = String.class
                                  )
                          )
                  )
          }
  )
  @PostMapping("/create")
  public ResponseEntity<?> createCartItem(@RequestBody CartItem cartItem) {
    cartItemService.save(cartItem);
    return ResponseEntity.ok("Cart item created successfully");
  }

  @Operation(
          summary = "Get cart item",
          description = "Obtiene los detalles de un ítem del carrito por su ID.",
          responses = {
                  @io.swagger.v3.oas.annotations.responses.ApiResponse(
                          responseCode = "200",
                          description = "Detalles del ítem del carrito",
                          content = @io.swagger.v3.oas.annotations.media.Content(
                                  mediaType = "application/json",
                                  schema = @io.swagger.v3.oas.annotations.media.Schema(
                                          implementation = CartItemResponse.class
                                  )
                          )
                  )
          }
  )
  @GetMapping("/{id}")
  public ResponseEntity<CartItemResponse> getCartItem(@PathVariable Long id) {
    CartItemResponse cartItemResponse = cartItemService.findById(id);
    return ResponseEntity.ok(cartItemResponse);
  }

  @Operation(
          summary = "Update cart item",
          description = "Actualiza un ítem del carrito de compras.",
          requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                  description = "Detalles del ítem del carrito a actualizar",
                  required = true,
                  content = @io.swagger.v3.oas.annotations.media.Content(
                          mediaType = "application/json",
                          schema = @io.swagger.v3.oas.annotations.media.Schema(
                                  implementation = CartItem.class
                          )
                  )
          ),
          responses = {
                  @io.swagger.v3.oas.annotations.responses.ApiResponse(
                          responseCode = "200",
                          description = "Cart item updated successfully",
                          content = @io.swagger.v3.oas.annotations.media.Content(
                                  mediaType = "application/json",
                                  schema = @io.swagger.v3.oas.annotations.media.Schema(
                                          implementation = String.class
                                  )
                          )
                  )
          }
  )
  @PutMapping("/update")
  public ResponseEntity<?> updateCartItem(@RequestBody CartItem cartItem) {
    cartItemService.save(cartItem);
    return ResponseEntity.ok("Cart item updated successfully");
  }

  @Operation(
          summary = "Delete cart item",
          description = "Elimina un ítem del carrito por su ID.",
          responses = {
                  @io.swagger.v3.oas.annotations.responses.ApiResponse(
                          responseCode = "204",
                          description = "Cart item deleted successfully",
                          content = @io.swagger.v3.oas.annotations.media.Content
                  )
          }
  )
  @DeleteMapping("/item/{id}")
  public ResponseEntity<Void> deleteCartItemById(@PathVariable Long id) {
    cartItemService.deleteById(id);
    return ResponseEntity.noContent().build();
  }


  @Operation(
          summary = "Get cart items by cart ID",
          description = "Obtiene todos los ítems de un carrito por el ID del carrito.",
          responses = {
                  @io.swagger.v3.oas.annotations.responses.ApiResponse(
                          responseCode = "200",
                          description = "Lista de ítems del carrito",
                          content = @io.swagger.v3.oas.annotations.media.Content(
                                  mediaType = "application/json",
                                  schema = @io.swagger.v3.oas.annotations.media.Schema(
                                          implementation = CartItemResponse.class
                                  )
                          )
                  )
          }
  )
  @GetMapping("/cart/{cartId}")
  public ResponseEntity<List<CartItemResponse>> getCartItemsByCart(@PathVariable Long cartId) {
    List<CartItemResponse> cartItemResponses = cartItemService.getCartItemsByCartId(cartId);
    return ResponseEntity.ok(cartItemResponses);
  }

}
