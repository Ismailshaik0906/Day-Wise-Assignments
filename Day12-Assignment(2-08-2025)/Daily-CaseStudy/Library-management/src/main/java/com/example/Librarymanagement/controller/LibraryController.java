package com.example.Librarymanagement.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Librarymanagement.entity.*;
import com.example.Librarymanagement.repository.*;
@RestController
@RequestMapping("/api")
public class LibraryController {

    @Autowired
    private BookRepository bookRepo;

    @Autowired
    private AuthorRepository authorRepo;

    @Autowired
    private CategoryRepository categoryRepo;

    @Autowired
    private ReaderRepository readerRepo;

    // ------------------- BOOK -------------------

    @PostMapping("/books")
    public Book addBook(@RequestBody Book b) {
        return bookRepo.save(b);
    }

    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookRepo.findAll();
    }

    @GetMapping("/books/{id}")
    public Optional<Book> getBookById(@PathVariable long id) {
        return bookRepo.findById(id);
    }

    @PutMapping("/books/{id}")
    public Book updateBook(@PathVariable long id, @RequestBody Book b) {
        // b.setId(id);
        return bookRepo.save(b);
    }

    @DeleteMapping("/books/{id}")
    public void deleteBook(@PathVariable long id) {
        bookRepo.deleteById(id);
    }

    // ------------------- AUTHOR -------------------

    @PostMapping("/authors")
    public Author addAuthor(@RequestBody Author a) {
        return authorRepo.save(a);
    }

    @GetMapping("/authors")
    public List<Author> getAuthors() {
        return authorRepo.findAll();
    }

    @GetMapping("/authors/{id}")
    public Optional<Author> getAuthorById(@PathVariable long id) {
        return authorRepo.findById(id);
    }

    @PutMapping("/authors/{id}")
    public Author updateAuthor(@PathVariable long id, @RequestBody Author a) {
        // a.setId(id);
        return authorRepo.save(a);
    }

    @DeleteMapping("/authors/{id}")
    public void deleteAuthor(@PathVariable long id) {
        authorRepo.deleteById(id);
    }

    // ------------------- CATEGORY -------------------

    @PostMapping("/categories")
    public Category addCategory(@RequestBody Category c) {
        return categoryRepo.save(c);
    }

    @GetMapping("/categories")
    public List<Category> getCategories() {
        return categoryRepo.findAll();
    }

    @GetMapping("/categories/{id}")
    public Optional<Category> getCategoryById(@PathVariable long id) {
        return categoryRepo.findById(id);
    }

    @PutMapping("/categories/{id}")
    public Category updateCategory(@PathVariable long id, @RequestBody Category c) {
        // c.setId(id);
        return categoryRepo.save(c);
    }

    @DeleteMapping("/categories/{id}")
    public void deleteCategory(@PathVariable long id) {
        categoryRepo.deleteById(id);
    }

    // ------------------- READER -------------------

    @PostMapping("/readers")
    public Reader addReader(@RequestBody Reader r) {
        return readerRepo.save(r);
    }

    @GetMapping("/readers")
    public List<Reader> getReaders() {
        return readerRepo.findAll();
    }

    @GetMapping("/readers/{id}")
    public Optional<Reader> getReaderById(@PathVariable long id) {
        return readerRepo.findById(id);
    }

    @PutMapping("/readers/{id}")
    public Reader updateReader(@PathVariable long id, @RequestBody Reader r) {
        // r.setId(id);
        return readerRepo.save(r);
    }

    @DeleteMapping("/readers/{id}")
    public void deleteReader(@PathVariable long id) {
        readerRepo.deleteById(id);
    }
}
