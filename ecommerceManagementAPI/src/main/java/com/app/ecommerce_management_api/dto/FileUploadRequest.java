package com.app.ecommerce_management_api.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.web.multipart.MultipartFile;

@Schema(description = "Modelo para la carga de archivos")
public class FileUploadRequest {
  @Schema(type = "string", format = "binary", description = "Archivo de imagen de perfil para subir")
  private MultipartFile file;

  // Getter y Setter
  public MultipartFile getFile() {
    return file;
  }

  public void setFile(MultipartFile file) {
    this.file = file;
  }
}