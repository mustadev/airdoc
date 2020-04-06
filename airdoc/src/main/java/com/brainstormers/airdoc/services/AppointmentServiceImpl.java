package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import com.brainstormers.airdoc.models.Appointment;
import com.brainstormers.airdoc.repositories.AppointmentRepository;

public class AppointmentServiceImpl implements AppointmentService{
	
	private AppointmentRepository AppRepository;

	@Override
	public Optional<List<Appointment>> findAll() {
		return Optional.of(AppRepository.findAll());
	}

	@Override
	public Optional<Appointment> findByUserName(String userName) {
		return Optional.of(AppRepository.findByUsername(userName));
	}

	@Override
	public Optional<Appointment> save(Appointment appointment) {
		
		return Optional.of(AppRepository.save(appointment));
	}

	@Override
	public Optional<Appointment> update(Appointment appointment) {
		
		return Optional.of(AppRepository.save(appointment)) ;
	}

	@Override
	public Optional<Appointment> searchbyEmail(String email) {
		return Optional.of(AppRepository.findByEmail(email));
	}

	@Override
	public void delete(Appointment appointment) {
		AppRepository.delete(appointment);
		
	}

	@Override
	public boolean existsByEmail(String email) {
		    
		return AppRepository.existsByEmail(email);
	}

	@Override
	public boolean existsByUsername(String username) {
		
		return AppRepository.existsByUsername(username);
	}
	

}
