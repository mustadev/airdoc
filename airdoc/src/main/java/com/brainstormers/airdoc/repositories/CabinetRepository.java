package com.brainstormers.airdoc.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.brainstormers.airdoc.models.Cabinet;

@Repository
public interface CabinetRepository extends MongoRepository<Cabinet, String> {

    //@Query(value = "{'employees.name': ?0}", fields = "{'employees' : 0}")
    List<Cabinet> findCabinetByName(String name);

}
