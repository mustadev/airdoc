package com.brainstormers.airdoc.services;




import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.User;

import java.util.List;
import java.util.Optional;

/**
 * this interface to declare all methods that we well use in UserServiceImpl class
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 17-03-202à
 */

@Service
public interface UserService {

    /**
     * this method to find all users
     * @return List<User>
     */
    Optional<List<User>> findAll();

    /**
     * this method to find User by id
     * @param id
     * @return
     */
    Optional<User> findUserById(String id);

    /**
     * this method to create or insert new User
     * @param user
     * @return
     */
    Optional<User> insertUser(User user);

    /**
     * this method to update User
     * @param user
     * @return
     */
    Optional<User> updateUser(User user);
    void deleteUserById(String id);

}

