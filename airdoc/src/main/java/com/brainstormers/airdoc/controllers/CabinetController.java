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
    public List<Cabinet> getAllStudents() {
        List<Cabinet> cabinets = cabinetService.findAll();
//        cabinets.forEach(( cabinet) -> {
//        	msg = String.format("Cabinet Name :: %s Cabinet Description %s", cabinet.)
//        	logger.debug("Cabinet Name :::::::::: " + cabinet);
//        });
        
        return cabinets;
    }

    @GetMapping(value = "/{id}")
    public Cabinet getCabinetById(@PathVariable("id") String id) {
        return cabinetService.findCabinetById(id);
    }
    
    @GetMapping(value = "/add")
    public void addtest() {
    	System.out.println("addtest started");
    	Cabinet cabinet = new Cabinet();
    	cabinet.setName("testname");
    	cabinet.setDescription("description test");
    	cabinetService.saveOrUpdateCabinet(cabinet);
    	System.out.println("cabinet added");
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

}
