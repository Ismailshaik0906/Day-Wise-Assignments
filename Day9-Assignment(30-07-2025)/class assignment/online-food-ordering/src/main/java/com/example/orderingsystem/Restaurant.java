package com.example.orderingsystem;

import java.util.List;

public class Restaurant {
    private String name;
    private String location;
    private String cuisine;

    public Restaurant(String name, String location,String cuisine) {
        this.name = name;
        this.cuisine = cuisine;
    }

    public boolean servesCuisine(String customerCuisine) {
        return cuisine.equalsIgnoreCase(customerCuisine);
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public String getCuisine() {
        return cuisine;
    }
}