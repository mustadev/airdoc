package com.brainstormers.airdoc.init;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.brainstormers.airdoc.models.Cabinet;
import com.brainstormers.airdoc.models.User;
import com.brainstormers.airdoc.repositories.CabinetRepository;
import com.brainstormers.airdoc.services.CabinetService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CabinetStartupRunner implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(CabinetStartupRunner.class);
    
    @Autowired
    private CabinetRepository cabinetRepository;

    //@Autowired
    //private CabinetService CabinetService;
    
    @Override
    public void run(String...args) throws Exception {
        logger.info("Application started with command-line arguments: {} . \n To kill this application, press Ctrl + C.", Arrays.toString(args));
	System.out.println(":::::::::::::::::::::::  From StartUp");
//	repository.findAll().forEach((cabinet) -> {
		//String msg = String.format("id %s : name %s ", cabinet.getId(), cabinet.getName());
		//System.out.println(cabinet.getName());
	//k});	
	//supprimer les cabinet
	logger.info("removing all databases records");
	cabinetRepository.deleteAll();
	//la creation des "dummy data"
	List<Cabinet> cabinets = new ArrayList<>();
	Cabinet cabinet1 = new Cabinet();
	cabinet1.setName("asafar");
	cabinet1.setDescription("asafar Description");
	cabinet1.setCreatedBy(new User("musta", "pha"));
	Cabinet savedCabinet = cabinetRepository.save(cabinet1);
	logger.debug("id: " +savedCabinet.getId() + " name: " + savedCabinet.getName());
//	logger.debug("cabint 1 saved");

	Cabinet cabinet2 = new Cabinet();
	cabinet2.setName("max plank");
	cabinet2.setDescription("max plank Description");

	Cabinet savedCabinet2 = cabinetRepository.save(cabinet2);
	logger.debug("id: " +savedCabinet2.getId() + " name: " + savedCabinet2.getName());
	Cabinet cabinet3 = new Cabinet();
	cabinet3.setName("bohr");
	cabinet3.setDescription("bohr Description");
	Cabinet savedCabinet3 = cabinetRepository.save(cabinet3);
	logger.debug("id: " +savedCabinet3.getId() + " name: " + savedCabinet3.getName());
	Cabinet cabinet4 = new Cabinet();
	cabinet4.setName("tesla");
	cabinet4.setDescription("tesla Description");
	Cabinet savedCabinet4 = cabinetRepository.save(cabinet4);
	logger.debug("id: " +savedCabinet4.getId() + " name: " + savedCabinet4.getName());

	//logger.info("inserting Records");
	//List<Cabinet> savedCabinets = cabinetRepository.saveAll(cabinets);
	System.out.println("cabinets saved");

	//List<Cabinet> savedCabinets = new ArrayList<>();
	//cabinets.forEach((Cabinet cabinet) -> savedCabinets.add(cabinetRepository.save(cabinet)));
	//savedCabinets.forEach((cabinet) -> logger.debug("id: " + cabinet.getId() + " name: " + cabinet.getName()));
		
	System.out.println("finished");
    }
}
