package com.example.movis.backend.controller;

import com.example.movis.backend.model.User;
import com.example.movis.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
public class UserController {
    private final UserRepository userRepository;

    @CrossOrigin(origins = "*")
    @GetMapping("/getusers")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/{id}")
    public User getUser(@RequestParam long id) {
        return userRepository.findById(id);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/adduser")
    public User addUser(@ModelAttribute User user){
        if(userRepository.findByUserName(user.getUserName()) == null)
            return userRepository.save(user);
        else
            return null;
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/deleteuser")
    public User deleteuser(@RequestParam long id){
        return userRepository.deleteUserByUserid(id);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/login")
    public boolean login(@RequestParam String username, @RequestParam String password) {
        if(userRepository.findByUserName(username) == null)
            return false;

        User temp = userRepository.findByUserName(username);
        if(temp.getPassword().equals(password))
            return true;
        else
            return false;
    }
}
