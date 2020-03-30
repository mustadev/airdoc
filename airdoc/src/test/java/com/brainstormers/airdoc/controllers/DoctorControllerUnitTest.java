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

import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.services.DoctorService;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Sort;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(DoctorController.class)
public class DoctorControllerUnitTest{

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private DoctorService service;

	@Test
	public void get_should_return_status_ok() throws Exception {
		List<Doctor> doctors = new ArrayList<>();
		Doctor doctor1 = new Doctor();
		doctor1.setName("test");
		doctor1.setDescription("test");
		doctor1.setRating(4.1f);
		doctor1.setCity("test");

		Doctor doctor2 = new Doctor();
		doctor2.setName("test");
		doctor2.setDescription("test");
		doctor2.setRating(4.1f);
		doctor2.setCity("test");
		doctors.add(doctor1);
		doctors.add(doctor1);
		String query = "";
		String city= "";
		Sort sort = Sort.by("rating").descending();
		when(service.findAll(query, city, sort)).thenReturn(Optional.of(doctors));
		this.mockMvc.perform(get("/doctors/")).andDo(print()).andExpect(status().isOk());
				//.andExpect(content().string(containsString("")));
	}
}
