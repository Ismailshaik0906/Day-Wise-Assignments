package com.example.productordermanagement.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.productordermanagement.entity.Order;
import com.example.productordermanagement.entity.Product;
import com.example.productordermanagement.repository.OrderRepository;
import com.example.productordermanagement.repository.ProductRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private ProductRepository productRepo;

    // Place a new order for a product
    public Order placeOrder(Long productId, int quantity) {
        // Step 1: Find the product by ID
        Product product = productRepo.findById(productId).orElse(null);

        if (product == null) {
            throw new RuntimeException("Product not found with ID: " + productId);
        }

        // Step 2: Check if there is enough stock
        if (product.getAvailableQuantity() < quantity) {
            throw new RuntimeException("Not enough stock available!");
        }

        // Step 3: Reduce the stock
        product.setAvailableQuantity(product.getAvailableQuantity() - quantity);
        productRepo.save(product);

        // Step 4: Create a new order and save it
        Order order = new Order();
        order.setProduct(product);
        order.setQuantityOrdered(quantity);
        order.setOrderDate(LocalDate.now());

        return orderRepo.save(order);
    }

    // Get all orders from the database
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
}
