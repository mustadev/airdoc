package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;
import com.brainstormers.airdoc.exceptions.ResourceNotFoundException;
import com.brainstormers.airdoc.models.Doctor;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

/**
 * une services  pour accéder et modifier la base de données
 *  
 * @author Mustapha de BrainStormers
 * @since 13-03-2020
 */
@Service
public interface DoctorService {
	
	
	/**
	 * trouver les doctors
	 * @return List<Doctor> 
	 */
	Optional<List<Doctor>> findAll();

	/**
	 * trouver les doctors
	 * @param {@link Criteria} criteria
	 * @return List<Doctor> 
	 */
	Optional<List<Doctor>> findAll(String query, String city, Sort sort);
	
	
	/**
	 * trouver un doctor par son id
	 * @param id
	 * @return Optional<Doctor> doctor
	 * @throws ResourceNotFoundException
	 */
	Optional<Doctor> findDoctorById(String id);
	
	/**
	 * ajouter ou modifier un Doctor
	 * @param doctor
	 */
	Optional<Doctor> saveDoctor(Doctor doctor);
	/**
	
	/**
	 * modifier un Doctor
	 * @param doctor
	 */
	Optional<Doctor> updateDoctor(Doctor doctor);

     /**
     * supprimer un Doctor par son Id
     * @param id
     */
    void deleteDoctorById(String id);
    
    /**
     * chercher les doctor
     * @param query
     * @return List<Doctor> doctors
     */
    Optional<List<Doctor>> search(String query);
	
}
