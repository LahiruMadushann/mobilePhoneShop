package com.mobilePhoneShop.backend.service.mobilePhoneCategory;

import com.mobilePhoneShop.backend.dto.PhoneCategory;
import com.mobilePhoneShop.backend.model.mobilePhoneCategory.PhoneCategorySave;
import com.mobilePhoneShop.backend.repo.mobilePhoneCategory.PhoneCategorySaveRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
                .phoneName(phoneCategory.getPhoneName())
                .phonePrice(phoneCategory.getPhonePrice())
                .phoneImage(phoneCategory.getPhoneImage())
                .build();
    }

    @Override
    public List<PhoneCategory> getAllPhoneCategories() {
        List<PhoneCategorySave> phoneCategorySaves = phoneCategorySaveRepo.findAll();
        return phoneCategorySaves.stream()
                .map(phoneCategorySave -> PhoneCategory.builder()
                        .phoneId(phoneCategorySave.getPhoneId())
                        .phoneCategory(phoneCategorySave.getPhoneCategory())
                        .phoneName(phoneCategorySave.getPhoneName())
                        .phonePrice(phoneCategorySave.getPhonePrice())
                        .phoneImage(phoneCategorySave.getPhoneImage())
                        .build())
                .collect(Collectors.toList());
    }


}
