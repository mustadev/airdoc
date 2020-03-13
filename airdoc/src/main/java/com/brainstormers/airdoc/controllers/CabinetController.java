package com.brainstormers.airdoc.controllers;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

/**
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@RestController
@RequestMapping("cabinets")
@Api(value="Cabinets Management System")
@CrossOrigin(origins="*", maxAge=3600) //TODO Mustapha change this for security reasons
public class CabinetController {
	
	
	private final static Logger logger = (Logger) LoggerFactory.getLogger(CabinetController.class);
	
	@Autowired
	private CabinetService cabinetService;
	
	
	/**
	 * obtenir tous les cabinets
	 * @return List<Cabinet> 
	 * @throws ResourceNotFoundException
	 */
	@ApiOperation(value = "obtenir tous les cabinets", response = List.class)
	@GetMapping(value = "/")
    public List<Cabinet> getAllCabinets() throws ResourceNotFoundException {
		List<Cabinet> cabinets = cabinetService
        		.findAll()
        		.orElseThrow(() -> new ResourceNotFoundException("No Cabinets Found"));
        	cabinets.forEach((cabinet) -> {
        		String msg = String.format("Cabinet Name :: %s Cabinet Description %s", cabinet.getName(), cabinet.getDescription());
        		logger.debug(msg);
        	} 
        );
            	
        return cabinets;
    }

	
	/**
	 * trouver un cabinet par son id
	 * @param id
	 * @return
	 * @throws ResourceNotFoundException
	 */
	@ApiOperation(value = "trouver un cabinet par son id", response = Cabinet.class)
    @GetMapping(value = "/{id}")
    public Cabinet getCabinetById(@PathVariable("id") String id) throws ResourceNotFoundException {
        return cabinetService.findCabinetById(id)
        		.orElseThrow(() -> new ResourceNotFoundException("No Cabinet with id ::" + id ));
    }

	/**
	 * ajouter ou modifier un Cabinet
	 * @param cabinet
	 * @return ResponseEntity
	 */
	@ApiOperation(value = "ajouter ou modifier un Cabinet ", response = ResponseEntity.class)
    @PostMapping(value = "/")
    public ResponseEntity<?> saveOrUpdateCabinet(
    		@ApiParam(value = "Cabinet", required = true) @RequestBody Cabinet cabinet) {
    	cabinetService.saveOrUpdateCabinet(cabinet);
        return new ResponseEntity<>("Cabinet added successfully", HttpStatus.OK);
    }

    /**
     * supprimer un Cabinet par son Id
     * @param id
     */
	@ApiOperation(value = "supprimer un cabinet", response = ResponseEntity.class)
    @DeleteMapping(value = "/{id}")
    public void deleteCabinet(@PathVariable String id) {
    	cabinetService.deleteCabinetById(id);
    	//cabinetService.deleteCabinet(cabinetService.findBy(studentNumber).getId());
    }
    
    /**
     * chercher les cabinet
     * @param query
     * @return List<Cabinet> cabinets
     * @throws ResourceNotFoundException
     */
    @ApiOperation(value = "chercher les cabinet", response = ResponseEntity.class)
    @GetMapping(value = "/search/{query}")
    public List<Cabinet> search(
    		@ApiParam(value = "Search query", required = true) @PathVariable("query") String query) throws ResourceNotFoundException{
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
