package com.brainstormers.airdoc.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import com.brainstormers.airdoc.models.Doctor;
import com.brainstormers.airdoc.repositories.DoctorRepository;

@Service
public class DoctorDetails implements UserDetailsService {

  @Autowired
  private DoctorRepository doctorRepository;

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    final Doctor doctor = doctorRepository.findByEmail(email);

    if (doctor== null) {
      throw new UsernameNotFoundException("User '" + email + "' not found");
    }

    return org.springframework.security.core.userdetails.User//
        .withUsername(email)//
        .password(doctor.getPassword())//
        .authorities(doctor.getRoles())//
        .accountExpired(false)//
        .accountLocked(false)//
        .credentialsExpired(false)//
        .disabled(false)//
        .build();
  }

}
