package com.mobilePhoneShop.backend.service.mobilePhoneCategory;

import com.mobilePhoneShop.backend.dto.PhoneCategory;
import com.mobilePhoneShop.backend.model.mobilePhoneCategory.PhoneCategorySave;
import com.mobilePhoneShop.backend.repo.mobilePhoneCategory.PhoneCategorySaveRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhoneCategorySaveImpl implements PhoneCategorySaveService{

    @Autowired
    private PhoneCategorySaveRepo phoneCategorySaveRepo;

    @Override
    public PhoneCategory save(PhoneCategorySave phoneCategorySave) {
        PhoneCategorySave phoneCategory = phoneCategorySaveRepo.save(phoneCategorySave);

        BeanUtils.copyProperties(phoneCategory, PhoneCategory.class);
        return PhoneCategory.builder()
                .phoneId(phoneCategory.getPhoneId())
                .phoneCategory(phoneCategory.getPhoneCategory())
                .phoneImage(phoneCategory.getPhoneImage())
                .build();
    }
}
