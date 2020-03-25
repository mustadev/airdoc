package com.brainstormers.airdoc.controllers;

import org.springframework.web.bind.annotation.GetMapping;

public class HomeController {
	
	    @GetMapping("/")
	    public String getSearchPage() {
	        return "/cabinet/search";
	    }

	    @GetMapping("/test")
	    public String test() {
	        return "/cabinet/test";
	    }

}
