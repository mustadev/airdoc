package com.brainstormers.airdoc.services;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.brainstormers.airdoc.models.Photo;

/**
 * Service de getion des images des utilisateurs
 * @author Mustapha Ouarrain
 *
 */
public interface PhotoService {
	
	
	/**
	 * Ajouter un Image d'Utilisateur
	 * @param photo
	 * @return photoID
	 * @throws IOException
	 */
	Optional<Photo> save(Photo photo);
	

	/**
	 * trouver un Image by Id
	 * @param id
	 * @return photo
	 */
	Optional<Photo> findById(String id);


	//Optional<List<Photo>> findByOwnerId(String photoId);


	void deleteById(String id);


	void deleteAll();
}
