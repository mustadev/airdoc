package com.brainstormers.airdoc.models;

public class Like {
	private String authorId;

	
	
	
	public Like() {}

	public Like(String authorId) {
		this.authorId = authorId;
	}

	public String getAuthorId() {
		return authorId;
	}

	public void setAuthorId(String authorId) {
		this.authorId = authorId;
	}
	
	@Override
	public int hashCode() {
		return this.authorId.hashCode();
	}
	
	@Override
	public boolean equals(Object object) {
		Like like = (Like) object;
		return like.getAuthorId().equals(this.authorId);
	}
	
}
