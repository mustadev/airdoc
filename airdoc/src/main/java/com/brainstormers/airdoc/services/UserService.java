package com.brainstormers.airdoc.services;


import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.User;

import java.util.List;
import java.util.Optional;

/** 
 * cet interface pour déclarer toutes les méthodes à utiliser sur la classe UserServiceImpl
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 17-03-2020
 */

@Service
public interface UserService {

    /**
     * cette méthode pour récupérer tous les utilisateur 
     * @return List<User>
     */
    Optional<List<User>> findAll();

    /**
     * cette méthode sert à trouver des utilisateur en utilissant l'id
     * @param id
     * @return
     */
    Optional<User> findUserById(String id);

    /**
     * cette méthode sert à créer des nouvaux utilisateur
     * @param user
     * @return
     */
    Optional<User> insertUser(User user);

    /**
     * cette méthode sert à modifier un utilisateur
     * @param user
     * @return
     */
    Optional<User> updateUser(User user);
    void deleteUserById(String id);

}

