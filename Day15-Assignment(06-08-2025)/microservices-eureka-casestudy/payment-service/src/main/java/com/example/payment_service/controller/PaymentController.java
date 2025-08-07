package com.example.payment_service.controller;



import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.payment_service.entity.Payment;
import com.example.payment_service.repository.PaymentRepository;


@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentRepository paymentRepo;

    public PaymentController(PaymentRepository paymentRepo) {
        this.paymentRepo = paymentRepo;
    }

    @PostMapping
    public ResponseEntity<Payment> makePayment(@RequestBody Payment payment) {
        payment.setPaymentStatus("SUCCESS"); 
        Payment saved = paymentRepo.save(payment);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentRepo.findAll();
    }
}