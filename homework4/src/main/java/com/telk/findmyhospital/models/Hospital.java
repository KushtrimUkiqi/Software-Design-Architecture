package com.telk.findmyhospital.models;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
public class Hospital implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;


    private String name;


    private String city;


    private String street;


    private int postcode;


    private float latitude;


    private float longitude;

//
//    @OneToMany(mappedBy = "hospital" , fetch = FetchType.EAGER)
//    private List<Rating> ratings;

        private Double rating;

    public Hospital(long id, String name, String city, String street, int postcode, float latitude, float longitude)
    {
        this.id = id;
        this.name = name;
        this.city = city;
        this.street = street;
        this.postcode = postcode;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Hospital()
    {}

    public String getAddress()
    {
        return String.format("%s   %d  , %s" ,this.getCity(),this.getPostcode(),this.getStreet());
    }


//    public String getTotalRating()
//    {
//        return String.format("%.2f",(double)this.getRatings().stream().map(Rating::getStars).reduce(0, Integer::sum) / ( (this.getRatings().size()==0?1:this.getRatings().size()) ) );
//    }




}
