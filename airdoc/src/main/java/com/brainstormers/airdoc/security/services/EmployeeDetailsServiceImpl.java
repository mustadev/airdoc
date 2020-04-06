package com.brainstormers.airdoc.security.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.brainstormers.airdoc.services.EmployeeService;

@Service
public class EmployeeDetailsServiceImpl implements UserDetailsService {
	
	public static final String PATIENT =  "PATIENT";
	public static final String DOCTOR =  "DOCTOR";
	public static final String EMPLOYEE =  "EMPLOYEE";
	
	@Autowired
	EmployeeService employeeService;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return UserDetailsImpl.build(employeeService.findByEmail(username)
				.orElseThrow(() -> new UsernameNotFoundException("Employee Not Found with Email: " + username)));

	}

}
