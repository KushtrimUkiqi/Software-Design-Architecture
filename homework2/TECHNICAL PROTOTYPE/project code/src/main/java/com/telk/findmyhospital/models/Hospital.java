package com.telk.findmyhospital.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String city;

    private String street;

    private int postcode;

    private float latitude;

    private float longitude;


    public Hospital(long id, String name, String city, String street, int postcode, float latitude, float longitude) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.street = street;
        this.postcode = postcode;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Hospital() {
    }
}
