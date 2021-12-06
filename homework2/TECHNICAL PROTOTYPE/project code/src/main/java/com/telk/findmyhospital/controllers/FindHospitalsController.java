package com.telk.findmyhospital.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FindHospitalsController {

    @RequestMapping("/hospitals")
    public String getHome()
    {
        return "NearestHospitals";
    }

}
