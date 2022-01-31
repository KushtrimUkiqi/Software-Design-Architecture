package com.telk.findmyhospital.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/privacyPolicy")
public class PrivacyPolicyController {

    @GetMapping
    public String getPrivacyPolicySite()
    {
        return "PrivacyPolicy";
    }
}
