package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import com.brainstormers.airdoc.models.Appointment;
import com.brainstormers.airdoc.repositories.AppointmentRepository;

public class AppointmentServiceImpl implements AppointmentService{
	
	private AppointmentRepository appRepository;

	@Override
	public Optional<List<Appointment>> findAll() {
		return Optional.of(this.appRepository.findAll());
	}


	@Override
	public Optional<Appointment> save(Appointment appointment) {
		
		return Optional.of(this.appRepository.save(appointment));
	}

	@Override
	public Optional<Appointment> update(Appointment appointment) {
		
		return Optional.of(this.appRepository.save(appointment)) ;
	}


	@Override
	public void delete(Appointment appointment) {
		this.appRepository.delete(appointment);
		
	}

	

}
