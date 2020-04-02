package com.brainstormers.airdoc.repositories;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.brainstormers.airdoc.models.Doctor;

/**
 * implementation de {@link MongoRepository MongoRepository.class}
 * @author Mustapha de BrainStormers
 * @since 13-03-2020
 * 
 */
@Repository
public interface DoctorRepository extends MongoRepository<Doctor, String> {
	 
		/**
		 * trouver doctor par ID
		 * @param id
		 * @return doctor {@link Doctor Doctor.class}
		 */
//		Doctor findDoctorById(String id);
		@Query("{ 'name' : { $regex: ?0 } }")
		List<Doctor> searchNameByRegex(String query);

		@Query("{'firstname': {$regex: ?0 }, 'city': {$regex: ?1} }")
		List<Doctor> findAll(String query, String city, Sort sort);

		Doctor findByEmail(String email);

		boolean existsByEmail(String Email);

}
