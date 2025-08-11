package com.example.zipkinorder_service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.zipkinorder_service.model.Order;

@RestController
@RequestMapping("/orders")
public class OrderController {
	
	 @Autowired
	    private RestTemplate restTemplate;

	    @GetMapping
	    public List<Order> getOrders() {
	        return List.of(
	            new Order(1L, "Laptop", 70000.00),
	            new Order(2L, "Tablet", 4000.00)
	        );
	    }

	 
	    @PostMapping
	    public String placeOrder(@RequestBody Order order) {

	        String paymentResponse = restTemplate.postForObject(
	            "http://localhost:8081/payments",
	            order,
	            String.class
	        );

	        return "Order placed for: " + order.getProductName() +
	               ", Price: " + order.getPrice() +
	               " | Payment Status: " + paymentResponse;
	    }


} 
