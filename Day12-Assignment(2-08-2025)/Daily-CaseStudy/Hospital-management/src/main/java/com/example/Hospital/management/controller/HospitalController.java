package com.example.Hospital.management.controller;

import com.example.Hospital.management.entity.*;
import com.example.Hospital.management.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class HospitalController {

    @Autowired private PatientRepository patientRepo;
    @Autowired private DoctorRepository doctorRepo;
    @Autowired private AppointmentRepository appointmentRepo;
    @Autowired private MedicalRecordRepository medicalRecordRepo;

    @PostMapping("/patients")
    public Patient addPatient(@RequestBody Patient patient) {
        return patientRepo.save(patient);
    }

    @GetMapping("/patients")
    public List<Patient> getPatients() {
        return patientRepo.findAll();
    }

    @PostMapping("/doctors")
    public Doctor addDoctor(@RequestBody Doctor d) {
        return doctorRepo.save(d);
    }

    @GetMapping("/doctors")
    public List<Doctor> getDoctors() {
        return doctorRepo.findAll();
    }

    @PostMapping("/appointments")
    public Appointment bookAppointment(@RequestBody Appointment a) {
        return appointmentRepo.save(a);
    }

    @GetMapping("/appointments")
    public List<Appointment> getAppointments() {
        return appointmentRepo.findAll();
    }

    @PostMapping("/medical-records")
    public MedicalRecord addRecord(@RequestBody MedicalRecord r) {
        return medicalRecordRepo.save(r);
    }
    @DeleteMapping("/patients")
    public void deleteAllPatients() {
        patientRepo.deleteAll();
    }

}