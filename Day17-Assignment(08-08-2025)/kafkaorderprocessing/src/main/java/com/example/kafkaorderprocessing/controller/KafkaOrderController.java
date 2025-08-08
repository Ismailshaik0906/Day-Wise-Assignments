package com.example.kafkaorderprocessing.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.kafkaorderprocessing.entity.Order;
import com.example.kafkaorderprocessing.service.ProducerService;

@RestController
@RequestMapping("/api/orders")
public class KafkaOrderController {
	
	@Autowired
    private ProducerService producer;
	
	 @PostMapping
	    public String publishOrder(@RequestBody Order order) {
	        
	        String message = "OrderID: " + order.getOrderId() +
	                         ", Customer: " + order.getCustomerName() +
	                         ", Product: " + order.getProductName() +
	                         ", Quantity: " + order.getQuantity() +
	                         ", Price: " + order.getPrice() +
	                         ", Date: " + order.getOrderDate();

	        producer.sendMsgToTopic(message);
	        return "Order sent successfully: " + message;
	    }
}
