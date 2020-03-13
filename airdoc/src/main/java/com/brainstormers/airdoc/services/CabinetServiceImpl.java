package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
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
				return Optional.of(cabinetRepo.findCabinetById(id));
	}
	@Override
	public void saveOrUpdateCabinet(Cabinet cabinet) {
		cabinetRepo.save(cabinet);
		
	}

	@Override
	public void deleteCabinetById(String id) {
		cabinetRepo.deleteById(id);
	}

	@Override
	public Optional<List<Cabinet>> search(String query) {
		System.out.println(":::::::::::::::::::::::::::::::::::::::::::::::");
		System.out.println("Query " + query);
		Cabinet c = new Cabinet();
		c.setName(query);
//		ExampleMatcher matcher = ExampleMatcher.matchingAll()
//										  .withIgnoreCase(true)
//										  .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);

//		Example<Cabinet> example = Example.of(c, ExampleMatcher.matchingAny());
		
//		ExampleMatcher matcher = ExampleMatcher.matching()
//        .withMatcher("country", startsWith().ignoreCase())
//        .withMatcher("postcode", startsWith().ignoreCase())
//        .withMatcher("street", contains().ignoreCase())
//        .withMatcher("streetNumber", contains().ignoreCase())
//        .withMatcher("city", String::contains().ignoreCase());
		//TODO implements a working search
		ExampleMatcher matcher = ExampleMatcher.matching()
				.withMatcher("name", ExampleMatcher.GenericPropertyMatchers.exact());
		Example<Cabinet> example = Example.of(c, matcher);
		List<Cabinet> results = cabinetRepo.findAll(example);
		return Optional.of(results);
		
	}

	

	

}
