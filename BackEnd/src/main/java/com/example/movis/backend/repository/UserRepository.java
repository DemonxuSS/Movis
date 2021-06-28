package com.example.movis.backend.repository;

import com.example.movis.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.*;

public interface UserRepository extends JpaRepository<User, Long> {
    User findById(long id);

    User findByUserName(String userName);

    void deleteUserByUserid(Long userid);

    User findByUserid(Long id);
}
