package com.app.ecommerce_management_api.service;

import org.springframework.scheduling.annotation.Async;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

public interface CloudinaryService {
  Map upload(MultipartFile file, String folder) throws IOException;

  Map deleteImageByUrl(String url) throws IOException;

  @Async
  CompletableFuture<Map> uploadAsync(MultipartFile file, String folder) throws IOException;

  @Async
  CompletableFuture<Map> uploadAsync(MultipartFile file, String folder, String publicId) throws IOException;
}
