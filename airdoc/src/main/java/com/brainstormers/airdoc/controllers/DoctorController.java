package com.brainstormers.airdoc.controllers;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import org.springframework.web.multipart.MultipartFile;

import com.brainstormers.airdoc.exceptions.ResourceNotFoundException;
import com.brainstormers.airdoc.exceptions.ResourceAlreadyExistsException;
import com.brainstormers.airdoc.models.Clinic;
import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.models.Photo;
import com.brainstormers.airdoc.payload.response.MessageResponse;
import com.brainstormers.airdoc.services.DoctorService;
import com.brainstormers.airdoc.services.PhotoService;

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
	
	@Autowired
	private PhotoService photoService;
	
	
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
    		if (query.isEmpty() && city.isEmpty()) {
    			List<Doctor> results = doctorService
    	       			.findAll(Sort.by(sort).descending())
    	        		.orElseThrow(() -> new ResourceNotFoundException("No Doctors Found"));
    			return new ResponseEntity<>(results, HttpStatus.OK);
    			
    		}else if (query.isEmpty()) {
    			System.out.println("query");
    			List<Doctor> results = doctorService
    	       			.searchByCity(city, Sort.by(sort).descending())
    	        		.orElseThrow(() -> new ResourceNotFoundException("No Doctors Found"));
    			return new ResponseEntity<>(results, HttpStatus.OK);
    		}
	
    		List<Doctor> results = doctorService
	       			.search(query, city, Sort.by(sort).descending())
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
        Doctor result =  doctorService.findById(id)
        			.orElseThrow(()-> {
					return new ResourceNotFoundException("No Doctor with id : " + id );
				});
	return new ResponseEntity<Doctor>(result, HttpStatus.OK);
    }
    
	/**
	 * trouver un doctor par son nom d'utilisateur
	 * @param username
	 * @return {@link ResponseEntity}
	 * @throws {@link ResourceNotFoundException}
	 */
	@ApiOperation(value = "trouver un doctor par son nom d'utilisateur", response = Doctor.class)
    @GetMapping(value = "/username/{username}", produces = "application/json")
    public ResponseEntity<Doctor> getDoctorByUsername(@PathVariable("username") String username) throws ResourceNotFoundException {
	System.out.println("get doctor with username : " + username);
        Doctor result =  doctorService.findByUsername(username)
        			.orElseThrow(()-> {
					return new ResourceNotFoundException("No Doctor with id : " + username );
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
	Doctor result =  doctorService.save(doctor).
		orElseThrow(() -> new ResourceAlreadyExistsException("could not create " +	doctor.toString()));
	return new ResponseEntity<Doctor>(result, HttpStatus.CREATED);
    }

	/**
	 * modifier un Doctor
	 * @param doctor
	 * @return Doctor
	 */
    @ApiOperation(value = "modifier un Doctor ", response = Doctor.class)
//    @PreAuthorize("#doctor.id == principal.id")
    @PutMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<Doctor>  updateDoctor(
    		@ApiParam(value = "Doctor", required = true) @RequestBody Doctor doctor) throws ResourceAlreadyExistsException{
    	//doctorService.saveDoctor(doctor);
        //return new ResponseEntity<>("Doctor added successfully", HttpStatus.OK);
	Doctor result = doctorService.
		save(doctor).orElseThrow( () -> new ResourceAlreadyExistsException("could not update" +	doctor.toString()));
	return new ResponseEntity<>(result, HttpStatus.OK);

    }


    /**
     * supprimer un Doctor par son ID
     * @param id
     * @return Map<String, Object>
     */
	@ApiOperation(value = "supprimer un doctor", response = ResponseEntity.class)
    @DeleteMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Map<String, String>> deleteDoctor(@PathVariable String id) {
    	doctorService.deleteById(id);
    	//doctorService.deleteDoctor(doctorService.findBy(studentNumber).getId());
	Map<String, String> msg = new HashMap<>();
	msg.put("doctorId", id);
	msg.put("message", "doctor successfully deleted");
	return new ResponseEntity<Map<String, String>>(msg , HttpStatus.OK);
    }

	
	/**
     * Ajouter Image du Doctor
     * @param photo
     * @return Photo id
     */
	@ApiOperation(value = "Ajouter Image du Doctor", response = ResponseEntity.class)
	@PostMapping("/{username}/avatar/")
	public ResponseEntity<MessageResponse> uploadPhoto(
			@PathVariable("username") String username,
			@RequestParam("avatar") MultipartFile file){
	    String message = "";
	    Photo photo = new Photo(); 
        try {
			photo.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
			photo.setOwnerId(username);
			String avatarId = photoService.savePhoto(photo).get();
			Doctor doctor = doctorService.findByUsername(username).get();
			doctor.setAvatar(avatarId);
			doctorService.save(doctor);
			message = avatarId;
		    return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(message));
		   
		} catch (IOException e) {
			
			e.printStackTrace();
			 message = "Could not upload the file: " + file.getOriginalFilename() + "!";
		     return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
		}   
	   
	  }
	
	/**
     * Trouver Image du Doctor
     * @param photo
     * @return Photo Base64 Encoded
     */
	@ApiOperation(value = "Trouver Image du Doctor", response = ResponseEntity.class)
	@GetMapping("/photo/{photoId}")
	  public ResponseEntity<MessageResponse> getPhoto(@PathVariable("photoId") String photoId) throws ResourceNotFoundException {
			Photo photo = photoService
					.getPhoto(photoId)
					.orElseThrow(()-> new ResourceNotFoundException("could not find photo with id"));
			String base64Image = Base64.getEncoder().encodeToString(photo.getImage().getData());
			return ResponseEntity.ok().body(new MessageResponse(base64Image));
	    }

	/**
     * Update Image du Doctor
     * @param photoId 
     * @param file
     * @return Photo Base64 Encoded
     */
	@ApiOperation(value = "Update Image du Doctor", response = ResponseEntity.class)
	@PutMapping("/photo/{photoId}")
	  public ResponseEntity<MessageResponse> getUpdatePhoto(
			  @PathVariable("photoId") String photoId, 
			  @RequestParam("photo") MultipartFile file) throws ResourceNotFoundException {
		String message = "";
			Photo photo = photoService
					.getPhoto(photoId)
					.orElseThrow(()-> new ResourceNotFoundException("could not find photo with id"));
			try {
				photo.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
				photoService.savePhoto(photo);
				message = "Photo updated successfully";
			    return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(message));
			   
			} catch (IOException e) {
				
				e.printStackTrace();
				 message = "Could not update the Photo: " + file.getOriginalFilename() + "!";
			     return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
			}   
	  }
	/**
     * Ajouter Image du Clinic
     * @param photo
     * @return Clinic Photo Id
     */
	@ApiOperation(value = "Ajouter Image du Clinic", response = ResponseEntity.class)
	@PostMapping("/{username}/clinic/")
	public ResponseEntity<MessageResponse> uploadClinicPhoto(
			@PathVariable("username") String username,
			@RequestParam("clinic") MultipartFile file){
	    String message = "";
	    Photo photo = new Photo(); 
        try {
        	System.out.println("::::::::::::::: File name: " + file.getOriginalFilename());
			photo.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
			System.out.println("::::::::::::::: File binary: " + photo.getImage().getData().toString());
			photo.setOwnerId(username);
			String photoId = photoService.savePhoto(photo).orElseThrow(() -> new Exception("::::::::::could not upload photo"));
			System.out.println(":::::::: Photo Id: " + photoId);
			Doctor doctor = doctorService.findByUsername(username).orElseThrow(() -> new Exception(" ok could not upload photo"));
			doctor.getClinic().addPhoto(photoId); //TODO make sure max is 4
			Doctor doc = doctorService.save(doctor).get();
			System.out.println("Doctor clinic photos: " + doc.getClinic().getPhotos().toString());
			message = photoId;
		    return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(message));
		   
		} catch (Exception e) {
			
			e.printStackTrace();
			 message = "Could not upload the file: " + file.getOriginalFilename() + "!";
		     return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
		}   
	   
	  }
}




