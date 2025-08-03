package com.example.Hospital.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Hospital.management.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}
