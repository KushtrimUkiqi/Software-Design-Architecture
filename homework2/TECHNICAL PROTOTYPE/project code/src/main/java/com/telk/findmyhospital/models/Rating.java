package com.telk.findmyhospital.models;

import lombok.Data;
import org.hibernate.annotations.Check;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int stars;

    @Column(length = 511)
    private String comment;

    @ManyToOne
    private Hospital hospital;

    private LocalDateTime dateCreated;

    public Rating( Hospital hospital,int stars, String comment) {
        this.stars = stars;
        this.comment = comment;
        this.hospital = hospital;
        this.dateCreated = LocalDateTime.now();
    }

    public Rating() {

    }
}
