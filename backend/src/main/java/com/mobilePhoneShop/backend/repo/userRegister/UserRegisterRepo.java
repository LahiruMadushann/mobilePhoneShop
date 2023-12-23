package com.mobilePhoneShop.backend.repo.userRegister;

import com.mobilePhoneShop.backend.model.userRegister.UserRegister;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRegisterRepo extends MongoRepository<UserRegister,String> {
}
