package com.brainstormers.airdoc.payload.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class LoginRequest {
	
	@Email
	@NotBlank
	private String email;

	@Size(min=6)
	@NotBlank
	private String password;
	
}
