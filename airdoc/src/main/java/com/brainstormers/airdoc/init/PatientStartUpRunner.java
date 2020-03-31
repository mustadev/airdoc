package com.brainstormers.airdoc.init;


import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


import com.brainstormers.airdoc.models.Patient;

import com.brainstormers.airdoc.repositories.PatientRepository;

/**
 * cette classe sert à créer une base composée des patients, à fin que lorsque on veut tester 
 * le code on aura un example pour le vérifier!!!
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 20-03-2020
 *
 */
@Component
public class PatientStartUpRunner implements CommandLineRunner {
	
    private static final Logger logger = LoggerFactory.getLogger(PatientStartUpRunner.class);
    
    @Autowired
    private PatientRepository patientRepository;

    
    public void run(String...args) throws Exception {
        logger.info("Application started with command-line arguments: {} . \n To kill this application, press Ctrl + C.", Arrays.toString(args));
	System.out.println(":::::::::::::::::::::::  From StartUp");
   	
	//supprimer les patientes
	logger.info("removing all databases records");
	patientRepository.deleteAll();
	
	
	//------------------------------------------------------------------------------
	Patient patient1 = new Patient();
	patient1.setFirstName("Ayoub");
	patient1.setLastName("ben");
	patient1.setAge(23);
	patient1.setMail("ayoub@gmail.com");
	Patient savedPatient1 = patientRepository.save(patient1);
	logger.debug("id: " +savedPatient1.getId() + " name: " + savedPatient1.getFirstName()+""+savedPatient1.getLastName());
    logger.debug("patient "+savedPatient1.getId() + "saved");
    
    //------------------------------------------------------------------------------
    
    Patient patient2 = new Patient();
    patient2.setFirstName("mehdi");
    patient2.setLastName("ozi");
    patient2.setAge(24);
    patient2.setMail("mehdi@gmail.com");
    Patient savedPatient2 = patientRepository.save(patient2);
	logger.debug("id: " +savedPatient2.getId() + " name: " + savedPatient2.getFirstName()+""+savedPatient2.getLastName());
    logger.debug("patient "+savedPatient2.getId() + "saved");
    
   //------------------------------------------------------------------------------
    Patient patient3 = new Patient();
    patient3.setFirstName("jean");
    patient3.setLastName("freroa");
    patient3.setAge(25);
    patient3.setMail("jean@gmail.com");
    Patient savedPatient3 = patientRepository.save(patient3);
	logger.debug("id: " +savedPatient3.getId() + " name: " + savedPatient3.getFirstName()+""+savedPatient3.getLastName());
    logger.debug("patient "+savedPatient3.getId() + "saved");
  //------------------------------------------------------------------------------
    Patient patient4 = new Patient();
    patient4.setFirstName("fatima");
    patient4.setLastName("koam");
    patient4.setAge(25);
    patient4.setMail("fatima@gmail.com");
	Patient savedPatient4 = patientRepository.save(patient4);
	logger.debug("id: " +savedPatient4.getId() + " name: " + savedPatient4.getFirstName()+""+savedPatient4.getLastName());
    logger.debug("patient "+savedPatient4.getId() + "saved");
    
	System.out.println("patients saved !");


	System.out.println("finished");
    }

}
