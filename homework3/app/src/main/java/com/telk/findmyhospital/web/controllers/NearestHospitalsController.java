package com.telk.findmyhospital.web.controllers;

import com.telk.findmyhospital.models.Hospital;
import com.telk.findmyhospital.service.HospitalService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Controller
public class NearestHospitalsController {

    private final HospitalService hospitalService;

    public NearestHospitalsController(HospitalService hospitalService) {
        this.hospitalService = hospitalService;
    }

    @RequestMapping("/listHospitals")
    @CrossOrigin( origins = "http://127.0.0.1:5501/")
    public List<Hospital> listHospitals(@RequestParam String name) {
        return this.hospitalService.findAllByNameLike(name);
    }


    @RequestMapping("/listHospitals/all")
    @CrossOrigin( origins = "http://127.0.0.1:5501/")
    public List<Hospital> listAllHospitals() {
        return this.hospitalService.findAll();
    }

}
