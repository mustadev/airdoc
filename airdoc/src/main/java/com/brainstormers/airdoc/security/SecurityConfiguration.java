package com.brainstormers.airdoc.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.brainstormers.airdoc.security.AuthProviders.DoctorAuthenticationProvider;
import com.brainstormers.airdoc.security.AuthProviders.EmployeeAuthenticationProvider;
import com.brainstormers.airdoc.security.AuthProviders.PatientAuthenticationProvider;
import com.brainstormers.airdoc.security.jwt.AuthEntryPointJwt;
import com.brainstormers.airdoc.security.jwt.AuthTokenFilter;
import com.brainstormers.airdoc.security.services.DoctorDetailsServiceImpl;
import com.brainstormers.airdoc.security.services.EmployeeDetailsServiceImpl;
import com.brainstormers.airdoc.security.services.PatientDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
 securedEnabled = true,
 jsr250Enabled = true,
prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Autowired
	EmployeeDetailsServiceImpl employeeDetailsService;
	@Autowired
	DoctorDetailsServiceImpl doctorDetailsService;
	@Autowired
	PatientDetailsServiceImpl patientDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	@Bean
	public AuthTokenFilter authenticationJwtTokenFilter() {
		return new AuthTokenFilter();
	}

	@Override
	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.authenticationProvider(getEmployeeAuthenticationProvider());
		authenticationManagerBuilder.authenticationProvider(getEmployeeAuthenticationProvider());
		authenticationManagerBuilder.authenticationProvider(getEmployeeAuthenticationProvider());

	}

//    	@Bean
//    	@Override
//    	public AuthenticationManager authenticationManagerBean() throws Exception {
//    		return super.authenticationManagerBean();
//    	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().authorizeRequests()
				.antMatchers("/api/auth/**").permitAll().antMatchers("/api/test/**").permitAll().anyRequest()
				.authenticated();

		http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		// Allow swagger to be accessed without authentication
		web.ignoring().antMatchers("/v2/api-docs")//
				.antMatchers("/swagger-resources/**")//
				.antMatchers("/swagger-ui.html")//
				.antMatchers("/configuration/**")//
				.antMatchers("/webjars/**")//
				.antMatchers("/public");

	}

	@Bean
	public EmployeeAuthenticationProvider getEmployeeAuthenticationProvider() {
		EmployeeAuthenticationProvider dao = new EmployeeAuthenticationProvider();
		dao.setUserDetailsService(employeeDetailsService);
		dao.setPasswordEncoder(passwordEncoder());
		return dao;
	}

	@Bean
	public DoctorAuthenticationProvider getDoctorAuthenticationProvider() {
		DoctorAuthenticationProvider dao = new DoctorAuthenticationProvider();
		dao.setUserDetailsService(doctorDetailsService);
		dao.setPasswordEncoder(passwordEncoder());
		return dao;
	}

	@Bean
	public PatientAuthenticationProvider getPatientAuthenticationProvider() {
		PatientAuthenticationProvider dao = new PatientAuthenticationProvider();
		dao.setUserDetailsService(patientDetailsService);
		dao.setPasswordEncoder(passwordEncoder());
		return dao;
	}
}
