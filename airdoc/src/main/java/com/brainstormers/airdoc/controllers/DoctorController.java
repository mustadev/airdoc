package com.brainstormers.airdoc.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.brainstormers.airdoc.exceptions.ResourceNotFoundException;
import com.brainstormers.airdoc.exceptions.AuthException;
import com.brainstormers.airdoc.exceptions.ResourceAlreadyExistsException;
import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.services.DoctorService;

import ch.qos.logback.classic.Logger;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

/**
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@RestController
@RequestMapping("doctors")
@Api(tags = "Doctor Controlleur", value="Doctors Management System")
@CrossOrigin(origins="*", maxAge=3600) //TODO Mustapha change this for security reasons
public class DoctorController {
	
	
	private final static Logger logger = (Logger) LoggerFactory.getLogger(DoctorController.class);
	
	@Autowired
	private DoctorService doctorService;
	
	
	/**
	 * obtenir tous les doctors
	 * @return List<Doctor> 
	 * @throws ResourceNotFoundException
	 */
	@ApiOperation(value = "obtenir tous les doctors", response = List.class)
	@GetMapping(produces = "application/json")
    public ResponseEntity<List<Doctor>> getAllDoctors(
		    @ApiParam(name ="query", value="requête de recherche") 
		    @RequestParam(name = "query", defaultValue = "", required = false) String query,
		    @ApiParam(name = "city", value="limiter la recherche pour cette ville") 
		    @RequestParam(name = "city",defaultValue="", required=false) String city,
		    @ApiParam(name ="sort", value="trier le résultat par rating et reviews", defaultValue="rating", allowableValues="rating, reviews") 
		    @RequestParam(name = "sort", defaultValue= "rating", required=false) String sort)
		    throws ResourceNotFoundException {
	    //see https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9
    		logger.info("getAllDoctors::: params :  query: " + query + " sort: " + sort +  " city " + city);
	List<Doctor> results = doctorService
       			.findAll(query, city, Sort.by(sort).descending())
        		.orElseThrow(() -> new ResourceNotFoundException("No Doctors Found"));
 
	return new ResponseEntity<>(results, HttpStatus.OK);
    }

	
	/**
	 * trouver un doctor par son id
	 * @param id
	 * @return {@link ResponseEntity}
	 * @throws {@link ResourceNotFoundException}
	 */
	@ApiOperation(value = "trouver un doctor par son id", response = Doctor.class)
    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable("id") String id) throws ResourceNotFoundException {
	System.out.println("get doctor with id : " + id);
        Doctor result =  doctorService.findDoctorById(id)
        			.orElseThrow(()-> {
					return new ResourceNotFoundException("No Doctor with id : " + id );
				});
	return new ResponseEntity<Doctor>(result, HttpStatus.OK);
    }

	/**
	 * ajouter  un Doctor
	 * @param doctor
	 * @return Doctor 
	 */
    @ApiOperation(value = "ajouter un Doctor ", response = Doctor.class, code = 201)
    @PostMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<Doctor> createDoctor(
    		@ApiParam(value = "Doctor", required = true) @RequestBody Doctor doctor) throws ResourceAlreadyExistsException{
	Doctor result =  doctorService.saveDoctor(doctor).
		orElseThrow(() -> new ResourceAlreadyExistsException("could not create " +	doctor.toString()));
	return new ResponseEntity<Doctor>(result, HttpStatus.CREATED);
    }

	/**
	 * modifier un Doctor
	 * @param doctor
	 * @return Doctor
	 */
    @ApiOperation(value = "modifier un Doctor ", response = Doctor.class)
    @PutMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<Doctor>  updateDoctor(
    		@ApiParam(value = "Doctor", required = true) @RequestBody Doctor doctor) throws ResourceAlreadyExistsException{
    	//doctorService.saveDoctor(doctor);
        //return new ResponseEntity<>("Doctor added successfully", HttpStatus.OK);
	Doctor result = doctorService.
		saveDoctor(doctor).orElseThrow( () -> new ResourceAlreadyExistsException("could not update" +	doctor.toString()));
	return new ResponseEntity<>(result, HttpStatus.OK);

    }


    /**
     * supprimer un Doctor par son ID
     * @param id
     */
	@ApiOperation(value = "supprimer un doctor", response = ResponseEntity.class)
    @DeleteMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Map<String, Object>> deleteDoctor(@PathVariable String id) {
    	doctorService.deleteDoctorById(id);
    	//doctorService.deleteDoctor(doctorService.findBy(studentNumber).getId());
	Map<String, Object> msg = new HashMap<>();
	msg.put("doctorId", id);
	msg.put("message", "doctor successfully deleted");
	return new ResponseEntity<Map<String, Object>>(msg , HttpStatus.OK);
    }


    //TODO this should be put authserver
   @PostMapping("/login")
   @ApiOperation(value = "Doctor Login")
   public String login(//
      @ApiParam("Email") @RequestParam String email, //
      @ApiParam("Password") @RequestParam String password) {
	   System.out.println("email " + email + " password" + password);
    return doctorService.login(email, password).orElseThrow(() -> 
		new UsernameNotFoundException("User Not Found with username: " + email));
  }

  @PostMapping("/signup")
  @ApiOperation(value = "Doctor Inscription")
  public String signup(@ApiParam("Signup User") @RequestBody Doctor doctor) {
    return doctorService.signup(doctor).orElseThrow(() -> 
	new AuthException("aucun authentification trouver votre compte", 
			HttpStatus.NETWORK_AUTHENTICATION_REQUIRED));
  }
  
  @GetMapping(value = "/me")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
  @ApiOperation(value = "Doctor Authentification", response = Doctor.class)
  public Doctor whoami(HttpServletRequest req) {
    return doctorService.whoami(req).
    		orElseThrow(() -> 
    		new AuthException("aucun authentification trouver pour votre compte", 
    				HttpStatus.NETWORK_AUTHENTICATION_REQUIRED));
  }
}
