package com.telk.findmyhospital.repository;

import com.telk.findmyhospital.models.Hospital;
import com.telk.findmyhospital.models.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {
    List<Rating> findAllByHospital(Hospital hospital);

    @Override
    <S extends Rating> S save(S entity);

    @Override
    void deleteById(Long aLong);

    @Override
    Rating getById(Long aLong);
}
