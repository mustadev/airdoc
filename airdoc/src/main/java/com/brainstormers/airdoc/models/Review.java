package com.brainstormers.airdoc.models;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;



/**
 * le Model Review 
 * c'est lutilisateur
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@ApiModel(description = "Détails de la revue")
@Data @ToString @AllArgsConstructor @NoArgsConstructor
public class Review {
	
	/**
	 * le contenu de la revue
	 */
	@ApiModelProperty(notes = "le contenu de la revue")
	private String content;
	/**
	 * ID auteur de la revue
	 */
	@ApiModelProperty(notes = "ID auteur de la revue")
	private String autherId;
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
	
	
	
}
