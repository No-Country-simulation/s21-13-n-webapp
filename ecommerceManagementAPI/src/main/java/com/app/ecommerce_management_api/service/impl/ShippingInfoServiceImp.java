package com.app.ecommerce_management_api.service.impl;

import com.app.ecommerce_management_api.dto.ShippingInfoDto;
import com.app.ecommerce_management_api.model.ShippingInfo;
import com.app.ecommerce_management_api.repository.ShippingInfoRepository;
import com.app.ecommerce_management_api.service.ShippingInfoService;
import com.app.ecommerce_management_api.util.ConversionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ShippingInfoServiceImp implements ShippingInfoService {

    @Autowired
    private ShippingInfoRepository shippingInfoRepository;

    @Autowired
    private final ConversionUtil conversionUtil;

    public ShippingInfoServiceImp(ShippingInfoRepository shippingInfoRepository, ConversionUtil conversionUtil) {
        this.shippingInfoRepository = shippingInfoRepository;
        this.conversionUtil = conversionUtil;
    }

    public ShippingInfo saveShippingInfo(ShippingInfoDto shippingInfoDto) {
        System.out.println(shippingInfoDto);
        ShippingInfo shippingInfo = conversionUtil.convertToEntity(shippingInfoDto, ShippingInfo.class);
        return shippingInfoRepository.save(shippingInfo);
    }

    public ShippingInfoDto getShippingInfoByEmail(String email) {
        Optional<ShippingInfo> shippingInfo = shippingInfoRepository.findByEmail(email);
        return shippingInfo.map(info -> conversionUtil.convertToDto(info, ShippingInfoDto.class))
                .orElseThrow(() -> new RuntimeException("No se encontró información de envío para el email: " + email));
    }
}
