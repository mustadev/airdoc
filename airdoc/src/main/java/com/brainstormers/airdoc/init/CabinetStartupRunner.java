package com.brainstormers.airdoc.init;

import java.util.Arrays;

import com.brainstormers.airdoc.repositories.CabinetRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CabinetStartupRunner implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(CabinetStartupRunner.class);
    
    @Autowired
    private CabinetRepository repository;
    
    @Override
    public void run(String...args) throws Exception {
        logger.info("Application started with command-line arguments: {} . \n To kill this application, press Ctrl + C.", Arrays.toString(args));
	System.out.println(":::::::::::::::::::::::  From StartUp");
	repository.findAll().forEach((cabinet) -> {
		String msg = String.format("id %s : name %s ", cabinet.getId(), cabinet.getName());
		System.out.println(cabinet.getName());
	});	
    }
}
