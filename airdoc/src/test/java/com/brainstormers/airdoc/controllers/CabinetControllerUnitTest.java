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
import org.springframework.data.domain.Sort;
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
		Cabinet cabinet1 = new Cabinet();
		cabinet1.setName("test");
		cabinet1.setDescription("test");
		cabinet1.setRating(4.1f);
		cabinet1.setCity("test");

		Cabinet cabinet2 = new Cabinet();
		cabinet2.setName("test");
		cabinet2.setDescription("test");
		cabinet2.setRating(4.1f);
		cabinet2.setCity("test");
		cabinets.add(cabinet1);
		cabinets.add(cabinet1);
		String query = "";
		String city= "";
		Sort sort = Sort.by("rating").descending();
		when(service.findAll(query, city, sort)).thenReturn(Optional.of(cabinets));
		this.mockMvc.perform(get("/cabinets/")).andDo(print()).andExpect(status().isOk());
				//.andExpect(content().string(containsString("")));
	}
}
