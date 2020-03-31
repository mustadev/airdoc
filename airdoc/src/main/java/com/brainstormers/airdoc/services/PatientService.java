package com.brainstormers.airdoc.services;


import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.Patient;

import java.util.List;
import java.util.Optional;

/** 
 * cet interface pour déclarer toutes les méthodes de  la classe PatientServiceImpl
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 17-03-2020
 */

@Service
public interface PatientService {

    /**
     * cette méthode pour récupérer tous les patientes 
     * @return List<Patient>
     */
    Optional<List<Patient>> findAll();

    /**
     * cette méthode sert à trouver des patientes en utilissant l'id
     * @param id
     * @return
     */
    Optional<Patient> findPatientById(String id);

    /**
     * cette méthode sert à créer des nouvaux patientes
     * @param patient
     * @return
     */
    Optional<Patient> insertPatient(Patient patient);

    /**
     * cette méthode sert à modifier un patient(e)
     * @param patient
     * @return
     */
    Optional<Patient> updatePatient(Patient patient);
    void deletePatientById(String id);

}

