package com.telk.findmyhospital.web.controllers;

import com.telk.findmyhospital.models.Hospital;
import com.telk.findmyhospital.models.Rating;
import com.telk.findmyhospital.service.HospitalService;
import com.telk.findmyhospital.service.RatingService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Controller
public class FindHospitalsController {
    private final HospitalService hospitalService;
    private final RatingService ratingService;

    public FindHospitalsController(HospitalService hospitalService, RatingService ratingService)
    {
        this.hospitalService = hospitalService;
        this.ratingService = ratingService;
    }

    @RequestMapping("/hospitals")
    @CrossOrigin( origins = "http://127.0.0.1:5501/")
    public List<Hospital> getHome(Model model, @RequestParam float latitude, @RequestParam float longitude , @RequestParam int radius)
    {
      List<Hospital> list =  hospitalService.findAll().stream().filter(hospital -> hospitalService.distance(latitude,longitude,hospital.getLatitude(),hospital.getLongitude())<=radius).collect(Collectors.toList());
        list.stream().forEach(hospital -> hospital.setRating(ratingService.findAllRatingForHospital(hospital)));
        return list;
    }


}
