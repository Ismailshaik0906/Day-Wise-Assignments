import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", role: "user" },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "At least 3 characters").required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        // check if email exists
        const existing = await axios.get(`http://localhost:5001/users?email=${values.email}`);
        if (existing.data.length > 0) {
          setErrors({ email: "Email already registered" });
          return;
        }

        // save user (with role chosen)
        await axios.post("http://localhost:5001/users", values);

        alert("Registration successful! Please login.");
        resetForm();
        navigate("/login");
      } catch (err) {
        console.error(err);
        alert("Something went wrong, try again later.");
      }
    },
  });

  return (
    <div className="container mt-4">
      <h3>Register</h3>
      <form onSubmit={formik.handleSubmit} className="card p-3 shadow-sm">

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : ""}`}
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="invalid-feedback">{formik.errors.name}</div>
          )}
        </div>

   
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="invalid-feedback">{formik.errors.email}</div>
          )}
        </div>

        
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="invalid-feedback">{formik.errors.password}</div>
          )}
        </div>

     
        <div className="mb-3">
          <label>Role</label>
          <select className="form-control" {...formik.getFieldProps("role")}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success w-100" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
