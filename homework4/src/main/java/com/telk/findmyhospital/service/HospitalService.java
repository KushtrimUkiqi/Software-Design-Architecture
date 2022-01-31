package com.telk.findmyhospital.service;

import com.telk.findmyhospital.models.Hospital;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface HospitalService {
    List<Hospital> findAllByNameLike(String text);
    List<Hospital> findAll();
    Hospital getById(Long aLong);
    <S extends Hospital> S save(S entity);
    void deleteById(Long aLong);
    float distance(float lat1,float lon1,float lat2,float lon2);

}
