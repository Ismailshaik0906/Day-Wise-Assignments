package com.example.zipkinpayment_service.model;

public class Order {
	private Long id;
	private String productName;
	private double price;
	public Order(Long id, String productName, double price) {
		
		this.id = id;
		this.productName = productName;
		this.price = price;
	}
	public Long getId() {
		return id; 
	}
	public String getProductName() {
		return productName;
	}
	public double getPrice() {
		return price;
	}
	
	
}
