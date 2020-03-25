package com.brainstormers.airdoc.services;





import org.springframework.beans.factory.annotation.Autowired;

import com.brainstormers.airdoc.models.User;
import com.brainstormers.airdoc.repositories.UserRepository;

import java.util.List;
import java.util.Optional;

/**
 * this class implements {@link UserService}
 * @author Ayoub BenHaimoud <ayoubbenhaimoud@gmail.com>
 * @since 17-3-2020
 */

public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public Optional<List<User>> findAll() {
        return Optional.of(userRepository.findAll());
    }

    @Override
    public Optional<User> findUserById(String id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> insertUser(User user) {
        return Optional.of(userRepository.insert(user));
    }

    @Override
    public Optional<User> updateUser( User user) {
        return Optional.of(userRepository.save(user));
    }

    @Override
    public void deleteUserById(String id) {
             userRepository.deleteById(id);
    }
}
