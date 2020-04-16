package com.brainstormers.airdoc.services;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.brainstormers.airdoc.models.Contact;

/**
 * Service de getion des images des utilisateurs
 * @author Mustapha Ouarrain
 *
 */
public interface ContactService {
	
	
	/**
	 * Ajouter un Image d'Utilisateur
	 * @param photo
	 * @return photoID
	 * @throws IOException
	 */
	Optional<Contact> save(Contact contact);
	

	/**
	 * trouver un Image by Id
	 * @param id
	 * @return photo
	 */
	Optional<List<Contact>> findAll();


	//Optional<List<Contact>> findByOwnerId(String photoId);



	void deleteAll();
}