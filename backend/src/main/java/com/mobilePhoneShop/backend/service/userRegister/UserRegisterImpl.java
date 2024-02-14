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
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserRegisterImpl implements UserRegisterService {

    private final UserRegisterRepo userRegisterRepo;

    @Autowired
    public UserRegisterImpl(UserRegisterRepo userRegisterRepo) {
        this.userRegisterRepo = userRegisterRepo;
    }


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
                        .password(userRegister.getPassword())
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
                    .password(user.getPassword())
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
        Optional<UserRegister> optionalExistingUser = userRegisterRepo.findById(userId);

        if (optionalExistingUser.isPresent()) {
            UserRegister existingUser = optionalExistingUser.get();

            if (userRegister.getUserName() != null) {
                existingUser.setUserName(userRegister.getUserName());
            }
            if (userRegister.getFirstName() != null) {
                existingUser.setFirstName(userRegister.getFirstName());
            }
            if (userRegister.getLastName() != null) {
                existingUser.setLastName(userRegister.getLastName());
            }
            if (userRegister.getAge() != 0) {
                existingUser.setAge(userRegister.getAge());
            }
            if (userRegister.getPassword() != null) {
                existingUser.setPassword(userRegister.getPassword());
            }
            if (userRegister.getEmail() != null) {
                existingUser.setEmail(userRegister.getEmail());
            }
            if (userRegister.getGender() != null) {
                existingUser.setGender(userRegister.getGender());
            }
            if (userRegister.getDistrict() != null) {
                existingUser.setDistrict(userRegister.getDistrict());
            }
            if (userRegister.getCity() != null) {
                existingUser.setCity(userRegister.getCity());
            }

            // Update the user in the database
            UserRegister updateUser = userRegisterRepo.save(existingUser);
            
            // Return the updated user details
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
