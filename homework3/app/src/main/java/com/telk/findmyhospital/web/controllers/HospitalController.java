package com.telk.findmyhospital.web.controllers;

import com.telk.findmyhospital.models.Hospital;
import com.telk.findmyhospital.service.HospitalService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;


@Controller
public class HospitalController {
    final HospitalService hospitalService;

    public HospitalController(HospitalService hospitalService)
    {
        this.hospitalService = hospitalService;
    }

    @GetMapping("/hospital")
    @CrossOrigin( origins = "http://127.0.0.1:5501/")
    public String getHospitalById(@RequestParam Long id , HttpServletRequest request, Model model)
    {
        Hospital hospital  = hospitalService.getById(id);


        if(hospital != null)
        {
              request.getSession().setAttribute("hospital",hospital);
//            model.addAttribute("name", hospital.getName());
//            model.addAttribute("proximity", "XYZkm");
//            model.addAttribute("address", String.format("%s  , %d  , %s" ,hospital.getCity(),hospital.getPostcode(),hospital.getStreet()));
//            model.addAttribute("rating", (double)(hospital.getRatings().stream().map(Rating::getStars).reduce(0, Integer::sum))/(hospital.getRatings().size()==0?1:hospital.getRatings().size()));

        }

        return "Hospital";
    }

}
