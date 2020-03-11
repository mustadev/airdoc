package com.brainstormers.airdoc.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.brainstormers.airdoc.models.Cabinet;

public interface CabinetRepository extends MongoRepository<Cabinet, String> {
	 
		Cabinet findCabinetById(String id);
}
