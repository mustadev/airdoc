package com.brainstormers.airdoc.models;

import org.springframework.data.mongodb.core.mapping.Document;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;



/**
 * le Model Review 
 * c'est lutilisateur
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@ApiModel(description = "Détails de la revue")
@Document
//@Data @ToString @AllArgsConstructor @NoArgsConstructor
public class Review {
	
	/**
	 * le contenu de la revue
	 */
	@ApiModelProperty(notes = "le contenu de la revue")
	private String content;
	/**

	 * Id auteur de la revue
	 */
	@ApiModelProperty(notes = "auteur de la revue")
	private String autherId;
	
	/**
	 * Nom d'utilisateur  de l'auteur de la revue
	 */
	@ApiModelProperty(notes = "Nom d'utilisateur de l'auteur de la revue")
	private String autherUsername;
	/**
	 * nombre des likes
	 */
	@ApiModelProperty(notes = "nombre des likes")
	private int likes;
	
	/**
	 * nombre des dislikes
	 */
	@ApiModelProperty(notes = "nombre des dislikes")
	private int dislikes;
	
	/******** Getters and Setter and Constructors ********/
	
	public Review(String content, String autherId, String autherUsername, int likes, int dislikes) {
		super();
		this.content = content;
		this.autherId = autherId;
		this.autherUsername = autherUsername;
		this.likes = likes;
		this.dislikes = dislikes;
	}
	
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}

	public String getAutherId() {
		return autherId;
	}


	public void setAutherId(String autherId) {
		this.autherId = autherId;
	}


	public String getAutherUsername() {
		return autherUsername;
	}


	public void setAutherUsername(String autherUsername) {
		this.autherUsername = autherUsername;
	}
	
	
}
