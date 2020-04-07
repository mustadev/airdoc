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
@Document
@Data @ToString @AllArgsConstructor @NoArgsConstructor
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
	
}
