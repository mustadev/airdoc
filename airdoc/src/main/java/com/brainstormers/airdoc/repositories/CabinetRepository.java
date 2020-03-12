package com.brainstormers.airdoc.repositories;

//import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;

import com.brainstormers.airdoc.models.Cabinet;

public interface CabinetRepository extends MongoRepository<Cabinet, String> {
	 
		Cabinet findCabinetById(String id);
//		@Query("{' $text: { $search: ?0 '} }")
//		List<Cabinet> searchByName(String query);
}
