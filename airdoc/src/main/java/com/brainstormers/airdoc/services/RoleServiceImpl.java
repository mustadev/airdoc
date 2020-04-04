package com.brainstormers.airdoc.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainstormers.airdoc.models.ERole;
import com.brainstormers.airdoc.models.Role;
import com.brainstormers.airdoc.repositories.RoleRepository;

@Service
public class RoleServiceImpl implements RoleService {

	@Autowired
	RoleRepository roleRepository;
	
	@Override
	public Optional<Role> findByName(ERole name) {
		return Optional.of(roleRepository.findByName(name));
	}

	@Override
	public void deleteByName(ERole name) {
		roleRepository.deleteByName(name);
		
	}

	@Override
	public void deleteAll() {
		roleRepository.deleteAll();
		
	}

	@Override
	public Optional<Role> save(ERole name) {
		Role role = new Role(name);
		return Optional.of(roleRepository.save(role));
	}

}
