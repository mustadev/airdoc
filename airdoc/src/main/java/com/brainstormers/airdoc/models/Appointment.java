package com.brainstormers.airdoc.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.ToString;

/**
 * Modele Appointment {@link Patient Patient.class}
 * c'est une classe "Appointment"
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 18-03-2020
 * 
 */
@Document(collection = "appointments")
@AllArgsConstructor
@NoArgsConstructor
@Data  @ToString
public class Appointment {
	
	@Id
	private Long id;
	@DBRef
    private Collection<Doctor> doctors = new ArrayList<>();
    private Date appDate;
	//private Time startTime;
	private String description;
	
	

}
