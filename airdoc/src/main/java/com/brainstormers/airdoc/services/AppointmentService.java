package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import com.brainstormers.airdoc.models.Appointment;


public interface AppointmentService {
	
	Optional<List<Appointment>> findAll();
	Optional<Appointment> save(Appointment appointment);
	Optional<Appointment> update(Appointment appointment);
	void delete(Appointment appointment);

}
