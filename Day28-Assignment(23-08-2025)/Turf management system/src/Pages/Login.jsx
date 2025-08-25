import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // check user in db.json
        const res = await axios.get(
          `http://localhost:5001/users?email=${values.email}&password=${values.password}`
        );

        if (res.data.length > 0) {
          const user = res.data[0];

          // save user to localStorage
          localStorage.setItem("user", JSON.stringify(user));

          alert("Login Successful!");

          // redirect based on role
          if (user.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/user");
          }
        } else {
          alert("Invalid credentials!");
        }

        resetForm();
      } catch (err) {
        console.error(err);
        alert("Something went wrong, try again later.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="container mt-4">
      <h3>Login</h3>
      <form onSubmit={formik.handleSubmit} className="card p-3 shadow-sm">
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

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
