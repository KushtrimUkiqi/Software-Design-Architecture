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

    @Override
    public List<Hospital> findAll() {
        return this.hospitalRepository.findAll();
    }

    @Override
    public Hospital getById(Long id) {

        if(hospitalRepository.existsById(id))
            return hospitalRepository.getById(id);

        return null;

    }

    @Override
    public <S extends Hospital> S save(S entity) {
        return hospitalRepository.save(entity);
    }

    @Override
    public void deleteById(Long aLong) {
        hospitalRepository.deleteById(aLong);
    }


    public float distance(float lat1,float lon1,float lat2,float lon2)
    {
//        double radlat1 = Math.PI * lat1/180;
//        double radlat2 = Math.PI * lat2/180;
//        double radlon1 = Math.PI * lon1/180;
//        double radlon2 = Math.PI * lon2/180;
//        double theta = lon1-lon2;
//        double radtheta = Math.PI * theta/180;
//        double dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//        dist = Math.acos(dist);
//        dist = dist * 180/Math.PI;
//        dist = dist * 60 * 1.1515;
//        dist = dist/0.62137;
//        return dist;

            // The math module contains a function
            // named toRadians which converts from
            // degrees to radians.
            lon1 =(float) Math.toRadians(lon1);
            lon2 =(float) Math.toRadians(lon2);
            lat1 =(float) Math.toRadians(lat1);
            lat2 =(float) Math.toRadians(lat2);

            // Haversine formula
            float dlon = lon2 - lon1;
            float dlat = lat2 - lat1;
            float a = (float) (Math.pow(Math.sin(dlat / 2), 2)
                                + Math.cos(lat1) * Math.cos(lat2)
                                * Math.pow(Math.sin(dlon / 2),2));

            float c = (float) (2 * Math.asin(Math.sqrt(a)));

            // Radius of earth in kilometers. Use 3956
            // for miles
            float r = 6371;

            // calculate the result
            return  (c * r);

    }



}
