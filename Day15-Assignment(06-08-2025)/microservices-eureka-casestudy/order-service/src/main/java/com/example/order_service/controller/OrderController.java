package com.example.order_service.controller;




import java.util.List;
import java.util.Map;


import org.springframework.web.bind.annotation.*;


import com.example.order_service.entity.Order;
import com.example.order_service.feign.ProductClient;
import com.example.order_service.repository.OrderRepository;


@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderRepository orderRepo;
    private final ProductClient productClient;

    public OrderController(OrderRepository orderRepo, ProductClient productClient) {
        this.orderRepo = orderRepo;
        this.productClient = productClient;
    }

    @PostMapping
    public Order placeOrder(@RequestBody Map<String, Object> request) {
        String productId = request.get("productId").toString();
        int qty = Integer.parseInt(request.get("quantity").toString());

        // Get product details from product-service
        Map<String, Object> product = productClient.getProductById(productId);
        double price = Double.parseDouble(product.get("price").toString());
        int stock = Integer.parseInt(product.get("stock").toString());

        if (stock < qty) {
            throw new RuntimeException("Insufficient stock");
        }

        double total = price * qty;
        Order order = new Order(productId, qty, total, "CONFIRMED");
        order = orderRepo.save(order);

        // Reduce stock in product-service
        productClient.reduceStock(productId, qty);

        return order;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
}