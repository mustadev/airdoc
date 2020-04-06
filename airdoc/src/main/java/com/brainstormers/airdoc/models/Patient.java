package com.brainstormers.airdoc.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


/**
 * Modele Patient {@link Patient Patient.class}
 * c'est une classe "Patient" qui constitue toutes les attributes nécessaire pour un Patient
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 18-03-2020
 * 
 */
@ApiModel(description = "Détails du Patient")
@Document(collection = "patients")
@Data @ToString @AllArgsConstructor @NoArgsConstructor
public class Patient {
	
	/**
	 * ID d'Utilisateur
	 */
	@ApiModelProperty(notes = "ID du Patient")
	@Id
	private String id;
	/**
	 * Prénom d'utilisateur.
	 */
	@ApiModelProperty(notes = "prénom du Patient")
	private String firstName;
	/**
	 * Nom du Patient.
	 */
	@ApiModelProperty(notes = "nom du Patient")
	private String lastName;
	
	/**
	 * Nom d'utilisateur.
	 */
	@ApiModelProperty(notes = "Non D'utilisateur du Patient")
	private String username;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	/**
	 * Age d'utilisateur
	 */
	@ApiModelProperty(notes = "age du Patient")
    private int age;
	/**
	 * Email d'utilisateur
	 */
	@ApiModelProperty(notes = "mail du Patient.")
    private String email;
	
		
	
	
}
