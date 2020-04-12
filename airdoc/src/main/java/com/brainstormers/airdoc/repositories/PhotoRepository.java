package com.brainstormers.airdoc.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.brainstormers.airdoc.models.Photo;

public interface PhotoRepository extends MongoRepository<Photo, String> {

	//List<Photo> findByOwnerId(String ownerId);

}
