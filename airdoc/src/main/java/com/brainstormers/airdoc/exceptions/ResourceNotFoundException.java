package com.brainstormers.airdoc.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


/**
 * implimentation de {@link Exception Exception.class} 
 * c'est un exception qui va etre jeter quand un resource n'existe pas 
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends Exception{

 private static final long serialVersionUID = 1L;
 
 public ResourceNotFoundException(String message){

     super(message);

    }

}