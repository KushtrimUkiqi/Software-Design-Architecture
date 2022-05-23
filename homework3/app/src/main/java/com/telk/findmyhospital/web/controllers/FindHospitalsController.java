package com.telk.findmyhospital.web.controllers;

import com.telk.findmyhospital.models.Hospital;
import com.telk.findmyhospital.service.HospitalService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class FindHospitalsController {
    private final HospitalService hospitalService;

    public FindHospitalsController(HospitalService hospitalService)
    {
        this.hospitalService = hospitalService;
    }

    @RequestMapping("/hospitals")
    public String getHome(Model model, @RequestParam float latitude, @RequestParam float longitude , @RequestParam int radius)
    {
        List<Hospital> listOfNearestHospitals = hospitalService.findAll().stream().filter(hospital -> hospitalService.distance(latitude,longitude,hospital.getLatitude(),hospital.getLongitude())<=radius).collect(Collectors.toList());;
        listOfNearestHospitals.forEach(System.out::println);
        model.addAttribute("hospitals",listOfNearestHospitals);
        return "NearestHospitals";
    }

}
