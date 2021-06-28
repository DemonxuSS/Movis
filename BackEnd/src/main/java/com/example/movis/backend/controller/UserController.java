package com.example.movis.backend.controller;

import com.example.movis.backend.model.User;
import com.example.movis.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.beans.Transient;
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
    @Transactional
    @DeleteMapping("/deleteuser")
    public void deleteUser(@RequestParam String id){
        Long variable = Long.valueOf(id);
        userRepository.deleteUserByUserid(variable);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/login")
    public User login(@RequestParam String username, @RequestParam String password) {
        User temp = userRepository.findByUserName(username);
        if(temp == null)
            return null;
        else if (temp.getPassword().equals(password))
            return temp;
        else
            return null;
    }
}
