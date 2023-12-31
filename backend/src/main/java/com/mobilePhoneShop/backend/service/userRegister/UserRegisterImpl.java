package com.mobilePhoneShop.backend.service.userRegister;

import com.mobilePhoneShop.backend.dto.PhoneCategory;
import com.mobilePhoneShop.backend.dto.UserRegisterDTO;
import com.mobilePhoneShop.backend.model.mobilePhoneCategory.PhoneCategorySave;
import com.mobilePhoneShop.backend.model.userRegister.UserRegister;
import com.mobilePhoneShop.backend.repo.userRegister.UserRegisterRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserRegisterImpl implements UserRegisterService {

    @Autowired
    private UserRegisterRepo userRegisterRepo;

//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserRegisterDTO save(UserRegister userRegister) {

//

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


    @Override
    public List<UserRegisterDTO> getAllUsers() {
        List<UserRegister> userRegisterList = userRegisterRepo.findAll();
        return userRegisterList.stream()
                .map(userRegister -> UserRegisterDTO.builder()
                        .userId(userRegister.getUserId())
                        .userName(userRegister.getUserName())
                        .firstName(userRegister.getFirstName())
                        .lastName(userRegister.getLastName())
                        .age(userRegister.getAge())
                        .email(userRegister.getEmail())
                        .gender(userRegister.getGender())
                        .district(userRegister.getDistrict())
                        .city(userRegister.getCity())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public UserRegisterDTO findByUsernameAndPassword(String userName, String password) {
        UserRegister user = userRegisterRepo.findByUserNameAndPassword(userName, password);
        if (user != null) {
            return UserRegisterDTO.builder()
                    .userId(user.getUserId())
                    .userName(user.getUserName())
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .age(user.getAge())
                    .email(user.getEmail())
                    .gender(user.getGender())
                    .district(user.getDistrict())
                    .city(user.getCity())
                    .build();
        }
        return null;
    }

    @Override
    public UserRegisterDTO update(String userId, UserRegister userRegister) {
        UserRegister existingUser = userRegisterRepo.findById(userId).orElse(null);

        if (existingUser != null) {
            existingUser.setUserName(userRegister.getUserName());
            existingUser.setFirstName(userRegister.getFirstName());
            existingUser.setLastName(userRegister.getLastName());
            existingUser.setAge(userRegister.getAge());
            existingUser.setPassword(userRegister.getPassword());
            existingUser.setEmail(userRegister.getEmail());
            existingUser.setGender(userRegister.getGender());
            existingUser.setDistrict(userRegister.getDistrict());
            existingUser.setCity(userRegister.getCity());

            UserRegister updateUser = userRegisterRepo.save(existingUser);

            return UserRegisterDTO.builder()
                    .userId(updateUser.getUserId())
                    .userName(updateUser.getUserName())
                    .firstName(updateUser.getFirstName())
                    .lastName(updateUser.getLastName())
                    .age(updateUser.getAge())
                    .password(updateUser.getPassword())
                    .email(updateUser.getEmail())
                    .gender(updateUser.getGender())
                    .district(updateUser.getDistrict())
                    .city(updateUser.getCity())
                    .build();
        }
        return null;
    }

    @Override
    public void deleteUserById(String userId) {
        userRegisterRepo.deleteById(userId);
    }
}
