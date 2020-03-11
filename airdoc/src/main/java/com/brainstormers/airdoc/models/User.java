package com.brainstormers.airdoc.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
	
	@Id
	private String id;
	private String firstName;
	private String lastName;
	
}
