package com.brainstormers.airdoc.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;


import com.brainstormers.airdoc.models.Patient;


import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.*;
import static io.restassured.module.jsv.JsonSchemaValidator.*;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.fail;
import static org.assertj.core.api.Assertions.assertThat;

/**
 * Integration test utilise {@link RestAssured}
 * voir docs en https://github.com/rest-assured/rest-assured/wiki/Usage
 * @author Ayoub Benhaimoud<ayoubbenhaimoud@gmail.com>
 * @since 20-3-2020
 * 
 * */
//@Disabled
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PatientControllerIntergationTest {
	


	@LocalServerPort
	private int port;


	@BeforeEach
	void setUp() throws Exception {
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = port;
		RestAssured.basePath = "/patients";
	}


	@Test
	void test_create_patient() {
		 

		
		Patient patient = new Patient();
		patient.setFirstName("jean");
		patient.setLastName("frero");
		patient.setAge(12);
		patient.setMail("xxx.gmail.com");
		

		given().
		contentType(ContentType.JSON).
		accept(ContentType.JSON).
		body(patient).
		when().
		post().
		then().
		assertThat().
		statusCode(HttpStatus.CREATED.value()).
		contentType(ContentType.JSON).
		body("$", hasKey("id"));
	
	}

	@Test
	void test_delete_response_and_status_code(){
		
		given().
		contentType(ContentType.JSON).
		accept(ContentType.JSON).
		when().
		delete("/123").
		then().
		assertThat().
		statusCode(HttpStatus.OK.value()).
		body("message", containsString("user successfully deleted"));
		

	}

	@Test
	void test_get_all(){
		get().
		then().
		assertThat().
		contentType(ContentType.JSON).
		statusCode(HttpStatus.OK.value());
	}
	
	@Test
	void test_get_by_id(){
		get("/patient_id_does_not_exist").
			then().
			assertThat().
			statusCode(HttpStatus.NOT_FOUND.value()).
			contentType(ContentType.JSON).
			body("message", equalTo("No patient with id : user_id_does_not_exist"));
	}

	
	@Test
	void test_get_all_response_using_validator(){
		get().then().assertThat().body(matchesJsonSchemaInClasspath("patients.json"));
	}

	@Test
	void test_update(){
		fail("not yet implemented");
	}
	
	
	@Test
	void test_get_with_filtre(){
		fail("not yet implemented");
	}

	@Test
	void test_get_with_pagination(){

		fail("not yet implemented");
	}
	

	@Test
	void test_search(){
		fail("not yet implemented");
	}
}
