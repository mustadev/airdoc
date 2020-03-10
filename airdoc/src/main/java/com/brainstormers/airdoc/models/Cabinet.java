package com.brainstormers.airdoc.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cabinets")
public class Cabinet{
	
	@Id
	private String id;
	public Cabinet() {
	}
	public Cabinet(String name) {
		this.name = name;
	}
	private String name;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
