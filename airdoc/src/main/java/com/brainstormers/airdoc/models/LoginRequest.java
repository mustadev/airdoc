package com.brainstormers.airdoc.models;

public  class LoginRequest{
	  private String email;
	  private String password;

	  public void setEmail(String email){
		  this.email = email;
	  }

	  public String getEmail(){
		  return this.email;
	  }
	  
	  public void setPassword(String password){
		  this.password = password;
	  }

	  public String getPassword(){
		  return this.password;
	  }
  }

