package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.repositories.DoctorRepository;

/**
 * implementation de {@link DoctorService DoctorService.class}
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@Service
public class DoctorServiceImpl implements DoctorService {
	
	@Autowired
	private DoctorRepository doctorRepo;

	
	@Override
	public Optional<List<Doctor>> findAll() {
		return Optional.of(doctorRepo.findAll());
	}

	@Override
	public Optional<List<Doctor>> findAll(String query, String city, Sort sort) {
		return Optional.of(doctorRepo.findAll(query, city,  sort));
	}

	@Override
	public Optional<Doctor> findDoctorById(String id) {
		return doctorRepo.findById(id);
	}

	@Override
	public Optional<Doctor> saveDoctor(Doctor doctor) {
		return Optional.of(doctorRepo.save(doctor));
	}

	@Override
	public Optional<Doctor>  updateDoctor(Doctor doctor) {
		return Optional.of(doctorRepo.save(doctor));
	}

	@Override
	public void deleteDoctorById(String id) {
		doctorRepo.deleteById(id);
	}

	@Override
	public Optional<List<Doctor>> search(String query) {
		List<Doctor> results = doctorRepo.searchNameByRegex(query);
		return Optional.of(results);
	/*  Query jquery = new Query();
		jquery.fields().exclude("description");
		jquery.addCriteria(Criteria.where("name").regex(query));
		List<Doctor> results = doctorRepo.fin;
		return Optional.of(results); 
	*/
	}
}
