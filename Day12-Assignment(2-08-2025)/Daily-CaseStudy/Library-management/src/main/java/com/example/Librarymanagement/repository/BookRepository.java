package com.example.Librarymanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Librarymanagement.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
