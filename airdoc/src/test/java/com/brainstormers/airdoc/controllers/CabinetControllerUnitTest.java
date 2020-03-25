package com.brainstormers.airdoc.controllers;

import static org.hamcrest.Matchers.containsString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.brainstormers.airdoc.models.Cabinet;
import com.brainstormers.airdoc.services.CabinetService;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(CabinetController.class)
public class CabinetControllerUnitTest{

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private CabinetService service;

	@Test
	public void get_should_return_status_ok() throws Exception {
		List<Cabinet> cabinets = new ArrayList<>();
		cabinets.add(new Cabinet());
		when(service.findAll()).thenReturn(Optional.of(cabinets));
		this.mockMvc.perform(get("/cabinets")).andDo(print()).andExpect(status().isOk());
				//.andExpect(content().string(containsString("")));
	}
}
