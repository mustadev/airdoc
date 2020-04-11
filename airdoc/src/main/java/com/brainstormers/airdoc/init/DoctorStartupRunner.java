package com.brainstormers.airdoc.init;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.models.ERole;
import com.brainstormers.airdoc.models.Role;
import com.brainstormers.airdoc.repositories.DoctorRepository;
import com.brainstormers.airdoc.services.DoctorService;
import com.brainstormers.airdoc.services.RoleService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Order(2)
@Component
public class DoctorStartupRunner implements CommandLineRunner {

	Logger logger = LoggerFactory.getLogger(DoctorStartupRunner.class);
	
	@Autowired
	private DoctorService doctorService;
	
	@Autowired
	private RoleService roleService;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Override
	public void run(String... args) throws Exception {
		logger.info(
				"Application started with command-line arguments: {} . \n To kill this application, press Ctrl + C.",
				Arrays.toString(args));
		System.out.println(":::::::::::::::::::::::  From StartUp");
		
		// supprimer les doctor
		logger.info("removing all databases records");
		doctorService.deleteAll();
		// la creation des "dummy data"
		Doctor doctor1 = new Doctor("Max", "Plank", "test@test.com", encoder.encode("password"), "maxplank");
		Set<Role> roles = new HashSet<Role>();
		roles.add(roleService.findByName(ERole.ROLE_USER).
				orElseThrow(() -> new Exception("Role " + ERole.ROLE_USER + " not Found in DB")));
		doctor1.setRoles(roles);
		doctor1.setDescription("asafar Description");
		doctor1.setCity("agadir");
		doctor1.setRating(4.5f);
		doctor1.setAverageRating(1);
		doctor1.setCountry("maroc");
		doctor1.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
		doctor1.setSpeciality("Dentist");
		doctorService.save(doctor1);

//		Doctor doctor2 = new Doctor();
//		doctor2.setFirstname("max");
//		doctor2.setLastname("Plank");
//		doctor2.setDescription("max plank Description");
//		doctor2.setCity("ait mellout");
//		doctor2.setRating(4.5f);
//		doctor2.setOwnerId("user2");
//		doctor2.setAverageRating(1);
//		doctor2.setCountry("maroc");
//		doctor2.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
//		doctor2.setSpeciality("Dentist");
//		doctorService.signup(doctor2);
//
//		Doctor doctor3 = new Doctor();
//		doctor3.setFirstname("max");
//		doctor3.setLastname("Plank");
//		doctor3.setDescription("bohr Description");
//		doctor3.setCity("rabat");
//		doctor3.setRating(3.5f);
//		doctor3.setOwnerId("user3");
//		doctor3.setAverageRating(1);
//		doctor3.setCountry("maroc");
//		doctor3.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
//		doctor3.setSpeciality("Dentist");
//		doctorService.signup(doctor3);
//
//		Doctor doctor4 = new Doctor();
//		doctor4.setFirstname("max");
//		doctor4.setLastname("Plank");
//		doctor4.setDescription("tesla Description");
//		doctor4.setCity("fes");
//		doctor4.setRating(2.5f);
//		doctor4.setOwnerId("user4");
//		doctor4.setAverageRating(1);
//		doctor4.setCountry("maroc");
//		doctor4.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
//		doctor4.setSpeciality("Dentist");
//		doctorService.signup(doctor4);
//		
//		Doctor doctor5 = new Doctor();
//		doctor5.setFirstname("max");
//		doctor5.setLastname("Plank");
//		doctor5.setDescription("tesla Description");
//		doctor5.setCity("fes");
//		doctor5.setRating(3.5f);
//		doctor5.setOwnerId("user5");
//		doctor5.setAverageRating(1);
//		doctor5.setCountry("maroc");
//		doctor5.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
//		doctor5.setSpeciality("Dentist");
//		doctorService.signup(doctor5);
//
//		Doctor doctor6 = new Doctor();
//		doctor6.setFirstname("max");
//		doctor6.setLastname("Plank");
//		doctor6.setDescription("tesla Description");
//		doctor6.setCity("fes");
//		doctor6.setRating(4.0f);
//		doctor6.setOwnerId("user6");
//		doctor6.setAverageRating(1);
//		doctor6.setCountry("maroc");
//		doctor6.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
//		doctor6.setSpeciality("Urology");
//		doctorService.signup(doctor6);
//
//		Doctor doctor7 = new Doctor();
//		doctor7.setFirstname("max");
//		doctor7.setLastname("Plank");
//		doctor7.setDescription("tesla Description");
//		doctor7.setCity("kasbat");
//		doctor7.setRating(4.0f);
//		doctor7.setOwnerId("user7");
//		doctor7.setAverageRating(1);
//		doctor7.setCountry("maroc");
//		doctor7.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
//		doctor7.setSpeciality("Cardiologist");
//		doctorService.signup(doctor7);

		// logger.info("inserting Records");
		// List<Doctor> savedDoctors = doctorRepository.saveAll(doctors);
		logger.info("doctors saved");

		// List<Doctor> savedDoctors = new ArrayList<>();
		// doctors.forEach((Doctor doctor) ->
		// savedDoctors.add(doctorRepository.save(doctor)));
		// savedDoctors.forEach((doctor) -> logger.debug("id: " + doctor.getId() + "
		// name: " + doctor.getName()));

		logger.info("finished");
	}
}
