package com.brainstormers.airdoc.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.brainstormers.airdoc.security.jwt.AuthEntryPointJwt;
import com.brainstormers.airdoc.security.jwt.AuthTokenFilter;
import com.brainstormers.airdoc.security.services.UserDetailsServiceImpl;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
		// securedEnabled = true,
		// jsr250Enabled = true,
		prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	UserDetailsServiceImpl userDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	@Bean
	public AuthTokenFilter authenticationJwtTokenFilter() {
		return new AuthTokenFilter();
	}

	@Override
	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
//	@Bean
//    @Autowired
//    public AuthenticationManager authenticationManager(UserDetailsService securityUserDetailsService) throws Exception {
//        ObjectPostProcessor<Object> objectPostProcessor = new ObjectPostProcessor<Object>() {
//            public <T> T postProcess(T object) {
//                return object;
//            }
//        };
// 
//        AuthenticationManagerBuilder m = new AuthenticationManagerBuilder(objectPostProcessor);
//        m.userDetailsService(securityUserDetailsService).passwordEncoder(passwordEncoder());
//        return m.build();
//    }

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable()
			.exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.authorizeRequests().antMatchers("/api/auth/**").permitAll()
			.antMatchers("/api/test/**").permitAll()
			.antMatchers("/**").permitAll()
			.anyRequest().authenticated();
		
		

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
}
