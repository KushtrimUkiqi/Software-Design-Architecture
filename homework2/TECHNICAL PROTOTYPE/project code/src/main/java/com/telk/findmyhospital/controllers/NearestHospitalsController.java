package com.telk.findmyhospital.controllers;

import com.telk.findmyhospital.models.Hospital;
import com.telk.findmyhospital.service.HospitalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;

@RestController
public class NearestHospitalsController {

    private final HospitalService hospitalService;

    public NearestHospitalsController(HospitalService hospitalService) {
        this.hospitalService = hospitalService;
    }

//    @RequestMapping("/listHospitals")
//    public List<String> list()
//    {
//        List<String> l = new LinkedList<>();
//        l.add("KUSHTRIM");
//        l.add("ARDIT");
//        l.add("MUHAMED");
//
//        return l;
//    }


    @RequestMapping("/listHospitals")
    @CrossOrigin( origins = "http://127.0.0.1:5501/")
    public List<Hospital> listHospitals(@RequestParam String name) {
        return this.hospitalService.findAllByNameLike(name);
    }

}
