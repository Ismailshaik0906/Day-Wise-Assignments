package com.example.Main;

import com.example.service.OrderService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {
    public static void main(String[] args) {
    	AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        OrderService service = context.getBean(OrderService.class);

        System.out.println("Valid Order");
        service.placeOrder("ORD123");

        System.out.println("Invalid Order");
        try {
            service.placeOrder("INVALID");
        } catch (Exception e) {
            // Handled by @AfterThrowing
        }

        System.out.println("Add to Cart");
        service.addToCart("iPhone 15");

        System.out.println("Cancel Order");
        service.cancelOrder("ORD123");

        context.close();
    }
}
