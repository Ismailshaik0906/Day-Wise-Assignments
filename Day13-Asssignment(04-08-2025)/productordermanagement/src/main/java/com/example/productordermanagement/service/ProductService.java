package com.example.productordermanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.productordermanagement.entity.Product;
import com.example.productordermanagement.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;

    // Add a new product to the database
    public Product addProduct(Product product) {
        return productRepo.save(product);
    }

    // Get all products from the database
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    // Update stock of a product by its ID
    public void updateStock(Long productId, int newQuantity) {
        Product product = productRepo.findById(productId).orElse(null);

        if (product != null) {
            product.setAvailableQuantity(newQuantity);
            productRepo.save(product); // Save updated product
        } else {
            throw new RuntimeException("Product not found with ID: " + productId);
        }
    }
}