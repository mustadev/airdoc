package com.brainstormers.airdoc.init;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.models.User;

import com.brainstormers.airdoc.repositories.UserRepository;

/**
 * cette classe sert à créer une base composée d'utilisateur, à fin que lorsque on veut tester 
 * le code on aura un example pour le vérifier!!!
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 20-03-2020
 *
 */
@Component
public class UserStartUpRunner {
	
    private static final Logger logger = LoggerFactory.getLogger(UserStartUpRunner.class);
    
    @Autowired
    private UserRepository userRepository;

    
    public void run(String...args) throws Exception {
        logger.info("Application started with command-line arguments: {} . \n To kill this application, press Ctrl + C.", Arrays.toString(args));
	System.out.println(":::::::::::::::::::::::  From StartUp");
   	
	//supprimer les utilisateur
	logger.info("removing all databases records");
	userRepository.deleteAll();
	//la création des "dummy data"
	List<Doctor> users = new ArrayList<>();
	User user1 = new User();
	user1.setFirstName("Ayoub");//setName("asafar");
	user1.setLastName("ben");//setDescription("asafar Description");
	user1.setAge(23);//setCreatedBy(new User("musta", "pha",12,"musta@gmail.com"));
	user1.setMail("ayoub@gmail.com");
	User savedUser = userRepository.insert(user1);
	logger.debug("id: " +user1.getId() + " name: " + user1.getFirstName()+""+user1.getLastName());
    logger.debug("user "+user1.getId() + "saved");

	
	System.out.println("users saved !");


	System.out.println("finished");
    }

}
