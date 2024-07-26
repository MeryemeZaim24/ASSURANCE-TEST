package com.tarmiz.utilisateur.controller;

import com.tarmiz.utilisateur.model.User;
import com.tarmiz.utilisateur.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
    @Autowired
    private UserRepository repository;

    @PostMapping("/login")public ResponseEntity<?>  loginUser(@RequestBody User userData){
        System.out.println(userData);    User user=repository.findByUserId(userData.getUserId());
        if (user.getPassword().equals(userData.getPassword()))        return  ResponseEntity.ok(user);
        return (ResponseEntity<?>) ResponseEntity.internalServerError();}



}
