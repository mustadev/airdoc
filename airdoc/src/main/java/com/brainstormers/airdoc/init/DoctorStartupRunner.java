package com.brainstormers.airdoc.init;

import java.util.Arrays;

import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.repositories.DoctorRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class DoctorStartupRunner implements CommandLineRunner {
    
    Logger logger = LoggerFactory.getLogger(DoctorStartupRunner.class);
    @Autowired
    private DoctorRepository doctorRepository;

    //@Autowired
    //private DoctorService DoctorService;
    
    @Override
    public void run(String...args) throws Exception {
        logger.info("Application started with command-line arguments: {} . \n To kill this application, press Ctrl + C.", Arrays.toString(args));
	System.out.println(":::::::::::::::::::::::  From StartUp");
//	repository.findAll().forEach((doctor) -> {
		//String msg = String.format("id %s : name %s ", doctor.getId(), doctor.getName());
		//System.out.println(doctor.getName());
	//k});	
	//supprimer les doctor
	logger.info("removing all databases records");
	doctorRepository.deleteAll();
	//la creation des "dummy data"
	Doctor doctor1 = new Doctor();
	doctor1.setName("asafar");
	doctor1.setDescription("asafar Description");
	doctor1.setCity("agadir");
	doctor1.setRating(4.5f);
	doctor1.setOwnerId("user1");
	doctor1.setAverageRating(1);
	doctor1.setCountry("maroc");
	doctor1.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
	doctor1.setSpeciality("Dentist");
	Doctor savedDoctor = doctorRepository.save(doctor1);
	logger.debug("id: " +savedDoctor.getId() + " name: " + savedDoctor.getName());

	Doctor doctor2 = new Doctor();
	doctor2.setName("max plank");
	doctor2.setDescription("max plank Description");
	doctor2.setCity("ait mellout");
	doctor2.setRating(4.5f);
	doctor2.setOwnerId("user2");
	doctor2.setAverageRating(1);
	doctor2.setCountry("maroc");
	doctor2.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
	doctor2.setSpeciality("Dentist");
	Doctor savedDoctor2 = doctorRepository.save(doctor2);
	logger.debug("id: " +savedDoctor2.getId() + " name: " + savedDoctor2.getName());

	Doctor doctor3 = new Doctor();
	doctor3.setName("bohr");
	doctor3.setDescription("bohr Description");
	doctor3.setCity("rabat");
	doctor3.setRating(3.5f);
	doctor3.setOwnerId("user3");
	doctor3.setAverageRating(1);
	doctor3.setCountry("maroc");
	doctor3.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
	doctor3.setSpeciality("Dentist");
	Doctor savedDoctor3 = doctorRepository.save(doctor3);
	logger.debug("id: " +savedDoctor3.getId() + " name: " + savedDoctor3.getName());


	Doctor doctor4 = new Doctor();
	doctor4.setName("tesla");
	doctor4.setDescription("tesla Description");
	doctor4.setCity("fes");
	doctor4.setRating(2.5f);
	doctor4.setOwnerId("user4");
	doctor4.setAverageRating(1);
	doctor4.setCountry("maroc");
	doctor4.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
	doctor4.setSpeciality("Dentist");
	Doctor savedDoctor4 = doctorRepository.save(doctor4);
	logger.debug("id: " +savedDoctor4.getId() + " name: " + savedDoctor4.getName());

	Doctor doctor5 = new Doctor();
	doctor5.setName("tesla doctor");
	doctor5.setDescription("tesla Description");
	doctor5.setCity("fes");
	doctor5.setRating(3.5f);
	doctor5.setOwnerId("user5");
	doctor5.setAverageRating(1);
	doctor5.setCountry("maroc");
	doctor5.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
	doctor5.setSpeciality("Dentist");
	Doctor savedDoctor5 = doctorRepository.save(doctor5);
	logger.debug("id: " +savedDoctor5.getId() + " name: " + savedDoctor5.getName());

	Doctor doctor6 = new Doctor();
	doctor6.setName("tes doctor");
	doctor6.setDescription("tesla Description");
	doctor6.setCity("fes");
	doctor6.setRating(4.0f);
	doctor6.setOwnerId("user6");
	doctor6.setAverageRating(1);
	doctor6.setCountry("maroc");
	doctor6.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
	doctor6.setSpeciality("Urology");
	Doctor savedDoctor6 = doctorRepository.save(doctor6);
	logger.debug("id: " +savedDoctor6.getId() + " name: " + savedDoctor6.getName());

	Doctor doctor7 = new Doctor();
	doctor7.setName("tes doctor");
	doctor7.setDescription("tesla Description");
	doctor7.setCity("kasbat");
	doctor7.setRating(4.0f);
	doctor7.setOwnerId("user7");
	doctor7.setAverageRating(1);
	doctor7.setCountry("maroc");
	doctor7.setServices(Arrays.asList("Dental Fillings", "Whitneing"));
	doctor7.setSpeciality("Cardiologist");
	Doctor savedDoctor7 = doctorRepository.save(doctor7);
	logger.debug("id: " +savedDoctor7.getId() + " name: " + savedDoctor7.getName());



	//logger.info("inserting Records");
	//List<Doctor> savedDoctors = doctorRepository.saveAll(doctors);
	System.out.println("doctors saved");

	//List<Doctor> savedDoctors = new ArrayList<>();
	//doctors.forEach((Doctor doctor) -> savedDoctors.add(doctorRepository.save(doctor)));
	//savedDoctors.forEach((doctor) -> logger.debug("id: " + doctor.getId() + " name: " + doctor.getName()));
		
	System.out.println("finished");
    }
}
