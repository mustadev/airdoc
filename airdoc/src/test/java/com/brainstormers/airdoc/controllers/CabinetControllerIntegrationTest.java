package com.brainstormers.airdoc.controllers;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;

import com.brainstormers.airdoc.models.Cabinet;
import com.brainstormers.airdoc.models.User;
import com.brainstormers.airdoc.services.CabinetService;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static io.restassured.module.jsv.JsonSchemaValidator.*;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.fail;
import static org.assertj.core.api.Assertions.assertThat;

//@Disabled
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CabinetControllerJunitTest {
	


	@LocalServerPort
	private int port;


	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = port;
		RestAssured.basePath = "/cabinets";
	}


	@Test
	void test_create_cabinet() {

		Cabinet cabinet = new Cabinet();
		cabinet.setName("doctor who hospital");
		cabinet.setCreatedBy(new User("doctor", "who"));
		cabinet.setDescription("this is doctor who's hospital");

		given().
		contentType(ContentType.JSON).
		accept(ContentType.JSON).
		body(cabinet).
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
		body("message", containsString("cabinet successfully deleted"));

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
		get("/cabinet_id_does_not_exist").
			then().
			assertThat().
			statusCode(HttpStatus.NOT_FOUND.value()).
			contentType(ContentType.JSON).
			body("message", equalTo("No Cabinet with id : cabinet_id_does_not_exist"));
	}

	@Disabled
	@Test
	void test_get_all_format_using_validator(){
		get().then().assertThat().body(matchesJsonSchemaInClasspath("cabinets.json"));
		//TODO clean database 
		//to make this test work
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
