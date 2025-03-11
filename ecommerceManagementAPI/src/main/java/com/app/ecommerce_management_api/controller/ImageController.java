package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.service.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/images")
public class ImageController {

  @Autowired
  private CloudinaryService cloudinaryService;

  @DeleteMapping("/{publicId}")
  public ResponseEntity<Map> deleteImage(@PathVariable String publicId) throws IOException {
    Map result = cloudinaryService.deleteImageByUrl(publicId);
    return ResponseEntity.ok(result);
  }
}
