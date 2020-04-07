package com.brainstormers.airdoc.models;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * le Model Doctor 
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@ApiModel(description = "doctor details")
@Document(collection = "doctors")
@Data @ToString @AllArgsConstructor @NoArgsConstructor
public class Doctor{
	

	
	public Doctor(
			@NotBlank @Size(max = 50) String firstname,
			@NotBlank @Size(max = 50) String lastname, 
			@NotBlank @Size(max = 50) @Email String email,
			@NotBlank @Size(max = 120) String password, 
			@NotBlank @Size(max = 20) String username) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.username = username;
	}

	/**
	 * ID de Doctor
	 */
	@ApiModelProperty(notes = "Doctor ID")
	@Id
    private String id;
	
	/**
	 * Prénom de doctor
	 */
	@ApiModelProperty(notes = "prénom de doctor")
	@NotBlank
	@Size(max = 50)
	private String firstname;

	/**
	 * Nom de doctor
	 */
	@NotBlank
	@Size(max = 50)
	@ApiModelProperty(notes = "Nom de doctor")
    private String lastname;
	

	/**
	 * Email de doctor
	 */
	@ApiModelProperty(notes = "Email de doctor")
	@NotBlank
	@Size(max = 50)
	@Email
	private String email;	

	/**
	 * Mot de Pass de doctor
	 */
	@ApiModelProperty(notes = "Mot De Pass de doctor")
	@JsonIgnore
	@NotBlank
	@Size(max = 120)
	private String password;
	
	/**
	 * Non d'utilisateur de doctor
	 */
	@ApiModelProperty(notes = "Nom d'utilisateur de doctor")
	@NotBlank
	@Size(max = 20)
	private String username;

	/**
	 * description de doctor
	 */
	@ApiModelProperty(notes = "description de doctor")
    private String description;

	/**
	 * ville de doctor
	 */
	@ApiModelProperty(notes = "ville de doctor")
	@NotBlank
    private String city;

	/**
	 * les revues de doctor
	 */
	@ApiModelProperty(notes = "les revues de doctor")
    private List<Review> reviews = new ArrayList<>();

	/**
	 * les authorité de doctor
	 */
	@ApiModelProperty(notes = "les authorité de doctor")
	@DBRef
	private Set<Role> roles = new HashSet<>();
	

/**
	 * les services de doctor
	 */
	@ApiModelProperty(notes = "les services de doctor")
    private List<String> services;


	/**
	 * minPrice de doctor
	 */
	@ApiModelProperty(notes = "minPrice de doctor")
    private int minPrice = 0;

	/**
	 * maxPrice de doctor
	 */
	@ApiModelProperty(notes = "maxPrice de doctor")
    private int maxPrice = 0;
	
	/**
	 * pay de doctor
	 */
	@ApiModelProperty(notes = "pay de doctor")
    private String country = "";

	/**
	 * specialité de doctor
	 */
	@ApiModelProperty(notes = "specialité de doctor")
    private String speciality = "";


	

	/**
	 * Évaluation du Doctor
	 */
	@ApiModelProperty(notes = "Évaluation du Doctor")
    private float rating = 0.0f; //TODO set max 5.0 and min 0.0
	
	/**
	 * Nombre de évaluation du Doctor
	 */
	@ApiModelProperty(notes = "Évaluation du Doctor")
    private int averageRating = 0; //TODO set max 5.0 and min 0.0
	
    
}
