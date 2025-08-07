package com.example.order_service.feign;


import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;

import org.springframework.web.bind.annotation.*;




@FeignClient(name = "product-service")
public interface ProductClient {

    @GetMapping("/products/{id}")
    Map<String, Object> getProductById(@PathVariable("id") String id);

    @PutMapping("/products/{id}/reduceStock")
    void reduceStock(@PathVariable("id") String id, @RequestParam("qty") int qty);
}