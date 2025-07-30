package com.example.library;

import org.springframework.stereotype.Component;

@Component
public class Book {
    public void addBook() {
        System.out.println("Book added");
    }

    public void searchBook() {
        System.out.println("Searching for a book...");
    }
}
