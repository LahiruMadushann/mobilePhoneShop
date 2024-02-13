package com.mobilePhoneShop.backend.controller.userRegister;
import com.mobilePhoneShop.backend.dto.UserRegisterDTO;
import com.mobilePhoneShop.backend.model.userRegister.UserRegister;
import com.mobilePhoneShop.backend.service.userRegister.UserRegisterService;
import com.mobilePhoneShop.backend.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api1/v1/user")
@Slf4j
@RequiredArgsConstructor
public class UserRegisterController {
    private final UserRegisterService userRegisterService;

    @Autowired
    private JwtUtil jwtUtil;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/register")
    public ResponseEntity<UserRegisterDTO> saveUser(@RequestBody UserRegister userRegister){
        log.info("Save User");
        return new ResponseEntity<>(userRegisterService.save(userRegister), HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getAllUsers")
    public ResponseEntity<List<UserRegisterDTO>> getAllUsers() {
        log.info("Get All Users");
        List<UserRegisterDTO> userRegisterList =userRegisterService.getAllUsers();
        return new ResponseEntity<>(userRegisterList,HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/login")
    public ResponseEntity<UserRegisterDTO> loginUser(@RequestBody UserRegister userRegister) {
        log.info("Login User: {}", userRegister);
        System.out.println("User Reg " + userRegister);
        UserRegisterDTO user = userRegisterService.findByUsernameAndPassword(userRegister.getUserName(), userRegister.getPassword());
        log.info("Finding user by username and password. Username: {}, Password: {}", userRegister.getUserName(), userRegister.getPassword());

        if (user != null) {
            String token = jwtUtil.generateToken(user.getUserName(), user.getPassword());

            return ResponseEntity.ok()
                    .header("Authorization", "Bearer " + token)
                    .body(user);
        }

        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }


    @PutMapping("/update/{userId}")
    public ResponseEntity<UserRegisterDTO> updateUser(@PathVariable String userId, @RequestBody UserRegister userRegister){
        log.info("Update User");

        UserRegisterDTO updateUser = userRegisterService.update(userId, userRegister);

        if (updateUser != null) {
            return new ResponseEntity<>(updateUser, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable String userId) {
        log.info("Delete User with ID: {}", userId);
        userRegisterService.deleteUserById(userId);
        return ResponseEntity.noContent().build();
    }

}
