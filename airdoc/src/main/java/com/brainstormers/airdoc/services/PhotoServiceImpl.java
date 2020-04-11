package com.brainstormers.airdoc.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.Photo;
import com.brainstormers.airdoc.repositories.PhotoRepository;

@Service
public class PhotoServiceImpl implements PhotoService {
 
    @Autowired
    private PhotoRepository photoRepository;
 
    public Optional<String> savePhoto(Photo photo){   
        photo = photoRepository.save(photo); 
        return Optional.ofNullable(photo.getId()); 
    }
 

    public Optional<Photo> getPhoto(String id) { 
        return photoRepository.findById(id); 
    }
}