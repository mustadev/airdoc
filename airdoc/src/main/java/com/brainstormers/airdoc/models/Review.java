package com.brainstormers.airdoc.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "Détails de la revue")
@Document
public class Review {
	
	@ApiModelProperty(notes = "Review ID")
	@Id
	private String id;
	@ApiModelProperty(notes = "le contenu de la revue")
	private String content;
	@ApiModelProperty(notes = "auteur de la revue")
	private User auther;
	@ApiModelProperty(notes = "nombre des likes")
	private int likes;
	
	
	public Review(String content, User auther, int likes) {
		this.content = content;
		this.auther = auther;
		this.likes = likes;
	}
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public User getAuther() {
		return auther;
	}
	public void setAuther(User auther) {
		this.auther = auther;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	
}
