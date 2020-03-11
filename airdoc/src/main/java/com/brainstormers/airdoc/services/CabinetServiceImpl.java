package com.brainstormers.airdoc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.Cabinet;
import com.brainstormers.airdoc.repositories.CabinetRepository;

@Service
public class CabinetServiceImpl implements CabinetService {
	
	@Autowired
	private CabinetRepository cabinetRepo;

	@Override
	public List<Cabinet> findAll() {
		
		return cabinetRepo.findAll();
	}

	@Override
	public Cabinet findCabinetById(String id) {
				return cabinetRepo.findCabinetById(id);
	}
	@Override
	public void saveOrUpdateCabinet(Cabinet cabinet) {
		cabinetRepo.save(cabinet);
		
	}

	@Override
	public void deleteCabinetById(String id) {
		cabinetRepo.deleteById(id);
	}

	

}
