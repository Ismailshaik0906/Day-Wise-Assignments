package com.example.service;

import org.springframework.stereotype.Component;

@Component
public class OrderService {

    public void addToCart(String product) {
        System.out.println("Product added: " + product);
    }

    public void placeOrder(String orderId) {
        if ("INVALID".equals(orderId)) {
            throw new RuntimeException("Invalid Order ID!");
        }
        System.out.println("Order placed: " + orderId);
    }

    public void cancelOrder(String orderId) {
        System.out.println("Order cancelled: " + orderId);
    }
}
