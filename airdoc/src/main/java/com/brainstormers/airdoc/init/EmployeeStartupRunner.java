package com.brainstormers.airdoc.init;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.models.ERole;
import com.brainstormers.airdoc.models.Role;
import com.brainstormers.airdoc.repositories.DoctorRepository;
import com.brainstormers.airdoc.services.DoctorService;
import com.brainstormers.airdoc.services.EmployeeService;
import com.brainstormers.airdoc.services.RoleService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Order(4)
@Component
public class EmployeeStartupRunner implements CommandLineRunner {

	Logger logger = LoggerFactory.getLogger(EmployeeStartupRunner.class);
	
	@Autowired
	private EmployeeService employeeService;
	
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
		employeeService.deleteAll();
		// la creation des "dummy data"
		

//		Doctor doctor2 = new Doctor();
//		doctor2.setFirstName("max");
//		doctor2.setLastName("Plank");
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
//		doctor3.setFirstName("max");
//		doctor3.setLastName("Plank");
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
//		doctor4.setFirstName("max");
//		doctor4.setLastName("Plank");
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
//		doctor5.setFirstName("max");
//		doctor5.setLastName("Plank");
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
//		doctor6.setFirstName("max");
//		doctor6.setLastName("Plank");
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
//		doctor7.setFirstName("max");
//		doctor7.setLastName("Plank");
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