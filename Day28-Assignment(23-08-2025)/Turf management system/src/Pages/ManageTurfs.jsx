import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import { useFormik } from "formik";
import * as Yup from "yup";

const ManageTurfs = () => {
  const [turfs, setTurfs] = useState([]);
  const [editingTurf, setEditingTurf] = useState(null);

  const fetchTurfs = async () => {
    const res = await axios.get("http://localhost:5001/turfs");
    setTurfs(res.data);
  };

  useEffect(() => {
    fetchTurfs();
  }, []);

  const formik = useFormik({
    initialValues: { title: "", location: "", price: "",description:"" },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      location: Yup.string().required("Location is required"),
      price: Yup.number().positive("Must be positive").required("Price is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (editingTurf) {
        await axios.put(`http://localhost:5001/turfs/${editingTurf.id}`, values);
        setEditingTurf(null);
      } else {
        await axios.post("http://localhost:5001/turfs", values);
      }
 
      fetchTurfs();
    },
  });

  const handleEdit = (turf) => {
    setEditingTurf(turf);
    formik.setValues(turf);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5001/turfs/${id}`);
    fetchTurfs();
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container mt-4">
        <h3>Manage Turfs</h3>

        {/* Turf Form */}
        <form onSubmit={formik.handleSubmit} className="card p-3 mb-4">
          <div className="mb-3">
            <label>Title</label>
            <input
              type="text"
              className={`form-control ${formik.touched.title && formik.errors.title ? "is-invalid" : ""}`}
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="invalid-feedback">{formik.errors.title}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className={`form-control ${formik.touched.location && formik.errors.location ? "is-invalid" : ""}`}
              {...formik.getFieldProps("location")}
            />
            {formik.touched.location && formik.errors.location && (
              <div className="invalid-feedback">{formik.errors.location}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Price</label>
            <input
              type="number"
              className={`form-control ${formik.touched.price && formik.errors.price ? "is-invalid" : ""}`}
              {...formik.getFieldProps("price")}
            />
            {formik.touched.price && formik.errors.price && (
              <div className="invalid-feedback">{formik.errors.price}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Description</label>
            <input
              type="text"
              className={`form-control ${formik.touched.description && formik.errors.description ? "is-invalid" : ""}`}
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="invalid-feedback">{formik.errors.description}</div>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100">
            {editingTurf ? "Update Turf" : "Add Turf"}
          </button>
        </form>

        {/* Turf List */}
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {turfs.map((turf) => (
              <tr key={turf.id}>
                <td>{turf.title}</td>
                <td>{turf.location}</td>
                <td>${turf.price}</td>
                <td>
                  <button
                    onClick={() => handleEdit(turf)}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(turf.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTurfs;
