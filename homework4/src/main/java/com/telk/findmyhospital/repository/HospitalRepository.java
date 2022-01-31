package com.telk.findmyhospital.repository;

import com.telk.findmyhospital.models.Hospital;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital,Long> {

    List<Hospital> findAllByNameLike(String text);
    List<Hospital> findAll();
    Hospital getById(Long aLong);
    <S extends Hospital> S save(S entity);
    void deleteById(Long aLong);
}
