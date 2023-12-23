package com.mobilePhoneShop.backend.controller.userRegister;

import com.mobilePhoneShop.backend.dto.UserRegisterDTO;
import com.mobilePhoneShop.backend.model.userRegister.UserRegister;
import com.mobilePhoneShop.backend.service.userRegister.UserRegisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api1/v1/user")
@Slf4j
@RequiredArgsConstructor
public class UserRegisterController {
    private final UserRegisterService userRegisterService;

    @PostMapping("/register")
    public ResponseEntity<UserRegisterDTO> saveUser(@RequestBody UserRegister userRegister){
        log.info("Save User");
        return new ResponseEntity<>(userRegisterService.save(userRegister), HttpStatus.CREATED);
    }
}
