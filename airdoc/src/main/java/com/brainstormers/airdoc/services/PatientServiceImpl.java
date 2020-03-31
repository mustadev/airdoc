package com.brainstormers.airdoc.services;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.Patient;
import com.brainstormers.airdoc.repositories.PatientRepository;

import java.util.List;
import java.util.Optional;

/**
 * cette classe implemente {@link PatientService}
 * @author Ayoub BenHaimoud <ayoubbenhaimoud@gmail.com>
 * @since 17-3-2020
 */
@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    private PatientRepository patientRepository;
    @Override
    public Optional<List<Patient>> findAll() {
        return Optional.of(patientRepository.findAll());
    }

    @Override
    public Optional<Patient> findPatientById(String id) {
        return patientRepository.findById(id);
    }

    @Override
    public Optional<Patient> insertPatient(Patient patient) {
        return Optional.of(patientRepository.insert(patient));
    }

    @Override
    public Optional<Patient> updatePatient( Patient patient) {
        return Optional.of(patientRepository.save(patient));
    }

    @Override
    public void deletePatientById(String id) {
    	patientRepository.deleteById(id);
    }
}
