package com.brainstormers.airdoc.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;


/**
 * Modele User {@link User User.class}
 * c'est une classe "user" qui constitue toutes les attributes nécessaire pour un utilisateur
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 18-03-2020
 * 
 */
@ApiModel(description = "Détails de l'utilisateur")
@Document(collection = "users")
public class User {
	
	/**
	 * ID d'Utilisateur
	 */
	@ApiModelProperty(notes = "ID d'Utilisateur")
	@Id
	private String id;
	/**
	 * Prénom d'utilisateur.
	 */
	@ApiModelProperty(notes = "prénom d'Utilisateur.")
	private String firstName;
	/**
	 * Nom d'utilisateur.
	 */
	@ApiModelProperty(notes = "nom d'Utilisateur")
	private String lastName;
	/**
	 * Age d'utilisateur
	 */
	@ApiModelProperty(notes = "aged'Utilisateur.")
    private int age;
	/**
	 * Email d'utilisateur
	 */
	@ApiModelProperty(notes = "mail d'Utilisateur.")
    private String mail;
	
	
	public User(String firstName, String lastName,int age,String mail) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.mail = mail;
		
	}
	public User() {}
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
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
    
 
}
