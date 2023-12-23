package com.mobilePhoneShop.backend.service.userRegister;

import com.mobilePhoneShop.backend.dto.UserRegisterDTO;
import com.mobilePhoneShop.backend.model.userRegister.UserRegister;

public interface UserRegisterService {
    UserRegisterDTO save(UserRegister userRegister);
}
