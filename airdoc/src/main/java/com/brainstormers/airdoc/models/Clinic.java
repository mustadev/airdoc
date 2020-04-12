package com.brainstormers.airdoc.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * La Clinique
 * @author Mustapha De BrainStormers
 * @since version 0.0.2
 * 
 */
@ApiModel(description = "Clinic details")
//@Document("clinics")
public class Clinic {
	
//	/**
//	 * ID de Clinique
//	 */
//	@ApiModelProperty(notes = "Clinique ID")
//	@Id
//    private String id;
	
//	/**
//	 * ID de Clinique
//	 */
//	@ApiModelProperty(notes = "Doctor ID")
//    private String doctorId;
	/**
	 * Nom de clinique
	 */
	@ApiModelProperty(notes = "Nom de clinique")
	
	private String name;
	/**
	 * Description de clinique
	 */
	@ApiModelProperty(notes = "Description de clinique")
    private String description;
	/**
	 * Prix de consultation de clinique
	 */
	@ApiModelProperty(notes = "Prix de consultation de clinique")
	private float consultPrice;
	/**
	 * Prix minimum
	 */
	@ApiModelProperty(notes = "Prix minimum")
	private int minPrice;
	/**
	 * Prix maximum
	 */
	@ApiModelProperty(notes = "Prix maximum")
	private int maxPrice;
	/**
	 * Services de clinique
	 */
	@ApiModelProperty(notes = "Services de clinique")
	private List<String> services;
	/**
	 * Specialities de clinique
	 */
	@ApiModelProperty(notes = "Specialities de clinique")
	private List<String> specialities;
	/**
	 * Ville de clinique
	 */
	@ApiModelProperty(notes = "Ville de clinique")
	private String city;
	/**
	 * Pays de clinique
	 */
	@ApiModelProperty(notes = "Pays de clinique")
	private String country;
	
	/**
	 * address de clinique
	 */
	@ApiModelProperty(notes = "Address de clinique")
	private String address;
	
	/**
	 * Id des images de clinique
	 */
	
	@ApiModelProperty(notes = "Id des images de clinique")
	@DBRef
	@JsonIgnore
	private List<Photo> photos = new ArrayList<Photo>();
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getConsultPrice() {
		return consultPrice;
	}

	public void setConsultPrice(float consultPrice) {
		this.consultPrice = consultPrice;
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

	public List<String> getServices() {
		return services;
	}

	public void setServices(List<String> services) {
		this.services = services;
	}

	public List<String> getSpecialities() {
		return specialities;
	}

	public void setSpecialities(List<String> specialities) {
		this.specialities = specialities;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(List<Photo> photos) {
		this.photos = photos;
	}
	
	
	
	
}
