package com.telk.findmyhospital.service.impl;

import com.telk.findmyhospital.models.Hospital;
import com.telk.findmyhospital.repository.HospitalRepository;
import com.telk.findmyhospital.service.HospitalService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HospitalServiceImpl implements HospitalService {

    private final HospitalRepository hospitalRepository;

    public HospitalServiceImpl(HospitalRepository hospitalRepository) {
        this.hospitalRepository = hospitalRepository;
    }

    @Override
    public List<Hospital> findAllByNameLike(String text) {
        List<Hospital> list = hospitalRepository.findAllByNameLike(text+"%");
        if(list.isEmpty())
       return hospitalRepository.findAllByNameLike("%"+text+"%");
        return list;
    }
}
