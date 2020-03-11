package com.brainstormers.airdoc.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Review {
	
	@Id
	private String id;
	private String content;
	private User auther;
	private int likes;
	
	
	public Review(String content, User auther, int likes) {
		this.content = content;
		this.auther = auther;
		this.likes = likes;
	}
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public User getAuther() {
		return auther;
	}
	public void setAuther(User auther) {
		this.auther = auther;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	
}
