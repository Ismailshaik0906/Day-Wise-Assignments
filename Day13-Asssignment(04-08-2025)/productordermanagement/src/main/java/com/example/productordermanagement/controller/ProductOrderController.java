package com.example.productordermanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.productordermanagement.entity.Order;
import com.example.productordermanagement.entity.Product;
import com.example.productordermanagement.service.OrderService;
import com.example.productordermanagement.service.ProductService;

@RestController
@RequestMapping("/api")
public class ProductOrderController {

    @Autowired
    private ProductService productService;

    @Autowired
    private OrderService orderService;

    // -------------------- Product Endpoints --------------------

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PutMapping("/products/{id}/stock")
    public void updateProductStock(@PathVariable Long id, @RequestParam int qty) {
        productService.updateStock(id, qty);
    }

    // -------------------- Order Endpoints --------------------

    @PostMapping("/orders")
    public Order placeOrder(@RequestParam Long productId, @RequestParam int quantity) {
        return orderService.placeOrder(productId, quantity);
    }

    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders(); // You need to implement this in OrderService
    }
}