package com.brainstormers.airdoc.controllers;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CabinetControllerTest{


	@Autowired
	private CabinetController controller;

	@Test
	public void contextLoad() throws Exception{

		assertThat(controller).isNotNull();
	}
}


