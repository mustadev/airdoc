package com.brainstormers.airdoc.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.brainstormers.airdoc.models.Patient;

/**
 * cet interface hérite  {@link MongoRepository MongoRepository.class}
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 17-03-2020
 * 
 */
public interface PatientRepository extends MongoRepository<Patient,String> {

	Patient findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
	
	Patient findByEmail(String email);

	void deleteByEmail(String email);
}
