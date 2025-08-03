package com.example.Librarymanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Librarymanagement.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
