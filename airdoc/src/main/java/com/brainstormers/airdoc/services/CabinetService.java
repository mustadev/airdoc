package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import com.brainstormers.airdoc.models.Cabinet;

public interface CabinetService {
	
	Optional<List<Cabinet>> findAll();
	
	Optional<Cabinet> findCabinetById(String id);
	
	void saveOrUpdateCabinet(Cabinet cabinet);

    void deleteCabinetById(String id);
    
    Optional<List<Cabinet>> search(String query);
	
}
