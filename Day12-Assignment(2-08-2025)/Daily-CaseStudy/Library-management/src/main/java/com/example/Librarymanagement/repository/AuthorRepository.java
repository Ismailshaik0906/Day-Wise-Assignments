package com.example.Librarymanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Librarymanagement.entity.Author;

public interface AuthorRepository extends JpaRepository<Author, Long>{

}
