package com.telk.findmyhospital.repository;

import com.telk.findmyhospital.models.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital,Long> {
    List<Hospital> findAllByNameLike(String text);

}
