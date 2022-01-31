package com.telk.findmyhospital.web.controllers;

import com.telk.findmyhospital.models.Hospital;
import com.telk.findmyhospital.models.Rating;
import com.telk.findmyhospital.service.HospitalService;
import com.telk.findmyhospital.service.RatingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rate")
public class RatingController {
    private final RatingService ratingService;
    private final HospitalService hospitalService;

    public RatingController(RatingService ratingService, HospitalService hospitalService) {
        this.ratingService = ratingService;
        this.hospitalService = hospitalService;
    }

    @GetMapping
    public void rate(@RequestParam int stars, @RequestParam long hospitalId , @RequestParam String comment)
    {
        Hospital hospital = hospitalService.getById(hospitalId);

        if(hospital==null)
            return;

        if(ratingService.save(new Rating(hospital,stars,comment))!=null)
            System.out.println("Successful");
    }


}
