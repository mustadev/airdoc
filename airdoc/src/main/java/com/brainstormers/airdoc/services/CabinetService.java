package com.brainstormers.airdoc.services;

import java.util.List;

import com.brainstormers.airdoc.models.Cabinet;

public interface CabinetService {
	
	List<Cabinet> findAll();
	
	Cabinet findCabinetById(String id);
	
	void saveOrUpdateCabinet(Cabinet cabinet);

    void deleteCabinetById(String id);

	
}
