package com.example.productordermanagement;





import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

import org.mockito.junit.jupiter.MockitoExtension;

import com.example.productordermanagement.entity.Product;
import com.example.productordermanagement.repository.ProductRepository;
import com.example.productordermanagement.service.ProductService;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {

    @Mock
    private ProductRepository productRepo;

    @InjectMocks
    private ProductService productService;

    @Test
    void testAddProduct() {
        Product product = new Product(1L, "Laptop", 50000.0, 10);
        when(productRepo.save(product)).thenReturn(product);

        Product result = productService.addProduct(product);

        assertThat(result).isEqualTo(product);
    }

    @Test
    void testGetAllProducts() {
        List<Product> products = Arrays.asList(
                new Product(1L, "Phone", 30000.0, 5),
                new Product(2L, "Tablet", 20000.0, 3)
        );
        when(productRepo.findAll()).thenReturn(products);

        List<Product> result = productService.getAllProducts();

        assertThat(result).hasSize(2);
        assertThat(result.get(0).getName()).isEqualTo("Phone");
    }

    @Test
    void testUpdateStock() {
        Product product = new Product(1L, "Camera", 25000.0, 8);
        when(productRepo.findById(1L)).thenReturn(Optional.of(product));

        productService.updateStock(1L, 5);

        verify(productRepo).save(product);
        assertThat(product.getAvailableQuantity()).isEqualTo(5);
    }
}
