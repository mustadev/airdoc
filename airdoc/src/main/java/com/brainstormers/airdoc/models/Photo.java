package com.brainstormers.airdoc.models;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "photos")
@Data@AllArgsConstructor@NoArgsConstructor
public class Photo {
    @Id
    private String id;
     
    private String ownerId;
         
    private Binary image;
}