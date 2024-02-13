package com.mobilePhoneShop.backend.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {
    private final String secret = "yourSecretKey"; // Replace with a secure secret key

    public String generateToken(String username, String password) {
        Claims claims = Jwts.claims().setSubject(username);
        claims.put("password", password);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 864000000)) 
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }


}

