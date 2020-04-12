package com.brainstormers.airdoc.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@ApiModel(description = "Clinic details")
@Data @NoArgsConstructor @AllArgsConstructor
@Document
public class Clinic {
	
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
	private List<String> photos = new ArrayList<String>();
	
	public void addPhoto(String photoId) {
		photos.add(photoId);
		
	}
	
	
}
