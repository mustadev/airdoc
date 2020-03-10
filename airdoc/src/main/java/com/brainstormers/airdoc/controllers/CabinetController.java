package com.brainstormers.airdoc.controllers;


import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.brainstormers.airdoc.models.Cabinet;
import com.brainstormers.airdoc.repositories.CabinetRepository;

import ch.qos.logback.classic.Logger;





@RestController
public class CabinetController {
	
	private final static Logger logger = (Logger) LoggerFactory.getLogger(CabinetController.class);
	
	@Autowired
	private CabinetRepository cabinetRepo;
	
	@GetMapping("/cabinets")
	public String cabinets(@RequestParam(value = "id") String id) {
		
		if (id == null) {
			return "{\"cabinet\"}";
		}
		
		return "{\"cabinets\"}";
	}
	
	@PostMapping("/cabinet")
	public String addCabintet(@ModelAttribute("ca") CabinetAttribute ca) {
		System.out.println(":::::::::::::::::::::::::::::::::::::::::::::::::::::::");
		logger.info("Post ::: /cabinet ");
		if (ca == null) logger.warn("objet cabinet is null");
		logger.debug(String.format("nom %s description %s address %s ", 
	    		ca.getName(), 
	    		ca.getDescription(),
	    		ca.getAddress()
	    	
				));
	    cabinetRepo.save(new Cabinet(ca.getName()));
	    //mise a jour 
	    logger.info("cabinet added");
	    return "result";
	}
	
	@GetMapping("/cabinets")
	public String cabinets(Model model) {
		
		System.out.println(":::::::::::::::::::::::::::::::::::::::::::::::::::::::");
		System.out.println("/cabinet requested");
		List<Cabinet> cabinets = cabinetRepo.findAll();
		cabinets.forEach((cabinet) -> System.out.println(cabinet.getName()));
		model.addAttribute("cabinets", cabinets);
		return "cabinets";
	}
	
	
	
	
	class CabinetAttribute {
		
		public CabinetAttribute() {
		}
		private String name;
		private String description;
		private String address;
		
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		
	}

}
