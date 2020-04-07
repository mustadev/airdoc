package com.brainstormers.airdoc.models;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import lombok.Data;
import lombok.ToString;

@Document(collection = "roles")
@Data @ToString  
public class Role {
  @Id
  private String id;

  private ERole name;
  
  public Role(ERole name) {
	  this.name = name;
  }

}
