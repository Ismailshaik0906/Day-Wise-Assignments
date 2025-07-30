package com.example.smarthome;

import org.springframework.stereotype.Component;

@Component
public class Device {
    private String type = "Light";
    private boolean status = false;

    public void turnOn() {
        status = true;
        System.out.println(type + " is ON");
    }

    public void turnOff() {
        status = false;
        System.out.println(type + " is OFF");
    }


}
