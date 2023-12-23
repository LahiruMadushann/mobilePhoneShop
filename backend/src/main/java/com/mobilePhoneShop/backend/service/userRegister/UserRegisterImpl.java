package com.mobilePhoneShop.backend.service.userRegister;

import com.mobilePhoneShop.backend.dto.UserRegisterDTO;
import com.mobilePhoneShop.backend.model.userRegister.UserRegister;
import com.mobilePhoneShop.backend.repo.userRegister.UserRegisterRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserRegisterImpl implements UserRegisterService {

    @Autowired
    private UserRegisterRepo userRegisterRepo;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserRegisterDTO save(UserRegister userRegister) {

        userRegister.setPassword(bCryptPasswordEncoder.encode(userRegister.getPassword()));
        UserRegister savedUser  = userRegisterRepo.save(userRegister);

        BeanUtils.copyProperties(savedUser , UserRegisterDTO.class);
        return UserRegisterDTO.builder()
                .userId(savedUser .getUserId())
                .userName(savedUser .getUserName())
                .firstName(savedUser .getFirstName())
                .lastName(savedUser .getLastName())
                .age(savedUser .getAge())
                .password(savedUser .getPassword())
                .email(savedUser .getEmail())
                .gender(savedUser .getGender())
                .district(savedUser .getDistrict())
                .city(savedUser .getCity()).build();


    }
}
