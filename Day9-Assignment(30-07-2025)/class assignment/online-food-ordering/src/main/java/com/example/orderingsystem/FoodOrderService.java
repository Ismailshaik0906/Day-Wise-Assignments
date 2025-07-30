package com.example.orderingsystem;

import java.util.List;

public class FoodOrderService {
	 private Customer customer;
	    private Restaurant restaurant1;
	    

	    public FoodOrderService(Customer customer, Restaurant r1) {
	        this.customer = customer;
	        this.restaurant1 = r1;
	       
	    }

	    public void placeOrder() {
	        String preferredCuisine = customer.getPreferredCuisine();
	        System.out.println("Looking for cuisine: " + preferredCuisine);

	        if (restaurant1.servesCuisine(preferredCuisine)) {
	            System.out.println("Order placed at " + restaurant1.getName());
	        } 
	        else {
	        	System.out.println("No preferedcusine");
	        }
	      
	    }
	}