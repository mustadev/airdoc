package com.brainstormers.airdoc.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.brainstormers.airdoc.models.Appointment;
import com.brainstormers.airdoc.models.Doctor;

public interface AppointmentRepository extends MongoRepository<Appointment, Long> {

}
