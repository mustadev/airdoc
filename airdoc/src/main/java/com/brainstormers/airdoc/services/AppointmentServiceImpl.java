package com.brainstormers.airdoc.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.Patient;
import com.brainstormers.airdoc.repositories.AppointmentRepository;
import com.brainstormers.airdoc.repositories.PatientRepository;
import com.brainstormers.airdoc.models.Appointment;

import java.util.List;
import java.util.Optional;

/**
 * cette classe implemente {@link PatientService}
 * @author Ayoub BenHaimoud <ayoubbenhaimoud@gmail.com>
 * @since 17-3-2020
 */
@Service
public class AppointmentServiceImpl implements AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Override
    public Optional<List<Appointment>> findAll() {
        return Optional.of(appointmentRepository.findAll());
    }

    @Override
    public Optional<Appointment> findAppointmentById(String id) {
        return appointmentRepository.findById(id);
    }

    @Override
    public Optional<Appointment> insertAppointment(Appointment appointment) {
        return Optional.of(appointmentRepository.save(appointment));
    }

    @Override
    public Optional<Appointment> updateAppointment( Appointment appointment) {
        return Optional.of(appointmentRepository.save(appointment));
    }

    @Override
    public void deleteAppointmentById(String id) {
    	appointmentRepository.deleteById(id);
    }

	@Override
	public Optional<List<Appointment>> findAppotByIdDoctor(String idDoctor) {
		return Optional.of(appointmentRepository.findByIdDoctor(idDoctor));
	}
	
	@Override
	public Optional<List<Appointment>> findAppotByIdPatient(String idPatient) {
		return Optional.of(appointmentRepository.findByIdPatient(idPatient));
	}
}