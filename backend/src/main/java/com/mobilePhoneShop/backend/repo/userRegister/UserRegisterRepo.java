package com.mobilePhoneShop.backend.repo.userRegister;

import com.mobilePhoneShop.backend.model.userRegister.UserRegister;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRegisterRepo extends MongoRepository<UserRegister,String> {
    List<UserRegister> findAll();
}
