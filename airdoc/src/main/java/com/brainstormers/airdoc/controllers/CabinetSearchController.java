package com.brainstormers.airdoc.controllers;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.brainstormers.airdoc.models.Cabinet;
import com.brainstormers.airdoc.repositories.CabinetRepository;
/**
 * 
 *@author Belaid 
 *@16/03/2020
 *Chercher les Cabinet
 */
@Controller
public class CabinetSearchController {
	private CabinetRepository cabinetRepository;
	
	public CabinetSearchController(CabinetRepository cabinetRepository) {
		this.cabinetRepository = cabinetRepository;
	}

	@GetMapping(value = "/cabinet/search")
    public String getCabinets(@RequestParam(value = "ville", required = false) String ville,
                            @RequestParam(value = "rue", required = false) String rue,
                            @RequestParam(value = "postcode", required = false) String postcode,
                            Pageable pageable, Model model) {
        Page<Cabinet> results = cabinetRepository.findAllByLocation(ville, rue, postcode, pageable);
        model.addAttribute("cabinets", results == null ? Page.empty() : results);
        return "/cabinet/cabinets";
    }      
}


