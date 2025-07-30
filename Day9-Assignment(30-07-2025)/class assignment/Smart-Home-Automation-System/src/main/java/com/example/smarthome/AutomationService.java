package com.example.smarthome;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class AutomationService {

    @Autowired
    private User user;

    @Autowired
    private Device device;

    public void controlDevice() {
        System.out.println("User: " + user.getName() + ", Home ID: " + user.getHomeId());
        device.turnOn();
        device.turnOff();
    }
}