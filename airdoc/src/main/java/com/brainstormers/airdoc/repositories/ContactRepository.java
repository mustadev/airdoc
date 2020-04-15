package com.brainstormers.airdoc.repositories;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.brainstormers.airdoc.models.Contact;


public interface ContactRepository extends MongoRepository<Contact, String> {


}
