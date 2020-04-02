package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.exceptions.AuthException;
import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.repositories.DoctorRepository;
import com.brainstormers.airdoc.security.JwtTokenProvider;

/**
 * implementation de {@link DoctorService DoctorService.class}
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@Service
public class DoctorServiceImpl implements DoctorService {

	 @Autowired
  	 private PasswordEncoder passwordEncoder;

  	 @Autowired
  	private JwtTokenProvider jwtTokenProvider;

  		
	@Autowired
	private DoctorRepository doctorRepository;

	@Autowired
	 private AuthenticationManager authenticationManager;

  	public String login(String email, String password) {
    	try {
      	authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
      	return jwtTokenProvider.createToken(email, doctorRepository.findByEmail(email).getRoles());
    	} catch (AuthenticationException e) {
      	throw new AuthException("Invalid email/password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
    	}
    }

  public String signup(Doctor doctor) {
    if (!doctorRepository.existsByEmail(doctor.getEmail())) {
      doctor.setPassword(passwordEncoder.encode(doctor.getPassword()));
      doctorRepository.save(doctor);
      return jwtTokenProvider.createToken(doctor.getEmail(), doctor.getRoles());
    } else {
      throw new AuthException("Email is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

	
	@Override
	public Optional<List<Doctor>> findAll() {
		return Optional.of(doctorRepository.findAll());
	}

	@Override
	public Optional<List<Doctor>> findAll(String query, String city, Sort sort) {
		return Optional.of(doctorRepository.findAll(query, city,  sort));
	}

	@Override
	public Optional<Doctor> findDoctorById(String id) {
		return doctorRepository.findById(id);
	}

	@Override
	public Optional<Doctor> saveDoctor(Doctor doctor) {
		return Optional.of(doctorRepository.save(doctor));
	}

	@Override
	public Optional<Doctor>  updateDoctor(Doctor doctor) {
		return Optional.of(doctorRepository.save(doctor));
	}

	@Override
	public void deleteDoctorById(String id) {
		doctorRepository.deleteById(id);
	}

	@Override
	public Optional<List<Doctor>> search(String query) {
		List<Doctor> results = doctorRepository.searchNameByRegex(query);
		return Optional.of(results);
	/*  Query jquery = new Query();
		jquery.fields().exclude("description");
		jquery.addCriteria(Criteria.where("name").regex(query));
		List<Doctor> results = doctorRepository.fin;
		return Optional.of(results); 
	*/
	}
	
}
