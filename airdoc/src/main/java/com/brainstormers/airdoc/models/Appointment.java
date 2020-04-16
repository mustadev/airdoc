package com.brainstormers.airdoc.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Modele Appointment {@link Patient Patient.class}
 * c'est une classe "Appointment"
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 18-03-2020
 * 
 */
@Document(collection = "appointments")
public class Appointment {
	
	@Id
	private Long id;
	@DBRef
    private Collection<Doctor> doctors = new ArrayList<>();
    private Date appDate;
	//private Time startTime;
	private String description;
	
	
	/*********** Getters And Setters and Constructors ********/
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Collection<Doctor> getDoctors() {
		return doctors;
	}
	public void setDoctors(Collection<Doctor> doctors) {
		this.doctors = doctors;
	}
	public Date getAppDate() {
		return appDate;
	}
	public void setAppDate(Date appDate) {
		this.appDate = appDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
	

}
