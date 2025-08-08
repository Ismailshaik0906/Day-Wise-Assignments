package com.example.kafkaorderprocessing.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class ConsumerService {
	 @KafkaListener(topics = "order-topic", groupId = "order-group")
	    public void consumeMessage(String message) {
	        System.out.println("Message received from Kafka: " + message);
	    }
}
