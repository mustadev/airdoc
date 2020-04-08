package com.brainstormers.airdoc.controllers;


import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;

import com.brainstormers.airdoc.models.Doctor;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static io.restassured.module.jsv.JsonSchemaValidator.*;
import static org.hamcrest.Matchers.*;
//import static org.junit.jupiter.api.Assertions.fail;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class DoctorControllerIntergationTest {
	


	@LocalServerPort
	private int port;


	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = port;
		RestAssured.basePath = "/doctors";
	}


	@Test
	void test_create_doctor() {


		Doctor doctor = new Doctor();
		doctor.setFirstname("Mr");
		doctor.setLastname("Who");
		doctor.setAboutMe("this is doctor who's hospital");
		given().
		contentType(ContentType.JSON).
		accept(ContentType.JSON).
		body(doctor).
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
		body("message", containsString("doctor successfully deleted"));

	}

	@Test
	void test_get_all(){
		//TODO 
		//fail("not yet implemented");
		get().
		then().
		assertThat().
		contentType(ContentType.JSON).
		statusCode(HttpStatus.OK.value());
	}
	
	@Test
	void test_get_by_id(){
		get("/doctor_id_does_not_exist").
			then().
			assertThat().
			statusCode(HttpStatus.NOT_FOUND.value()).
			contentType(ContentType.JSON).
			body("message", equalTo("No Doctor with id : doctor_id_does_not_exist"));
	}

	@Test
	void test_get_all_format_using_validator(){
		get().then().assertThat().body(matchesJsonSchemaInClasspath("doctors.json"));
		//TODO clean Model
		//to make this test work
	}

	@Test
	void test_update(){
		Doctor doctor = new Doctor();
		doctor.setId("123");
		doctor.setFirstname("testName");
		doctor.setLastname("testName");
		// add the doctor first then update it.
		given().
			contentType(ContentType.JSON).
			accept(ContentType.JSON).
			body(doctor).
		when().
			post().
		then().
			log().
			body().
			assertThat().
			body("$", hasKey("id"));
		
		//change the doctor 
		doctor.setFirstname("otherTestName");
		doctor.setLastname("otherTestName");
		given().
			contentType(ContentType.JSON).
			accept(ContentType.JSON).
		when().
			body(doctor).
			put().
		then().
			log().
			body().
			assertThat().
			statusCode(HttpStatus.OK.value()).
			body("id", equalTo("123")).
			body("name", equalTo("otherTestName"));

	}
	


	@Test
	void test_search_by_params(){
		given().
			contentType(ContentType.JSON).
			accept(ContentType.JSON).
			param("query", "tes").
			param("city", "fes").
			param("sort", "rating").
		when().
			get().
		then().
			log().
			body().
			statusCode(HttpStatus.OK.value());
	}
}
