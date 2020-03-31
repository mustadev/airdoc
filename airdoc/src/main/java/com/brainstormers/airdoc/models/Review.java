package com.brainstormers.airdoc.models;
import org.springframework.data.annotation.Id;
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
public class Review {
	
	/**
	 * ID de Revue
	 */
	@ApiModelProperty(notes = "Review ID")
	@Id
	private String id;
	/**
	 * le contenu de la revue
	 */
	@ApiModelProperty(notes = "le contenu de la revue")
	private String content;
	/**
	 * auteur de la revue
	 */
	@ApiModelProperty(notes = "auteur de la revue")
	private Patient auther;
	/**
	 * nombre des likes
	 */
	@ApiModelProperty(notes = "nombre des likes")
	private int likes;
	
	
	public Review(String content, Patient auther, int likes) {
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
	public Patient getAuther() {
		return auther;
	}
	public void setAuther(Patient auther) {
		this.auther = auther;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	
}
