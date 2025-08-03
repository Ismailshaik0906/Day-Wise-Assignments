package com.example.Hospital.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Hospital.management.entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long>{

}
