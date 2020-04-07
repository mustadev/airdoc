package com.brainstormers.airdoc.models;

<<<<<<< HEAD
=======
import java.util.Set;
>>>>>>> develop

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Document(collection = "roles")
@Data @ToString @AllArgsConstructor @NoArgsConstructor
public class Role {
  @Id
  private String id;

  private ERole name;

}
