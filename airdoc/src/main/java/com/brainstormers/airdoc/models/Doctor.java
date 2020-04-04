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

/**
 * le Model Doctor 
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@ApiModel(description = "doctor details")
@Document(collection = "doctors")
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

	public Doctor() {
		
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
	 * deuxième nom de doctor
	 */
	@Size(max = 50)
	@ApiModelProperty(notes = "deuxième nom de doctor")
    private String middlename = "";

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
	
	
    
    
	public List<String> getServices() {
		return services;
	}
	public void setServices(List<String> services) {
		this.services = services;
	}
	public int getMinPrice() {
		return minPrice;
	}
	public void setMinPrice(int minPrice) {
		this.minPrice = minPrice;
	}
	public int getMaxPrice() {
		return maxPrice;
	}
	public void setMaxPrice(int maxPrice) {
		this.maxPrice = maxPrice;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	public int getAverageRating() {
		return averageRating;
	}
	public void setAverageRating(int averageRating) {
		this.averageRating = averageRating;
	}
	public List<Review> getReviews() {
		return reviews;
	}
	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
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
		return firstname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}	
	
	public String getMiddlename() {
		return middlename;
	}

	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Set<Role> getRoles() {
		return roles;
	}
	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getCity() {
		return this.city;
	}
	public void setCity(String city) {
		this.city= city;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	 public String getEmail() {
    		return email;
	  }

	 @Override
		public String toString() {
			return "Doctor [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
					+ ", password=" + password + ", username=" + username + ", description=" + description + ", city="
					+ city + ", reviews=" + reviews + ", roles=" + roles + ", services=" + services + ", minPrice="
					+ minPrice + ", maxPrice=" + maxPrice + ", country=" + country + ", speciality=" + speciality
					+ ", rating=" + rating + ", averageRating=" + averageRating + "]";
		}


    
}
