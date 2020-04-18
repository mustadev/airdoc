package com.brainstormers.airdoc.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.brainstormers.airdoc.models.Appointment;


/**
 * cet interface hérite  {@link MongoRepository MongoRepository.class}
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 17-03-2020
 * 
 */
@Repository
public interface AppointmentRepository extends MongoRepository<Appointment,String> {
	List<Appointment> findByIdDoctor(String idDoctor);
	List<Appointment> findByIdPatient(String idPatient);
	
}	

