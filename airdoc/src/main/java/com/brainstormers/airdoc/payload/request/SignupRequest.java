package com.brainstormers.airdoc.payload.request;


import javax.validation.constraints.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor 
public class SignupRequest {
    
	@NotBlank
    @Size(min = 3, max = 20)
    private String username;
 
    @NotBlank
    @Size(min = 3, max = 20)
    private String firstname;
    
    
    @NotBlank
    @Size(min = 1, max = 20)
    private String lastname;
    
    
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    
    @NotBlank
    @Size(max = 50)
    private String phone;
    
    
    

	@NotBlank
    @Size(min = 6, max = 40)
    private String password;
    
 
    
    
    
}
