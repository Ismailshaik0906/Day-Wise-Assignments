package com.example.zipkinpayment_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.zipkinpayment_service.model.Order;

@RestController
@RequestMapping("/payments")
public class PaymentController {
	
	@GetMapping
	public String paymentHome() {
		return "Payment Service is running!";
	}

	@PostMapping
	public String processPayment(@RequestBody Order order) {
	    System.out.println("Processing payment for: " + order.getProductName() +
	                       ", Price: " + order.getPrice());

	    return "SUCCESS";
	}

}