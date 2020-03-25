package com.brainstormers.airdoc.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

//import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
//import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.brainstormers.airdoc.models.Cabinet;

/**
 * implementation de {@link MongoRepository MongoRepository.class}
 * @author Belaid
 * @since 16-03-2020
 * 
 */
@Repository
public interface CabinetRepository extends MongoRepository<Cabinet, String> {
	 
		/**
		 * trouver cabinet par ID
		 * @param id
		 * @return cabinet {@link Cabinet Cabinet.class}
		 */
//		Cabinet findCabinetById(String id);
		@Query("{ 'name' : { $regex: ?0 } }")
		List<Cabinet> searchNameByRegex(String query);

		Page<Cabinet> findAllByLocation(String ville, String rue, String postcode, Pageable pageable);
}
