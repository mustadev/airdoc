package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.Cabinet;
import com.brainstormers.airdoc.repositories.CabinetRepository;

/**
 * implementation de {@link CabinetService CabinetService.class}
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@Service
public class CabinetServiceImpl implements CabinetService {
	
	@Autowired
	private CabinetRepository cabinetRepo;

	
	@Override
	public Optional<List<Cabinet>> findAll() {
		return Optional.of(cabinetRepo.findAll());
	}

	@Override
	public Optional<Cabinet> findCabinetById(String id) {
		return cabinetRepo.findById(id);
	}

	@Override
	public Optional<Cabinet> saveCabinet(Cabinet cabinet) {
		return Optional.of(cabinetRepo.save(cabinet));
	}

	@Override
	public Optional<Cabinet>  updateCabinet(Cabinet cabinet) {
		return Optional.of(cabinetRepo.save(cabinet));
	}

	@Override
	public void deleteCabinetById(String id) {
		cabinetRepo.deleteById(id);
	}

	@Override
	public Optional<List<Cabinet>> search(String query) {
		List<Cabinet> results = cabinetRepo.searchNameByRegex(query);
		return Optional.of(results);
	/*  Query jquery = new Query();
		jquery.fields().exclude("description");
		jquery.addCriteria(Criteria.where("name").regex(query));
		List<Cabinet> results = cabinetRepo.fin;
		return Optional.of(results); 
	*/
	}
}
