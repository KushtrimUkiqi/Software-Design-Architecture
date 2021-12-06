package com.telk.findmyhospital.service;

import com.telk.findmyhospital.models.Hospital;

import java.util.List;

public interface HospitalService {
    List<Hospital> findAllByNameLike(String text);
}
