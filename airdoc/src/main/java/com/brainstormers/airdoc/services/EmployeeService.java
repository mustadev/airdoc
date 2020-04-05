package com.brainstormers.airdoc.services;

import java.util.List;
import java.util.Optional;

import com.brainstormers.airdoc.models.Employee;

/**
 * une services  pour accéder et modifier la base de données
 * de Employé
 *  
 * @author Mustapha Ouarrain
 * @since version 0.0.1
 */

public interface EmployeeService {
	
	
	/**
	 * Trouver les doctors
	 * @return List<Doctor> 
	 */
	Optional<List<Employee>> findAll();

	
	/**
	 * trouver un Employé par son id
	 * @param id
	 * @return Optional<Employe>
	 */
	Optional<Employee> findById(String id);
	
	/**
	 * ajouter ou modifier un Employee
	 * @param employee
	 */
	Optional<Employee> save(Employee employee);
	/**
	
	/**
	 * modifier un Employee
	 * @param doctor
	 */
	Optional<Employee> update(Employee employee);

     /**
     * supprimer un Employee par son Id
     * @param id
     */
    void deleteById(String id);

 
    /**
     *  supprimer un Employee par son Email
     * @param doctor
     *
     * */
    public void deleteByEmail(String email);
    
    /**
     *  supprimer tout les Employees 
     * @param doctor
     *
     * */
    public void deleteAll();
    
    /**
     * Trouver le Employee par son Email
     * @param email
     *
     * */
    public Optional<Employee> findByEmail(String email);
    
    
    /**
     * Trouver le Employee par son nom d'utilisateur
     * @param username
     *
     * */
    public Optional<Employee> findByUsername(String username);
    

    /**
     * Vérifier que le Employee existe par nom d'utilisateur
     * @param username
     *
     * */
    boolean existsByUsername(String username);

    /**
     * Vérifier que le Employee existe par Email
     * @param email
     *
     * */
    boolean existsByEmail(String email);

	
}
