package com.brainstormers.airdoc.models;


import java.util.HashSet;
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

/**
 * Modele Patient {@link Patient Patient.class}
 * c'est une classe "Patient" qui constitue toutes les attributes nécessaire pour un Patient
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 18-03-2020
 * 
 */
@ApiModel(description = "Détails du Patient")
@Document(collection = "patients")
//@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
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
	@NotBlank
	@Size(max = 20)
	private String firstname;
	/**
	 * Nom du Patient.
	 */
	@ApiModelProperty(notes = "nom du Patient")
	@NotBlank
	@Size(max = 20)
	private String lastname;
	
	/**
	 * Nom d'utilisateur.
	 */
	@ApiModelProperty(notes = "Non D'utilisateur du Patient")
		@NotBlank
	@Size(max = 50)
	private String username;
	
	/**
	 * Mot de pass d'utilisateur.
	 */
	@ApiModelProperty(notes = "Mot D'utilisateur du Patient")
	@JsonIgnore
	@NotBlank
	@Size(max = 30)
	private String password;
	
	
	/**
	 * Age d'utilisateur
	 */
	@ApiModelProperty(notes = "age du Patient")
	@NotBlank
	@Size(max = 2)
    	private int age;
	/**
	 * Email d'utilisateur
	 */

	@ApiModelProperty(notes = "mail du Patient.")
 	@NotBlank
	@Size(max = 70)
	@Email
   private String email;
	
	/**
	 * Image de Patient
	 */
	@ApiModelProperty(notes = "Image du Patient.")
	@DBRef
	@JsonIgnore
    private Photo avatar;
	
	/**
	 * les authorité de patient
	 */
	@ApiModelProperty(notes = "les authorité de patient")
	@DBRef
	@JsonIgnore
	private Set<Role> roles = new HashSet<>();


	/*********** Getter and Setters and Constructors **************/
	
	public Patient(	
			@NotBlank @Size(max = 50) String firstname,
			@NotBlank @Size(max = 50) String lastname,
			@NotBlank @Size(max = 2) int age,
			@NotBlank @Size(max = 70) @Email String email) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
		this.email = email;
		
	}
	
	public Patient(String id, @NotBlank @Size(max = 20) String firstname, @NotBlank @Size(max = 20) String lastname,
			@NotBlank @Size(max = 50) String username, @NotBlank @Size(max = 30) String password,
			@NotBlank @Size(max = 2) int age, @NotBlank @Size(max = 70) @Email String email, Set<Role> roles) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.password = password;
		this.age = age;
		this.email = email;
		this.roles = roles;
	}
	

	
	public Patient() {}
	

	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}




	public String getFirstname() {
		return firstname;
	}




	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}




	public String getLastname() {
		return lastname;
	}




	public void setLastname(String lastname) {
		this.lastname = lastname;
	}




	public String getUsername() {
		return username;
	}




	public void setUsername(String username) {
		this.username = username;
	}




	public String getPassword() {
		return password;
	}




	public void setPassword(String password) {
		this.password = password;
	}




	public int getAge() {
		return age;
	}




	public void setAge(int age) {
		this.age = age;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public Set<Role> getRoles() {
		return roles;
	}




	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Photo getAvatar() {
		return avatar;
	}

	public void setAvatar(Photo avatar) {
		this.avatar = avatar;
	}
	
	
 
}
