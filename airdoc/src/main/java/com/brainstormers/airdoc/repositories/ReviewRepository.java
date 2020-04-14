package com.brainstormers.airdoc.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.brainstormers.airdoc.models.Review;

/**
 * Repository des revues des utilisateurs
 * @author Mustapha Ouarrain
 * @since version 0.0.2
 */
public interface ReviewRepository extends MongoRepository<Review, String> {


}
