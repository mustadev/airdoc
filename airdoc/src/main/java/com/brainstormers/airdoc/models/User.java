package com.brainstormers.airdoc.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;


/**
 * le Model User {@link User User.class}
 * c'est lutilisateur
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@ApiModel(description = "Détails de l'utilisateur")
@Document(collection = "users")
public class User {
	
	/**
	 * ID de Utilisateur
	 */
	@ApiModelProperty(notes = "ID de Utilisateur")
	@Id
	private String id;
	/**
	 * le prenom de utilisateur.
	 */
	@ApiModelProperty(notes = "prenom de utilisateur.")
	private String firstName;
	/**
	 * le nom de utilisateur.
	 */
	@ApiModelProperty(notes = "nom de utilisateur")
	private String lastName;
	
	
	public User(String firstName, String lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
}
