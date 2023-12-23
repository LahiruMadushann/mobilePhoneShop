package com.mobilePhoneShop.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRegisterDTO {
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
