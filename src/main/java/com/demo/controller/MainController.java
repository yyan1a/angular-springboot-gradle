package com.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.domain.Candidate;
import com.demo.domain.Country;


/**
 * Controller Class for rendering index.jsp and cv.jsp
 * 
 * @author Justine Yan
 *
 */

@RestController()
@RequestMapping(path="/api/candidate")
public class MainController {

	@GetMapping("/countries")
	public List<Country> getCountries(){
		List<Country> countries = new ArrayList<Country>();
		countries.add(new Country("USA"));
		countries.add(new Country("Canada"));
		return countries;
	}
	
}
