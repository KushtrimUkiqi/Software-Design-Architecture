package com.telk.findmyhospital.service;

import com.telk.findmyhospital.models.Hospital;
import com.telk.findmyhospital.models.Rating;

import java.util.List;

public interface RatingService {

    List<Rating> findAllByHospital(Hospital hospital);
    public Double findAllRatingForHospital(Hospital hospital);
    <S extends Rating> S save(S entity);
    void deleteById(Long aLong);
    Rating getById(Long aLong);
}
