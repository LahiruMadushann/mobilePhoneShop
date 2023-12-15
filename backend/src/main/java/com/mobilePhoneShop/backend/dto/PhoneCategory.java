package com.mobilePhoneShop.backend.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
//@NoArgsConstructor
public class PhoneCategory {
    private String phoneId;
    private String phoneCategory;
    private String phoneName;
    private String phonePrice;
    private String phoneImage;
}
