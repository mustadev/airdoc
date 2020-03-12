package com.brainstormers.airdoc.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "cabinet details")
@Document(collection = "cabinets")
public class Cabinet {
	
	@ApiModelProperty(notes = "Cabinet ID")
	@Id
    private String id;
	@ApiModelProperty(notes = "Cabinet Name")
	private String name;
	@ApiModelProperty(notes = "Cabinet")
    private String description;
	@ApiModelProperty(notes = "Reviews")
    private List<Review> reviews;
	@ApiModelProperty(notes = "User Owner")
    private User createdBy;
	@ApiModelProperty(notes = "Cabinet Rating")
    private float rating;
    
    public List<Review> getReviews() {
		return reviews;
	}
	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
	public User getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(User createdBy) {
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
