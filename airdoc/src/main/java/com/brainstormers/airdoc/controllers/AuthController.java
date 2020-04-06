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
import com.brainstormers.airdoc.models.Employee;
import com.brainstormers.airdoc.models.Patient;
import com.brainstormers.airdoc.models.Role;
import com.brainstormers.airdoc.payload.request.LoginRequest;
import com.brainstormers.airdoc.payload.request.SignupRequest;
import com.brainstormers.airdoc.payload.response.JwtResponse;
import com.brainstormers.airdoc.payload.response.MessageResponse;
import com.brainstormers.airdoc.security.AuthProviders.DoctorAuthenticationProvider;
import com.brainstormers.airdoc.security.AuthProviders.EmployeeAuthenticationProvider;
import com.brainstormers.airdoc.security.AuthProviders.PatientAuthenticationProvider;
import com.brainstormers.airdoc.security.jwt.JwtUtils;
import com.brainstormers.airdoc.security.services.UserDetailsImpl;
import com.brainstormers.airdoc.services.DoctorService;
import com.brainstormers.airdoc.services.EmployeeService;
import com.brainstormers.airdoc.services.PatientService;
import com.brainstormers.airdoc.services.RoleService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	EmployeeAuthenticationProvider employeeAuthenticationProvider;
	
	@Autowired
	DoctorAuthenticationProvider doctorAuthenticationProvider;
	@Autowired
	PatientAuthenticationProvider patientAuthenticationProvider;
	

	@Autowired
	DoctorService doctorService;
	
	@Autowired
	PatientService patientService;
	
	@Autowired
	EmployeeService employeeService;
	

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
	
	@PostMapping("/employee/signin")
	public ResponseEntity<?> authenticateEmployee(@Valid @RequestBody LoginRequest loginRequest) {
		return authenticate(loginRequest, employeeAuthenticationProvider);
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

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleService
					.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleService.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				case "mod":
					Role modRole = roleService.findByName(ERole.ROLE_MODERATOR)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(modRole);

					break;
				default:
					Role userRole = roleService.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

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
		user.setLastName(signUpRequest.getLastname());
		user.setFirstName(signUpRequest.getFirstname());
		user.setEmail( signUpRequest.getEmail());
		user.setPassword(encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleService.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleService.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				case "mod":
					Role modRole = roleService.findByName(ERole.ROLE_MODERATOR)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(modRole);

					break;
				default:
					Role userRole = roleService.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

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
	
	@PostMapping("/employee/signup") //TODO add throw  Exception
	public ResponseEntity<?> registerEmployee(@Valid @RequestBody SignupRequest signUpRequest) {
		System.out.println("username : " + signUpRequest.getUsername());
		System.out.println("lastname : " + signUpRequest.getLastname());
		System.out.println("firstname : " + signUpRequest.getFirstname());
		System.out.println("email : " + signUpRequest.getEmail());
		System.out.println("password : " + signUpRequest.getPassword());
		if (employeeService.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (employeeService.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		Employee user = new Employee();
		user.setUsername(signUpRequest.getUsername());
		user.setLastname(signUpRequest.getLastname());
		user.setFirstname(signUpRequest.getFirstname());
		user.setEmail( signUpRequest.getEmail());
		user.setPassword(encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleService.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleService.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				case "mod":
					Role modRole = roleService.findByName(ERole.ROLE_MODERATOR)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(modRole);

					break;
				default:
					Role userRole = roleService.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		Optional<Employee> emp = employeeService.save(user);
		if(!emp.isPresent()) {
			System.out.println(":::::::::::::::::::::: EMPLOYEE IS NULL!!!");
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Employee DID NOT Registere!"));
			
		}

		System.out.println(":::::::::::::::::::::: EMPLOYEE IS NOT NULL!!!");
		System.out.println(":::::::::::::::::::::: " + emp.get().toString());
		return ResponseEntity.ok(new MessageResponse("Employee registered successfully!"));
	}
	
	
}
