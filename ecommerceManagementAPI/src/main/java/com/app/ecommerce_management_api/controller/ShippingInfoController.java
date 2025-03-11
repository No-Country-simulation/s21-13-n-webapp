package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.dto.ShippingInfoDto;
import com.app.ecommerce_management_api.model.ShippingInfo;
import com.app.ecommerce_management_api.service.impl.ShippingInfoServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/info-entrega")
public class ShippingInfoController {

    @Autowired
    private final ShippingInfoServiceImp shippingInfoService;

    public ShippingInfoController(ShippingInfoServiceImp shippingInfoService) {
        this.shippingInfoService = shippingInfoService;
    }

    @PostMapping("/guardar")
    public ResponseEntity<ShippingInfo> guardarInfoEntrega(@RequestBody ShippingInfoDto shippingInfoDto) {
        ShippingInfo shippingInfo = shippingInfoService.saveShippingInfo(shippingInfoDto);
        return ResponseEntity.ok(shippingInfo);
    }

    @GetMapping("/buscar/{email}")
    public ShippingInfoDto getShippingInfo(@PathVariable String email) {
        return shippingInfoService.getShippingInfoByEmail(email);
    }

}
