package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import com.brainstormers.airdoc.exceptions.ResourceNotFoundException;
import com.brainstormers.airdoc.models.Doctor;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

/**
 * une services  pour accéder et modifier la base de données
 *  
 * @author Mustapha de BrainStormers
 * @since version 0.0.1
 */

public interface DoctorService {
	
	
	/**
	 * Trouver les doctors
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
	Optional<Doctor> findById(String id);
	
	/**
	 * ajouter ou modifier un Doctor
	 * @param doctor
	 */
	Optional<Doctor> save(Doctor doctor);
	/**
	
	/**
	 * modifier un Doctor
	 * @param doctor
	 */
	Optional<Doctor> update(Doctor doctor);

     /**
     * supprimer un Doctor par son Id
     * @param id
     */
    void deleteById(String id);
    
    /**
     * chercher les doctor
     * @param query
     * @return List<Doctor> doctors
     */
    Optional<List<Doctor>> search(String query);

 
    /**
     *  supprimer un Doctor par son Email
     * @param doctor
     *
     * */
    public void deleteByEmail(String email);
    
    /**
     *  supprimer tout les Doctors 
     * @param doctor
     *
     * */
    public void deleteAll();
    
    /**
     * Trouver le doctor par son Email
     * @param doctor
     *
     * */
    public Optional<Doctor> findByEmail(String email);
    
    
    /**
     * Trouver le doctor par son nom d'utilisateur
     * @param doctor
     *
     * */
    public Optional<Doctor> findByUsername(String username);
    

    /**
     * Vérifier que le doctor existe par nom d'utilisateur
     * @param doctor
     *
     * */
    boolean existsByUsername(String username);

    /**
     * Vérifier que le doctor existe par Email
     * @param doctor
     *
     * */
    boolean existsByEmail(String email);

	
}
