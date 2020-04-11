package com.brainstormers.airdoc.controllers;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.models.ERole;
import com.brainstormers.airdoc.models.Admin;
import com.brainstormers.airdoc.models.Patient;
import com.brainstormers.airdoc.models.Role;
import com.brainstormers.airdoc.payload.request.LoginRequest;
import com.brainstormers.airdoc.payload.request.SignupRequest;
import com.brainstormers.airdoc.payload.response.JwtResponse;
import com.brainstormers.airdoc.payload.response.MessageResponse;
import com.brainstormers.airdoc.security.AuthProviders.DoctorAuthenticationProvider;
import com.brainstormers.airdoc.security.AuthProviders.AdminAuthenticationProvider;
import com.brainstormers.airdoc.security.AuthProviders.PatientAuthenticationProvider;
import com.brainstormers.airdoc.security.jwt.JwtUtils;
import com.brainstormers.airdoc.security.services.UserDetailsImpl;
import com.brainstormers.airdoc.services.DoctorService;
import com.brainstormers.airdoc.services.AdminService;
import com.brainstormers.airdoc.services.PatientService;
import com.brainstormers.airdoc.services.RoleService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AdminAuthenticationProvider adminAuthenticationProvider;
	
	@Autowired
	DoctorAuthenticationProvider doctorAuthenticationProvider;
	@Autowired
	PatientAuthenticationProvider patientAuthenticationProvider;
	

	@Autowired
	DoctorService doctorService;
	
	@Autowired
	PatientService patientService;
	
	@Autowired
	AdminService adminService;
	

	@Autowired
	RoleService roleService;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	
	
	@PostMapping("/doctor/signin")
	public ResponseEntity<?> authenticateDoctor(@Valid @RequestBody LoginRequest loginRequest) {
		return authenticate(loginRequest, doctorAuthenticationProvider);
	}
	
	@PostMapping("/patient/signin")
	public ResponseEntity<?> authenticatePatient(@Valid @RequestBody LoginRequest loginRequest) {	
		return authenticate(loginRequest, patientAuthenticationProvider);
	}
	
	@PostMapping("/admin/signin")
	public ResponseEntity<?> authenticateAdmin(@Valid @RequestBody LoginRequest loginRequest) {
		return authenticate(loginRequest, adminAuthenticationProvider);
	}
	
	public ResponseEntity<?> authenticate(@Valid @RequestBody LoginRequest loginRequest, DaoAuthenticationProvider daoAuthenticationProvider) {
		System.out.println(":::::::::::::::::::::::::::::::::::: SIGNIN");
		System.out.println(":::::::::::::::::::username : " + loginRequest.getEmail());
		System.out.println(":::::::::::::::::::password : " + loginRequest.getPassword());
	
		try {
			 
			
			Authentication authentication = daoAuthenticationProvider.authenticate(
					new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
			System.out.println("::::::::::::::::::: after authenticationmanager : " + loginRequest.getEmail());
			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);
			
			UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
			List<String> roles = userDetails.getAuthorities().stream()
					.map(item -> item.getAuthority())
					.collect(Collectors.toList());

			return ResponseEntity.ok(new JwtResponse(jwt, 
													 userDetails.getId(), 
													 userDetails.getUsername(), 
													 userDetails.getEmail(), 
													 userDetails.getUserType(),
													 roles));
		}catch (AuthenticationException ex) {
			System.out.println(ex);
			return  ResponseEntity
					.badRequest()
					.body(new MessageResponse("Bad Credentials"));
		}	
		
		
	}
	

	@PostMapping("/doctor/signup") //TODO add throw  Exception
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		System.out.println("username : " + signUpRequest.getUsername());
		System.out.println("lastname : " + signUpRequest.getLastname());
		System.out.println("firstname : " + signUpRequest.getFirstname());
		System.out.println("email : " + signUpRequest.getEmail());
		System.out.println("password : " + signUpRequest.getPassword());
		System.out.println("phone : " + signUpRequest.getPhone());
		if (doctorService.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (doctorService.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		Doctor user = new Doctor();
		user.setUsername(signUpRequest.getUsername());
		user.setLastname(signUpRequest.getLastname());
		user.setFirstname(signUpRequest.getFirstname());
		user.setEmail( signUpRequest.getEmail());
		user.setPassword(encoder.encode(signUpRequest.getPassword()));
		Set<Role> roles = new HashSet<>();
		Role userRole = roleService.findByName(ERole.ROLE_USER)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		roles.add(userRole);

		user.setRoles(roles);
		Optional<Doctor> doc = doctorService.save(user);
		
		if(!doc.isPresent()) {
			System.out.println(":::::::::::::::::::::: DOC IS NULL!!!");
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Doctor DID NOT Registere!"));
		}
		
		System.out.println(":::::::::::::::::::::: DOC IS NOT NULL!!!");
		System.out.println(":::::::::::::::::::::: " + doc.get().toString());
		return ResponseEntity.ok(new MessageResponse("Doctor registered successfully!"));
		
	}
	
	@PostMapping("/patient/signup") //TODO add throw  Exception
	public ResponseEntity<?> registerPatient(@Valid @RequestBody SignupRequest signUpRequest) {
		System.out.println("username : " + signUpRequest.getUsername());
		System.out.println("lastname : " + signUpRequest.getLastname());
		System.out.println("firstname : " + signUpRequest.getFirstname());
		System.out.println("email : " + signUpRequest.getEmail());
		System.out.println("password : " + signUpRequest.getPassword());
		System.out.println("phone : " + signUpRequest.getPhone());

		if (patientService.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (patientService.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		Patient user = new Patient();
		user.setUsername(signUpRequest.getUsername());
		user.setLastname(signUpRequest.getLastname());
		user.setFirstname(signUpRequest.getFirstname());
		user.setEmail( signUpRequest.getEmail());
		user.setPassword(encoder.encode(signUpRequest.getPassword()));

		Set<Role> roles = new HashSet<>();
		Role userRole = roleService.findByName(ERole.ROLE_USER)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		roles.add(userRole);
		user.setRoles(roles);
		Optional<Patient> pat = patientService.insertPatient(user);
		if(!pat.isPresent()) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Patient DID NOT Registere!"));
		}
		System.out.println(":::::::::::::::::::::: PATIENT IS NOT NULL!!!");
		System.out.println(":::::::::::::::::::::: " + pat.get().toString());
		return ResponseEntity.ok(new MessageResponse("Patient registered successfully!"));
	}
	
	@PostMapping("/admin/signup") //TODO add throw  Exception
	public ResponseEntity<?> registerAdmin(@Valid @RequestBody SignupRequest signUpRequest) {
		System.out.println("username : " + signUpRequest.getUsername());
		System.out.println("lastname : " + signUpRequest.getLastname());
		System.out.println("firstname : " + signUpRequest.getFirstname());
		System.out.println("email : " + signUpRequest.getEmail());
		System.out.println("password : " + signUpRequest.getPassword());
		System.out.println("phone : " + signUpRequest.getPhone());

		if (adminService.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (adminService.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		Admin user = new Admin();
		user.setUsername(signUpRequest.getUsername());
		user.setLastname(signUpRequest.getLastname());
		user.setFirstname(signUpRequest.getFirstname());
		user.setEmail( signUpRequest.getEmail());
		user.setPassword(encoder.encode(signUpRequest.getPassword()));

		Set<Role> roles = new HashSet<>();
		Role adminRole = roleService.findByName(ERole.ROLE_ADMIN)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		roles.add(adminRole);
		user.setRoles(roles);
		Optional<Admin> emp = adminService.save(user);
		if(!emp.isPresent()) {
			System.out.println(":::::::::::::::::::::: ADMIN IS NULL!!!");
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Admin DID NOT Registere!"));
			
		}

		System.out.println(":::::::::::::::::::::: ADMIN IS NOT NULL!!!");
		System.out.println(":::::::::::::::::::::: " + emp.get().toString());
		return ResponseEntity.ok(new MessageResponse("Admin registered successfully!"));
	}
	
	
}
