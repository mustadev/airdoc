package com.brainstormers.airdoc.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.OperationsException;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brainstormers.airdoc.exceptions.ResourceNotFoundException;
import com.brainstormers.airdoc.exceptions.ResourceAlreadyExistsException;
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
	@GetMapping(produces = "application/json")
    public ResponseEntity<List<Cabinet>> getAllCabinets() throws ResourceNotFoundException {
	    //TODO implement search , sorting, pagination, filtring
	    //here using query params 
	    //see https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9
		List<Cabinet> results = cabinetService
        		.findAll()
        		.orElseThrow(() -> new ResourceNotFoundException("No Cabinets Found"));
        	results.forEach((cabinet) -> {
        		String msg = String.format("Cabinet Name :: %s Cabinet Description %s", cabinet.getName(), cabinet.getDescription());
        		logger.debug(msg);
        	} 
        );
            	
	return new ResponseEntity<>(results, HttpStatus.OK);
    }

	
	/**
	 * trouver un cabinet par son id
	 * @param id
	 * @return {@link ResponseEntity}
	 * @throws {@link ResourceNotFoundException}
	 */
	@ApiOperation(value = "trouver un cabinet par son id", response = Cabinet.class)
    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Cabinet> getCabinetById(@PathVariable("id") String id) throws ResourceNotFoundException {
	System.out.println("get cabinet with id : " + id);
        Cabinet result =  cabinetService.findCabinetById(id)
        			.orElseThrow(()-> {
					return new ResourceNotFoundException("No Cabinet with id : " + id );
				});
	return new ResponseEntity<Cabinet>(result, HttpStatus.OK);
    }

	/**
	 * ajouter  un Cabinet
	 * @param cabinet
	 * @return Cabinet 
	 */
    @ApiOperation(value = "ajouter un Cabinet ", response = Cabinet.class, code = 201)
    @PostMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<Cabinet> createCabinet(
    		@ApiParam(value = "Cabinet", required = true) @RequestBody Cabinet cabinet) throws ResourceAlreadyExistsException{
    	//cabinetService.saveCabinet(cabinet);
        //return new ResponseEntity<>("Cabinet added successfully", HttpStatus.OK);
	Cabinet result =  cabinetService.saveCabinet(cabinet).
		orElseThrow(() -> new ResourceAlreadyExistsException("could not create " +	cabinet.toString()));
	return new ResponseEntity<Cabinet>(result, HttpStatus.CREATED);
    }

	/**
	 * modifier un Cabinet
	 * @param cabinet
	 * @return Cabinet
	 */
    @ApiOperation(value = "modifier un Cabinet ", response = Cabinet.class)
    @PutMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<Cabinet>  updateCabinet(
    		@ApiParam(value = "Cabinet", required = true) @RequestBody Cabinet cabinet) throws ResourceAlreadyExistsException{
    	//cabinetService.saveCabinet(cabinet);
        //return new ResponseEntity<>("Cabinet added successfully", HttpStatus.OK);
	Cabinet result = cabinetService.
		saveCabinet(cabinet).orElseThrow( () -> new ResourceAlreadyExistsException("could not update" +	cabinet.toString()));
	return new ResponseEntity<>(result, HttpStatus.OK);

    }


    /**
     * supprimer un Cabinet par son ID
     * @param id
     */
	@ApiOperation(value = "supprimer un cabinet", response = ResponseEntity.class)
    @DeleteMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Map<String, Object>> deleteCabinet(@PathVariable String id) {
    	cabinetService.deleteCabinetById(id);
    	//cabinetService.deleteCabinet(cabinetService.findBy(studentNumber).getId());
	Map<String, Object> msg = new HashMap<>();
	msg.put("cabinetId", id);
	msg.put("message", "cabinet successfully deleted");
	return new ResponseEntity<Map<String, Object>>(msg , HttpStatus.OK);
    }
    
    /**
     * chercher les cabinet
     * @param query
     * @return List<Cabinet> cabinets
     * @throws ResourceNotFoundException
     */
    @ApiOperation( value = "chercher les cabinet", response = List.class )
    @GetMapping(value = "/search/{query}" , produces = "application/json")
    public ResponseEntity<List<Cabinet>> search(
    		@ApiParam(value = "Search query", required = true)
    		@PathVariable("query") String query) throws ResourceNotFoundException{
    	List<Cabinet> results = cabinetService.search(query)
    			.orElseThrow(() -> new ResourceNotFoundException("No Cabinets Match your query :: " + query));
    	results.forEach((cabinet) -> {
        	String msg = String.format("Cabinet Name :: %s Cabinet Description %s", cabinet.getName(), cabinet.getDescription());
        	logger.debug(msg);
        	} 
        );
    	return new ResponseEntity<>(results, HttpStatus.OK);
    }

}
