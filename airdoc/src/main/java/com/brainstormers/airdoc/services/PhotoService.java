package com.brainstormers.airdoc.services;


import java.io.IOException;
import java.util.Optional;

import com.brainstormers.airdoc.models.Photo;

/**
 * Service de getion des images des utilisateurs
 * @author Mustapha Ouarrain
 *
 */
public interface PhotoService {
	
//	/**
//	 * Ajouter un Imagede Patient
//	 * @param title
//	 * @param photo
//	 * @return photoID
//	 * @throws IOException
//	 */
//	String saveDoctorPhoto(String title, MultipartFile photo) throws IOException;
	
	/**
	 * Ajouter un Image d'Utilisateur
	 * @param photo
	 * @return photoID
	 * @throws IOException
	 */
	Optional<String> savePhoto(Photo photo);
	
//	/**
//	 * Ajouter un Image d'Admin
//	 * @param title
//	 * @param photo
//	 * @return photoID
//	 * @throws IOException
//	 */
//	String saveAdminPhoto(String title, MultipartFile photo) throws IOException;
//	
	/**
	 * trouver un Image by Id
	 * @param id
	 * @return photo
	 */
	Optional<Photo> getPhoto(String id);
}
