package com.example.Hospital.management.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Hospital.management.entity.MedicalRecord;

public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long>{
	
}
