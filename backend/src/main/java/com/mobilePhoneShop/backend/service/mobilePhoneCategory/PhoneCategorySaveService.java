package com.mobilePhoneShop.backend.service.mobilePhoneCategory;

import com.mobilePhoneShop.backend.dto.PhoneCategory;
import com.mobilePhoneShop.backend.model.mobilePhoneCategory.PhoneCategorySave;

public interface PhoneCategorySaveService {
    PhoneCategory save(PhoneCategorySave phoneCategorySave);
}
