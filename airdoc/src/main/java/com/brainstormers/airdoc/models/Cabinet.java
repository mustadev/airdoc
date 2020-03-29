package com.brainstormers.airdoc.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mongodb.lang.NonNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * le Model Cabinet 
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@ApiModel(description = "cabinet details")
@Document(collection = "cabinets")
public class Cabinet {
	
	/**
	 * ID de Cabinet
	 */
	@ApiModelProperty(notes = "Cabinet ID")
	@Id
    private String id;

	/**
	 * nom de cabinet
	 */
	@ApiModelProperty(notes = "nom de cabinet")
	@NonNull
	private String name;

	/**
	 * description de cabinet
	 */
	@ApiModelProperty(notes = "description de cabinet")
    private String description;

	/**
	 * ville de cabinet
	 */
	@ApiModelProperty(notes = "ville de cabinet")
	@NonNull
    private String city;

	/**
	 * les revues de cabinet
	 */
	@ApiModelProperty(notes = "les revues de cabinet")
    private List<Review> reviews = new ArrayList<>();

	/**
	 * propriétaire de cabinet
	 */
	@ApiModelProperty(notes = "propriétaire de cabinet")
	@NonNull
    private String ownerId; //TODO @NonNull not working properly

	/**
	 * Évaluation du Cabinet
	 */
	@ApiModelProperty(notes = "Évaluation du Cabinet")
    private float rating = 0.0f; //TODO set max 5.0 and min 0.0
    
    public List<Review> getReviews() {
		return reviews;
	}
	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
	public String getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(String ownerId) {
		this.ownerId = ownerId;
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

	public String getCity() {
		return this.city;
	}
	public void setCity(String city) {
		this.city= city;
	}
    
}
