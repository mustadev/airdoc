package com.brainstormers.airdoc.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.brainstormers.airdoc.models.ERole;
import com.brainstormers.airdoc.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Role findByName(ERole name);
  void deleteByName(ERole name);
}