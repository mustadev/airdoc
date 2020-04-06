package com.brainstormers.airdoc.models;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 *  classe "Employé" 
 * @author Mustapha Ouarrain
 * @since version 0.0.2
 * 
 */
@ApiModel(description = "Détails du Employé")
@Document(collection = "employees")
public class Employee {
	
	/**
	 * ID d'Employé
	 */
	@ApiModelProperty(notes = "ID du Employé")
	@Id
	private String id;
	/**
	 * Prénom d'Employé.
	 */
	@ApiModelProperty(notes = "prénom du Employé")
	private String firstname;
	/**
	 * Nom du Employé.
	 */
	@ApiModelProperty(notes = "nom du Employé")
	private String lastname;
	
	/**
	 * Nom d'Employé.
	 */
	@ApiModelProperty(notes = "Non D'utilisateur du Employé")
	private String username;
	
	/**
	 * Mot de Pass d'Employé.
	 */
	@ApiModelProperty(notes = "Mot de Pass du Employé")
	private String password;
	
	/**
	 * Email d'Employé
	 */
	@ApiModelProperty(notes = "email du Employé.")
    private String email;
	
	/**
	 * les authorité de employé
	 */
	@ApiModelProperty(notes = "les authorité de employé")
	@DBRef
	private Set<Role> roles = new HashSet<>();
	
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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
}
	