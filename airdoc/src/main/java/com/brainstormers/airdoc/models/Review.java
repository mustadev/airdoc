package com.brainstormers.airdoc.models;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotEmpty;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;



/**
 * le Model Review 
 * c'est lutilisateur
 * @author Mustapha De BrainStormers
 * @since version 0.0.1
 * 
 */
@ApiModel(description = "Détails de la revue")
@Document(collection="reviews")
public class Review {
	
	/**
	 * ID du revue
	 */
	@Id
	private String id;
	
	/**
	 * le contenu de la revue
	 */
	@ApiModelProperty(notes = "le contenu de la revue")
	@NotEmpty
	private String content;
	/**

	 * Id auteur de la revue
	 */
	@ApiModelProperty(notes = "auteur de la revue")
	@NotEmpty
	private String autherId;
	
	/**
	 * nombre des likes
	 */
	@ApiModelProperty(notes = "nombre des likes")
	private Set<Like> likes = new HashSet<Like>();
	
	
	/******** Getters and Setter and Constructors ********/
	
	public Review( @NotEmpty String content, @NotEmpty String autherId, Set<Like> likes) {
		this.content = content;
		this.autherId = autherId;
		this.likes = likes;
	}

	
	public String getId() {
		return id;
	}
	
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	

	public Set<Like> getLikes() {
		return likes;
	}

	public void setLikes(Set<Like> likes) {
		this.likes = likes;
	}

	public String getAutherId() {
		return autherId;
	}


	public void setAutherId(String autherId) {
		this.autherId = autherId;
	}
	
}
