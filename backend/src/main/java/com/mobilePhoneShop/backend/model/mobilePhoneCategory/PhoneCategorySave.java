package com.mobilePhoneShop.backend.model.mobilePhoneCategory;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document
public class PhoneCategorySave {
    @Id
    private String phoneId;
    private String phoneCategory;
    private String phoneName;
    private String phonePrice;
    private String phoneImage;
}
