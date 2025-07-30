package com.example.orderingsystem;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class AppConfig {


    @Bean
    public Customer customer() {
        return new Customer("Charlie", "1234567890", "Italian");
    }

    @Bean
    public Restaurant restaurant1() {
        return new Restaurant("Pizza Palace","Mumbai","chinese");
    }

   

    @Bean
    public FoodOrderService foodOrderService() {
        return new FoodOrderService(customer(), restaurant1());
    }

}
