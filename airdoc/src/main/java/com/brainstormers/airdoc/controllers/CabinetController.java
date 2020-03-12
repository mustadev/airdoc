package com.brainstormers.airdoc.controllers;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brainstormers.airdoc.exceptions.ResourceNotFoundException;
import com.brainstormers.airdoc.models.Cabinet;
import com.brainstormers.airdoc.services.CabinetService;

import ch.qos.logback.classic.Logger;

@RestController
@RequestMapping("cabinets")
public class CabinetController {

	private final static Logger logger = (Logger) LoggerFactory.getLogger(CabinetController.class);
	
	@Autowired
	private CabinetService cabinetService;
	
	@GetMapping(value = "/")
    public List<Cabinet> getAllStudents() throws ResourceNotFoundException {
        
		List<Cabinet> cabinets = cabinetService
        		.findAll()
        		.orElseThrow(() -> new ResourceNotFoundException("No Cabinets Found::")); 
        
        cabinets.forEach((cabinet) -> {
        	String msg = String.format("Cabinet Name :: %s Cabinet Description %s", cabinet.getName(), cabinet.getDescription());
        	logger.debug(msg);
        	} 
        );
            	
        return cabinets;
    }

    @GetMapping(value = "/{id}")
    public Cabinet getCabinetById(@PathVariable("id") String id) throws ResourceNotFoundException {
        return cabinetService.findCabinetById(id)
        		.orElseThrow(() -> new ResourceNotFoundException("No Cabinet with id ::" + id ));
    }

    @PostMapping(value = "/")
    public ResponseEntity<?> saveOrUpdateCabinet(@RequestBody Cabinet cabinet) {
    	cabinetService.saveOrUpdateCabinet(cabinet);
        return new ResponseEntity<>("Student added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteStudent(@PathVariable String id) {
    	cabinetService.deleteCabinetById(id);
    	//cabinetService.deleteCabinet(cabinetService.findBy(studentNumber).getId());
    }
    
    @GetMapping(value = "/search/{query}")
    public List<Cabinet> search(@PathVariable("query") String query) throws ResourceNotFoundException{
    	List<Cabinet> results = cabinetService.search(query)
    			.orElseThrow(() -> new ResourceNotFoundException("No Cabinets Match your query :: " + query));
    	System.out.println(":::::::::::::::::::::::::::::::");
    	results.forEach((cabinet) -> {
        	String msg = String.format("Cabinet Name :: %s Cabinet Description %s", cabinet.getName(), cabinet.getDescription());
        	logger.debug(msg);
        	} 
        );
    	System.out.println(":::::::::::::::::::::::::::::::");
    	return results;
    }

}
