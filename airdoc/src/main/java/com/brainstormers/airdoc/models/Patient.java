package com.brainstormers.airdoc.models;


import org.springframework.data.annotation.Id;
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
	 * Nom d'utilisateur.
	 */
	@ApiModelProperty(notes = "nom du Patient")
	private String lastName;
	/**
	 * Age d'utilisateur
	 */
	@ApiModelProperty(notes = "age du Patient")
    private int age;
	/**
	 * Email d'utilisateur
	 */
	@ApiModelProperty(notes = "mail du Patient.")
    private String mail;
	
	
	public Patient(String firstName, String lastName,int age,String mail) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.mail = mail;
		
	}
	public Patient() {}
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