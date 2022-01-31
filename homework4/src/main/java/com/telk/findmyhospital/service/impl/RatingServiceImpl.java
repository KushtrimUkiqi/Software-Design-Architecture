package com.telk.findmyhospital.service.impl;

import com.telk.findmyhospital.models.Hospital;
import com.telk.findmyhospital.models.Rating;
import com.telk.findmyhospital.repository.RatingRepository;
import com.telk.findmyhospital.service.RatingService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingServiceImpl implements RatingService {

    private final RatingRepository ratingRepository;

    public RatingServiceImpl(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    @Override
    public List<Rating> findAllByHospital(Hospital hospital) {
        return ratingRepository.findAllByHospital(hospital);
    }

    public Double findAllRatingForHospital(Hospital hospital)
    {
        List<Rating> ratings = findAllByHospital(hospital);
//        if(ratings.size() == 0)
//            return (double) 0;
        return ratings.stream().map(Rating::getStars).reduce(0, Integer::sum).doubleValue() / ratings.size();
    }

    @Override
    public <S extends Rating> S save(S entity) {
        return ratingRepository.save(entity);
    }

    @Override
    public void deleteById(Long aLong) {
        ratingRepository.deleteById(aLong);
    }

    @Override
    public Rating getById(Long aLong) {
        return ratingRepository.getById(aLong);
    }
}
