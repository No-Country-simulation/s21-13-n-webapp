package com.app.ecommerce_management_api.service.impl;

import com.app.ecommerce_management_api.service.CloudinaryService;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@Service
public class CloudinaryServiceImpl implements CloudinaryService {

  private final Cloudinary cloudinary;


  public CloudinaryServiceImpl(Cloudinary cloudinary) {
    this.cloudinary = cloudinary;
  }
  @Override
  public Map upload(MultipartFile file, String folder) throws IOException {
    Map params = ObjectUtils.asMap(
            "folder", folder
    );
    return cloudinary.uploader().upload(file.getBytes(), params);
  }

  @Override
  public Map deleteImageByUrl(String url) throws IOException {
    // Extraer el ID público de la URL
    String publicId = extractPublicIdFromUrl(url);
    // Eliminar la imagen usando el ID público
    return cloudinary.uploader().destroy(publicId, ObjectUtils.asMap("invalidate", true));
  }

  private String extractPublicIdFromUrl(String url) {
    // Implementar la lógica para extraer el ID público de la URL
    // Por ejemplo, si la URL es https://res.cloudinary.com/dvw3gptoh/image/upload/v1740944057/sabores/cwdng2lz95fuaznngynu.jpg
    // El ID público es "sabores/cwdng2lz95fuaznngynu"
    String[] parts = url.split("/");
    String publicIdWithExtension = parts[parts.length - 1];
    String publicId = publicIdWithExtension.substring(0, publicIdWithExtension.lastIndexOf('.'));
    return parts[parts.length - 2] + "/" + publicId;
  }

  @Override
  @Async
  public CompletableFuture<Map> uploadAsync(MultipartFile file, String folder) throws IOException {
    Map params = ObjectUtils.asMap(
            "folder", folder
    );
    Map uploadResult = cloudinary.uploader().upload(file.getBytes(), params);
    return CompletableFuture.completedFuture(uploadResult);
  }

  @Override
  @Async
  public CompletableFuture<Map> uploadAsync(MultipartFile file, String folder,String publicId) throws IOException {
    Map params = ObjectUtils.asMap(
            "folder", folder,
                    "public_id", publicId,
                    "use_filename", true,
                    "unique_filename", false
    );
    Map uploadResult = cloudinary.uploader().upload(file.getBytes(), params);
    return CompletableFuture.completedFuture(uploadResult);
  }
}