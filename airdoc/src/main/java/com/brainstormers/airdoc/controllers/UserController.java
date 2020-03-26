package com.brainstormers.airdoc.controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.brainstormers.airdoc.exceptions.ResourceAlreadyExistsException;
import com.brainstormers.airdoc.exceptions.ResourceNotFoundException;
import com.brainstormers.airdoc.models.User;
import com.brainstormers.airdoc.services.UserService;

import io.swagger.annotations.ApiParam;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author Ayoub Benhaimoud <ayoubbenhaimoud@gmail.com>
 * @since 17-03-2020
 */
@RestController
@RequestMapping("users")
public class UserController {

    private final static Logger logger = (Logger) LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * pour trouver tous les utilisateurs
     * @return List<User>
     * @throws ResourceNotFoundException
     */
    @GetMapping(value = {"","/"})
    public ResponseEntity<List<User>> getAllUsers() throws ResourceNotFoundException {
           List<User> result = userService
                   .findAll()
                   .orElseThrow(()-> new ResourceNotFoundException("no User found"));
           result.forEach((user)-> {
                    String msg = String.format("User name: %s User mail: %s",user.getFirstName(),user.getMail());
                    logger.debug(msg);
           });
           return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /**
     * récupérer un utilisateur en utilisant son id
     * @param id
     * @return {@link ResponseEntity}
     * @throws ResourceNotFoundException
     */
    @GetMapping(value= "/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id) throws ResourceNotFoundException {
              logger.debug("get user with id :"+id);
                      User result= userService.findUserById(id)
                              .orElseThrow(()->{
                                  return new ResourceNotFoundException("No User with this id : " + id );
                              });
              return new ResponseEntity<User>(result,HttpStatus.OK);
    }

    /**
     * cette méthode sert à créer un utilisateur
     * @param user
     * @return User
     * @throws ResourceAlreadyExistsException
     * @throws ResourceNotFoundException 
     */
    @PostMapping(value = {"","/"})
    public ResponseEntity<User> createUser(
    		@ApiParam(value = "Cabinet", required = true)@RequestBody User user) throws ResourceAlreadyExistsException{
            User result = userService.insertUser(user)
                    .orElseThrow(() -> new ResourceAlreadyExistsException("could not create " +	user.toString()));
        return new ResponseEntity<User>(result, HttpStatus.CREATED);
    }

    /**
     * cette méthode sert à modifier un utilisateur
     * @param user
     * @return User
     * @throws ResourceNotFoundException
     */
    @PutMapping(value ="/")
    public ResponseEntity<User> updateUser(@RequestBody User user) throws ResourceNotFoundException{
        User result = userService.updateUser(user)
                .orElseThrow(() -> new ResourceNotFoundException("could not update " +	user.toString()));
        return new ResponseEntity<User>(result, HttpStatus.CREATED);
    }

    /**
     * cette méthode sert à supprimer un utilisateur en utilisant son id
     * @param id
     * @return HttpStatus
     */
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Map<String,Object>> deleteUser(@PathVariable String id){
        userService.deleteUserById(id);
        Map<String,Object> msg = new HashMap<>();
        msg.put("userId", id);
        msg.put("message","user successfully deleted !");
        return new ResponseEntity<Map<String, Object>>(msg , HttpStatus.OK);
    }



}
