package com.brainstormers.airdoc.models;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 *  classe "Admin" 
 * @author Mustapha Ouarrain
 * @since version 0.0.2
 * 
 */
@ApiModel(description = "Détails du Admin")
@Document(collection = "admins")
public class Admin {
	
	/**
	 * ID d'Admin
	 */
	@ApiModelProperty(notes = "ID du Admin")
	@Id
	private String id;
	/**
	 * Prénom d'Admin.
	 */
	@ApiModelProperty(notes = "prénom du Admin")
	private String firstname;
	/**
	 * Nom du Admin.
	 */
	@ApiModelProperty(notes = "nom du Admin")
	private String lastname;
	
	/**
	 * Nom d'Admin.
	 */
	@ApiModelProperty(notes = "Non D'utilisateur du Admin")
	private String username;
	
	/**
	 * Mot de Pass d'Admin.
	 */
	@ApiModelProperty(notes = "Mot de Pass du Admin")
	private String password;
	
	/**
	 * Email d'Admin
	 */
	@ApiModelProperty(notes = "email du Admin.")
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
	