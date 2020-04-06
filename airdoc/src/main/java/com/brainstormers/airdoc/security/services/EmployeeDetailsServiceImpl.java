package com.brainstormers.airdoc.security.services;

import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import com.brainstormers.airdoc.security.jwt.AuthTokenFilter;
import com.brainstormers.airdoc.services.DoctorService;
import com.brainstormers.airdoc.services.EmployeeService;
import com.brainstormers.airdoc.services.PatientService;

@Service
public class EmployeeDetailsServiceImpl implements UserDetailsService {
	
	private static String USER_TYPE = "User-Type";
	public static final String PATIENT =  "PATIENT";
	public static final String DOCTOR =  "DOCTOR";
	public static final String EMPLOYEE =  "EMPLOYEE";
	
	@Autowired
	DoctorService doctorService;
	
	@Autowired
	PatientService patientService;
	
	@Autowired
	EmployeeService employeeService;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		String userType = Objects.toString(RequestContextHolder.getRequestAttributes().getAttribute(USER_TYPE, RequestAttributes.SCOPE_SESSION), "");
		System.out.println("Employee ::::::::::::::::: User-Type :" + userType);
	    
	    UserDetails user = null;
	    
        switch(userType) {
            case PATIENT:
                user = UserDetailsImpl.build(patientService.findByUsername(username)
        				.orElseThrow(() -> new UsernameNotFoundException("Employee Not Found with username: " + username)));
                break;
            case DOCTOR:
            	user = UserDetailsImpl.build(doctorService.findByUsername(username)
        				.orElseThrow(() -> new UsernameNotFoundException("Employee Not Found with username: " + username)));
                break;
            default:
            	System.out.println("Employee ::::::::::::::::: Default :" + userType);
            	user = UserDetailsImpl.build(employeeService.findByUsername(username)
        				.orElseThrow(() -> new UsernameNotFoundException("Employee Not Found with username: " + username)));
                
        }
        return user;
	}

}
