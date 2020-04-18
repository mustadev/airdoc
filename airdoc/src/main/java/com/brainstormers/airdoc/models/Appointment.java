package com.brainstormers.airdoc.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


/**
 * Modele Appointment_ {@link Appointment_ Appointment_.class}
 * c'est une classe "Appointment_" qui constitue toutes les attributes nécessaire pour prendre un rendez-vous
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 18-03-2020
 * 
 */
@ApiModel(description = "Détails du rendez-vous")
@Document(collection = "appointments")
@Data @ToString @AllArgsConstructor @NoArgsConstructor
public class Appointment {
	
	/**
	 * ID du rendez-vous
	 */
	@ApiModelProperty(notes = "ID du rendez-vous")
	@Id
	private String id;
	/**
	 * IdDoctor: c'est ID du médecin 
	 */
	@ApiModelProperty(notes = "ID du médecin")
	private String idDoctor;
	/**
	 * idPatient: c'est ID du patient 
	 */
	@ApiModelProperty(notes = "ID du patient")
	private String idPatient;
	/**
	 * apptDate: c'est la date du rendez-vous
	 */
	@ApiModelProperty(notes = "Date du rendez-vous")
	//@NotBlank @Size(max = 30)
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ" )
	private Date apptDate;
	/**
	 * bookingDate: c'est la date de la réservation du rendez-vous
	 */
	@ApiModelProperty(notes ="Date de la réservation du rendez-vous")
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ" )
	//@NotBlank @Size(max = 30)
	private Date bookingDate;
	/**
	 * status: c'est l'état du rendez-vous
	 */
	@ApiModelProperty(notes ="Etat du rendez-vous")
	//@NotBlank @Size(max = 30)
	private String status;
	/**
	 * description: c'est la description du rendez-vous
	 */
	@ApiModelProperty(notes ="Etat du rendez-vous")
	private String description;
		
	
}
