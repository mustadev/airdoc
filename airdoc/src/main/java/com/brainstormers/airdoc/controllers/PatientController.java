package com.brainstormers.airdoc.controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.brainstormers.airdoc.exceptions.ResourceAlreadyExistsException;
import com.brainstormers.airdoc.exceptions.ResourceNotFoundException;
import com.brainstormers.airdoc.models.Patient;
import com.brainstormers.airdoc.services.PatientService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author Ayoub Benhaimoud <ayoubbenhaimoud@gmail.com>
 * @since 17-03-2020
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("patients")
@Api(tags = "Patient Controlleur", value="Patient Management System")
public class PatientController {

    private final static Logger logger = (Logger) LoggerFactory.getLogger(PatientController.class);

    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    /**
     * pour trouver tous les patientes
     * @return List<Patient>
     * @throws ResourceNotFoundException
     */
    @GetMapping(value = {"","/"})//TODO AYOUB REMOVE "/" you don't need "/"
    public ResponseEntity<List<Patient>> getAllPatients() throws ResourceNotFoundException {
           List<Patient> result = patientService
                   .findAll()
                   .orElseThrow(()-> new ResourceNotFoundException("no patient found"));
           result.forEach((patient)-> {
                   // String msg = String.format("patient name: %s patient mail: %s",patient.getFirstname(),patient.getEmail());
                   // logger.debug(msg);
           });
           return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /**
     * récupérer un patient en utilisant son id
     * @param id
     * @return {@link ResponseEntity}
     * @throws ResourceNotFoundException
     */
    @GetMapping(value= "/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable("id") String id) throws ResourceNotFoundException {
              logger.debug("get patient with id :"+id);
              Patient result= patientService.findPatientById(id)
                              .orElseThrow(()->{
                                  return new ResourceNotFoundException("No patient with this id : " + id );
                              });
              return new ResponseEntity<Patient>(result,HttpStatus.OK);
    }

    /**
     * cette méthode sert à créer un patient
     * @param patient
     * @return patient
     * @throws ResourceAlreadyExistsException
     * @throws ResourceNotFoundException 
     */
    @PostMapping(value = {"","/"})
    public ResponseEntity<Patient> createPatient(
    		@ApiParam(value = "Patient", required = true)@RequestBody Patient patient) throws ResourceAlreadyExistsException{
    	Patient result = patientService.insertPatient(patient)
                    .orElseThrow(() -> new ResourceAlreadyExistsException("could not create " +	patient.toString()));
        return new ResponseEntity<Patient>(result, HttpStatus.CREATED);
    }

    /**
     * cette méthode sert à modifier un patient
     * @param patient
     * @return patient
     * @throws ResourceNotFoundException
     */
    @PutMapping(value ="/")
    public ResponseEntity<Patient> updatePatient(@RequestBody Patient patient) throws ResourceNotFoundException{
    	Patient result = patientService.updatePatient(patient)
                .orElseThrow(() -> new ResourceNotFoundException("could not update " +	patient.toString()));
        return new ResponseEntity<Patient>(result, HttpStatus.CREATED);
    }

    /**
     * cette méthode sert à supprimer un patient en utilisant son id
     * @param id
     * @return HttpStatus
     */
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Map<String,Object>> deletePatient(@PathVariable String id){
    	patientService.deletePatientById(id);
        Map<String,Object> msg = new HashMap<>();
        msg.put("patientId", id);
        msg.put("message","patient successfully deleted !");
        return new ResponseEntity<Map<String, Object>>(msg , HttpStatus.OK);
    }



}
