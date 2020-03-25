package com.brainstormers.airdoc.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.brainstormers.airdoc.models.User;

public interface UserRepository extends MongoRepository<User,String> {
}
