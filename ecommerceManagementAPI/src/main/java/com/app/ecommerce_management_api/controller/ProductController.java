package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.dto.ProductFilter;
import com.app.ecommerce_management_api.dto.response.ProductResponse;
import com.app.ecommerce_management_api.model.Product;
import com.app.ecommerce_management_api.service.ProductService;
import com.app.ecommerce_management_api.specification.ProductSpecification;
import com.app.ecommerce_management_api.util.ConversionUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/products")
@Tag(name = "Productos", description = "Operaciones relacionadas con productos")
public class ProductController {

  private final ProductService productService;

  private final ConversionUtil convert;

  public ProductController(ProductService productService, ConversionUtil convert) {
    this.productService = productService;
    this.convert = convert;
  }

  @Operation(
          summary = "Get product by ID",
          description = "Devuelve un producto por su ID",
          parameters = {
                  @Parameter(
                          name = "id",
                          description = "ID del producto a obtener",
                          required = true,
                          example = "1"
                  )
          },
          responses = {
                  @ApiResponse(
                          responseCode = "200",
                          description = "Detalles del producto",
                          content = @io.swagger.v3.oas.annotations.media.Content(
                                  mediaType = "application/json",
                                  schema = @io.swagger.v3.oas.annotations.media.Schema(
                                          implementation = ProductResponse.class
                                  )
                          )
                  ),
                  @ApiResponse(
                          responseCode = "404",
                          description = "Producto no encontrado",
                          content = @io.swagger.v3.oas.annotations.media.Content(
                                  mediaType = "application/json",
                                  schema = @io.swagger.v3.oas.annotations.media.Schema(
                                          implementation = String.class
                                  )
                          )
                  )
          }
  )
  @GetMapping("/{id}")
  public ResponseEntity<ProductResponse> getProductById(@PathVariable Long id) {
    Product product = productService.getProductById(id);
    return ResponseEntity.ok(convert.convertToDto(product, ProductResponse.class));
  }


  @Operation(
          summary = "Get products",
          description = "Devuelve una lista de productos basada en los criterios de filtro proporcionados",
          parameters = {
                  @Parameter(name = "name", description = "Filtrar por nombre del producto", example = "Helado de Vainilla"),
                  @Parameter(name = "type", description = "Filtrar por tipo", example = "snack"),
                  @Parameter(name = "brand", description = "Filtrar por marca", example = "Freddo"),
                  @Parameter(name = "priceMin", description = "Precio mínimo (ignorado si es 0 o vacío)", example = "3.29"),
                  @Parameter(name = "priceMax", description = "Precio máximo (ignorado si es 0 o vacío)", example = "3.49"),
                  @Parameter(name = "page", description = "Número de página (empieza en 0)", example = "0"),
                  @Parameter(name = "size", description = "Cantidad de elementos por página", example = "20"),
                  @Parameter(name = "sort", description = "Criterio de ordenamiento. Ejemplo: id", example = "id")
          },
          responses = {
                  @ApiResponse(responseCode = "200", description = "Lista de productos", content = @Content(
                          mediaType = "application/json",
                          schema = @Schema(implementation = ProductResponse.class)
                  )),
                  @ApiResponse(responseCode = "400", description = "Solicitud incorrecta")
          }
  )
  @GetMapping("")
  public ResponseEntity<Page<ProductResponse>> getProducts(
          @Parameter(description = "Filter criteria for products") ProductFilter filter,
          @Parameter(hidden = true) @PageableDefault(size = 20, sort = "name", direction = Sort.Direction.ASC) Pageable pageable) {


    Specification<Product> spec = new ProductSpecification(filter);
    Page<Product> productsPage = productService.getProducts(spec, pageable);  // Especificamos que es una página de Product
    Page<ProductResponse> productResponsesPage = productsPage.map(product -> convert.convertToDto(product, ProductResponse.class));

    // Convertimos la lista de productos a la respuesta (DTO)
    return ResponseEntity.ok(productResponsesPage);
  }
}
