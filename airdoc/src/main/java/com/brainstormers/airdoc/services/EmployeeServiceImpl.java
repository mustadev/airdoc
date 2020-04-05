package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.Employee;
import com.brainstormers.airdoc.repositories.EmployeeRepository;
import com.brainstormers.airdoc.services.EmployeeService;

/**
 * implementation de {@link EmployeeService EmployeeService.class}
 * @author Mustapha Ouarrain
 * @since version 0.0.1
 * 
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

  		
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public Optional<List<Employee>> findAll() {
		return Optional.of(employeeRepository.findAll());
	}


	@Override
	public Optional<Employee> findById(String id) {
		return employeeRepository.findById(id);
	}

	@Override
	public Optional<Employee> save(Employee employee) {
		return Optional.of(employeeRepository.save(employee));
	}

	@Override
	public Optional<Employee>  update(Employee employee) {
		return Optional.of(employeeRepository.save(employee));
	}

	@Override
	public void deleteById(String id) {
		employeeRepository.deleteById(id);
	}


	 public void deleteByEmail(String email) {
		    employeeRepository.deleteByEmail(email);
	 }


	@Override
	public Optional<Employee> findByEmail(String email) {
		return Optional.of(employeeRepository.findByEmail(email));
		
	}

	@Override
	public Optional<Employee> findByUsername(String username) {
		return Optional.of(employeeRepository.findByUsername(username));
	}

	@Override
	public boolean existsByUsername(String username) {
		return employeeRepository.existsByUsername(username);
	}

	@Override
	public void deleteAll() {
		employeeRepository.deleteAll();
	}

	@Override
	public boolean existsByEmail(String email) {
		return employeeRepository.existsByEmail(email);
	}
}
