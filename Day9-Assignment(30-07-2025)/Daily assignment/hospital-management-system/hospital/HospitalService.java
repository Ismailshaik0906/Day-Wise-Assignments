package com.example.hospital;

public class HospitalService {
    private Patient patient;
    private Appointment appointment;
    private Billing billing;

    // Setters for dependency injection
    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public void setAppointment(Appointment appointment) {
        this.appointment = appointment;
    }

    public void setBilling(Billing billing) {
        this.billing = billing;
    }

    public void process() {
        patient.registerPatient();
        appointment.bookAppointment();
        billing.generateBill();
        billing.sendBill();
    }
}
