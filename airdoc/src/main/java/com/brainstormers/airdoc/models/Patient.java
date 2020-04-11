package com.brainstormers.airdoc.models;


import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	private String firstname;
	/**
	 * Nom du Patient.
	 */
	@ApiModelProperty(notes = "nom du Patient")
	private String lastname;
	
	/**
	 * Nom d'utilisateur.
	 */
	@ApiModelProperty(notes = "Non D'utilisateur du Patient")
	private String username;
	
	/**
	 * Mot de pass d'utilisateur.
	 */
	@JsonIgnore
	@ApiModelProperty(notes = "Mot D'utilisateur du Patient")
	private String password;
	
	
	/**
	 * Age d'utilisateur
	 */
	@ApiModelProperty(notes = "age du Patient")
    private int age;
	/**
	 * Email d'utilisateur
	 */
	@ApiModelProperty(notes = "email du Patient.")
    private String email;
	
	/**
	 * Image de Patient
	 */
	@ApiModelProperty(notes = "Image du Patient.")
    private String avatar;
	
	/**
	 * les authorité de patient
	 */
	@ApiModelProperty(notes = "les authorité de patient")
	@DBRef
	@JsonIgnore
	private Set<Role> roles = new HashSet<>();
	
	
 
}
