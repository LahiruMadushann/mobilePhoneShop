package com.mobilePhoneShop.backend.repo.userRegister;

import com.mobilePhoneShop.backend.model.userRegister.UserRegister;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRegisterRepo extends MongoRepository<UserRegister,String> {
    List<UserRegister> findAll();

    UserRegister findByUserNameAndPassword(String userName, String password);
    Optional<UserRegister> findById(String userId);
}
