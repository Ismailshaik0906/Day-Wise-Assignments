package com.example.spring_product_demo;

public class Product {
	private String name;
	private String description;
	public void setName(String name) {
		this.name = name;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public void printMessage() {
		System.out.println("name"+name);
		System.out.println(description);
	}
	
}
