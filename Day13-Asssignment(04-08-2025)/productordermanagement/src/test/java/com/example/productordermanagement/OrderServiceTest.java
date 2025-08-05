package com.example.productordermanagement;




import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;

import java.time.LocalDate;
import java.util.*;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.mockito.junit.jupiter.MockitoExtension;

import com.example.productordermanagement.entity.Order;
import com.example.productordermanagement.entity.Product;
import com.example.productordermanagement.repository.OrderRepository;
import com.example.productordermanagement.repository.ProductRepository;
import com.example.productordermanagement.service.OrderService;

@ExtendWith(MockitoExtension.class)
public class OrderServiceTest {

    @Mock
    private OrderRepository orderRepo;

    @Mock
    private ProductRepository productRepo;

    @InjectMocks
    private OrderService orderService;

    @Test
    void testPlaceOrderSuccess() {
        Product product = new Product(1L, "TV", 45000.0, 10);
        when(productRepo.findById(1L)).thenReturn(Optional.of(product));
        when(orderRepo.save(any(Order.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Order order = orderService.placeOrder(1L, 3);

        assertThat(order.getQuantityOrdered()).isEqualTo(3);
        assertThat(order.getProduct()).isEqualTo(product);
        assertThat(product.getAvailableQuantity()).isEqualTo(7);
    }

    @Test
    void testPlaceOrderFails_InsufficientStock() {
        Product product = new Product(2L, "Printer", 12000.0, 2);
        when(productRepo.findById(2L)).thenReturn(Optional.of(product));

        assertThatThrownBy(() -> orderService.placeOrder(2L, 5))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Not enough stock");
    }

    @Test
    void testGetAllOrders() {
        Product product = new Product(1L, "Monitor", 15000.0, 4);
        Order order = new Order(1L, product, LocalDate.now(), 2);

        when(orderRepo.findAll()).thenReturn(List.of(order));

        List<Order> orders = orderService.getAllOrders();

        assertThat(orders).hasSize(1);
        assertThat(orders.get(0).getQuantityOrdered()).isEqualTo(2);
    }
}
