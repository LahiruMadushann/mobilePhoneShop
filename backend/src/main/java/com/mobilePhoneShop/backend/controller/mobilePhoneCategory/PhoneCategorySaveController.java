package com.mobilePhoneShop.backend.controller.mobilePhoneCategory;

import com.mobilePhoneShop.backend.dto.PhoneCategory;
import com.mobilePhoneShop.backend.model.mobilePhoneCategory.PhoneCategorySave;
import com.mobilePhoneShop.backend.service.mobilePhoneCategory.PhoneCategorySaveService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api1/v1/mobilePhone")
@Slf4j
@RequiredArgsConstructor
public class PhoneCategorySaveController {

    private final PhoneCategorySaveService phoneCategorySaveService;

//    public PhoneCategorySaveController (PhoneCategorySaveService phoneCategorySaveService) {
//        this.phoneCategorySaveService = phoneCategorySaveService;
//    }

    @PostMapping("/mobilePhoneSave")
    public ResponseEntity<PhoneCategory> savePhoneCategory(@RequestBody PhoneCategorySave phoneCategorySave){
        log.info("SAVE PHONE CATEGORY");
        return new ResponseEntity<>(phoneCategorySaveService.save(phoneCategorySave), HttpStatus.CREATED);
    }
}
