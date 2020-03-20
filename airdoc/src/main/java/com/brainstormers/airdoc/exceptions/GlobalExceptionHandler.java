package com.brainstormers.airdoc.exceptions;
import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

/**
 * un Class Pour gérer les exceptions
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@ControllerAdvice
public class GlobalExceptionHandler {

	/**
	 * generer reponse global
	 * @param ex ResourceNotFoundException jeter
	 * @param request WebRequest
	 * @return ResponseEntity 
	 */
	@ExceptionHandler(ResourceNotFoundException.class)
 	public ResponseEntity<?> resourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);

	}

	/**
	 * generer reponse global
	 * @param ex ResourceNotFoundException jeter
	 * @param request WebRequest
	 * @return ResponseEntity 
	 */
	@ExceptionHandler(ResourceAlreadyExistsException.class)
 	public ResponseEntity<?> ResourceAlreadyExistsException(ResourceAlreadyExistsException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);

	}

	/**
	 * generer reponse global 
	 * @param ex Exception jeter
	 * @param request WebRequest 
	 * @return ResponseEntity 
	 */
	@ExceptionHandler(Exception.class)
 	public ResponseEntity<?> globleExcpetionHandler(Exception ex, WebRequest request) {

	  	ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
	  	return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);

	}

}
