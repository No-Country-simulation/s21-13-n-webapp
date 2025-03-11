package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.dto.ShippingInfoDto;
import com.app.ecommerce_management_api.model.ShippingInfo;

public interface ShippingInfoService {

    ShippingInfo saveShippingInfo(ShippingInfoDto shippingInfoDto);
}
