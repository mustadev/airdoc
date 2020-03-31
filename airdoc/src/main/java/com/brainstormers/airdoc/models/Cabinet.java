package com.brainstormers.airdoc.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * le Model Cabinet 
 * c'est lutilisateur
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
	private String name;

	/**
	 * description de cabinet
	 */
	@ApiModelProperty(notes = "description de cabinet")
    private String description;

	/**
	 * les revues de cabinet
	 */
	@ApiModelProperty(notes = "les revues de cabinet")
    private List<Review> reviews;

	/**
	 * propriétaire de cabinet
	 */
	@ApiModelProperty(notes = "propriétaire de cabinet")
    private Patient createdBy;

	/**
	 * Évaluation du Cabinet
	 */
	@ApiModelProperty(notes = "Évaluation du Cabinet")
    private float rating;
    
    public List<Review> getReviews() {
		return reviews;
	}
	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
	public Patient getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(Patient createdBy) {
		this.createdBy = createdBy;
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
    
}
