package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import com.brainstormers.airdoc.models.Appointment;


public interface AppointmentService {
	
	Optional<List<Appointment>> findAll();
	Optional<Appointment>findByUserName(String userName);
	Optional<Appointment> save(Appointment appointment);
	Optional<Appointment> update(Appointment appointment);
	Optional<Appointment> searchbyEmail(String Email);
	void delete(Appointment appointment);
	
	boolean existsByEmail(String email);
	boolean existsByUsername(String username);
	
	
	
	

}
