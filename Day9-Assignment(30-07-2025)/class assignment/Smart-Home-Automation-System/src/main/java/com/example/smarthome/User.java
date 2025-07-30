package com.example.smarthome;

import org.springframework.stereotype.Component;

@Component
public class User {
    private String name = "john";
    private String homeId = "HOME123";

    public String getName() {
        return name;
    }

    public String getHomeId() {
        return homeId;
    }
}