package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;
import com.brainstormers.airdoc.exceptions.ResourceNotFoundException;
import com.brainstormers.airdoc.models.Cabinet;

/**
 * une services  pour accéder et modifier la base de données
 *  
 * @author Mustapha de BrainStormers
 * @since 13-03-2020
 */
public interface CabinetService {
	
	
	/**
	 * trouver les cabinets
	 * @return List<Cabinet> 
	 */
	Optional<List<Cabinet>> findAll();
	
	/**
	 * trouver un cabinet par son id
	 * @param id
	 * @return Optional<Cabinet> cabinet
	 * @throws ResourceNotFoundException
	 */
	Optional<Cabinet> findCabinetById(String id);
	
	/**
	 * ajouter ou modifier un Cabinet
	 * @param cabinet
	 */
	void saveOrUpdateCabinet(Cabinet cabinet);
	/**
     * supprimer un Cabinet par son Id
     * @param id
     */
    void deleteCabinetById(String id);
    
    /**
     * chercher les cabinet
     * @param query
     * @return List<Cabinet> cabinets
     */
    Optional<List<Cabinet>> search(String query);
	
}
