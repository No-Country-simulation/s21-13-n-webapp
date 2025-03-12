package com.app.ecommerce_management_api.dto;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Schema(description = "Data transfer object for user registration",
        requiredProperties = {"username", "password"})
public class UserDTO {
    @Schema(description = "Username of the user", example = "john_doe")
    private String username;
    @Schema(description = "Password of the user", example = "password123")
    private String password;
    //  @Schema(description = "Role of the user", example = "USER")
    private String role;

    private String email;

    private String imageProfile;

}