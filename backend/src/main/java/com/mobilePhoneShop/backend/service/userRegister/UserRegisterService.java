package com.mobilePhoneShop.backend.service.userRegister;

import com.mobilePhoneShop.backend.dto.UserRegisterDTO;
import com.mobilePhoneShop.backend.model.userRegister.UserRegister;

import java.util.List;

public interface UserRegisterService {
    UserRegisterDTO save(UserRegister userRegister);
    List<UserRegisterDTO> getAllUsers();
    UserRegisterDTO findByUsernameAndPassword(String userName, String password);
    UserRegisterDTO update(String userId, UserRegister userRegister);
}
