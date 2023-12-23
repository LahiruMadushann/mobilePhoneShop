package com.mobilePhoneShop.backend.service.userRegister;

import com.mobilePhoneShop.backend.dto.UserRegisterDTO;
import com.mobilePhoneShop.backend.model.userRegister.UserRegister;
import com.mobilePhoneShop.backend.repo.userRegister.UserRegisterRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRegisterImpl implements UserRegisterService {

    @Autowired
    private UserRegisterRepo userRegisterRepo;

    @Override
    public UserRegisterDTO save(UserRegister userRegister) {
        UserRegister userRegister1 = userRegisterRepo.save(userRegister);

        BeanUtils.copyProperties(userRegister1, UserRegisterDTO.class);
        return UserRegisterDTO.builder()
                .userId(userRegister1.getUserId())
                .userName(userRegister1.getUserName())
                .firstName(userRegister1.getFirstName())
                .lastName(userRegister1.getLastName())
                .age(userRegister1.getAge())
                .password(userRegister1.getPassword())
                .email(userRegister1.getEmail())
                .gender(userRegister1.getGender())
                .district(userRegister1.getDistrict())
                .city(userRegister1.getCity()).build();

 
    }
}
