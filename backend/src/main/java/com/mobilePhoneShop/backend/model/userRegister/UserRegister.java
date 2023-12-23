package com.mobilePhoneShop.backend.model.userRegister;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Builder
@Data
@Document
public class UserRegister {
    @Id
    private String userId;
    private String userName;
    private String firstName;
    private String lastName;
    private int age;
    private String password;
    private String email;
    private String gender;
    private String district;
    private String city;
}
