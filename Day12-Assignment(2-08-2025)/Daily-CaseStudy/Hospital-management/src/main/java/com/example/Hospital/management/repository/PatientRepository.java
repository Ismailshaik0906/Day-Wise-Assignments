package com.example.Hospital.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Hospital.management.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long>{

}
