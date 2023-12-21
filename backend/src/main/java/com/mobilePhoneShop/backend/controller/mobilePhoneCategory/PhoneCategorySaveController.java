package com.mobilePhoneShop.backend.controller.mobilePhoneCategory;

import com.mobilePhoneShop.backend.dto.PhoneCategory;
import com.mobilePhoneShop.backend.model.mobilePhoneCategory.PhoneCategorySave;
import com.mobilePhoneShop.backend.service.mobilePhoneCategory.PhoneCategorySaveService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getAllmobilePhones")
    public ResponseEntity<List<PhoneCategory>> getAllPhoneCategories() {
        log.info("GET ALL PHONE CATEGORIES");
        List<PhoneCategory> phoneCategories = phoneCategorySaveService.getAllPhoneCategories();
        return new ResponseEntity<>(phoneCategories, HttpStatus.OK);
    }
}
