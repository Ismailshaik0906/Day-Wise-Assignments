import React, { useState } from "react";

// 🔹 HOC 1: Authentication
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (!isLoggedIn) {
      return <h2>Please login to access Feedback Form</h2>;
    }
    return <WrappedComponent {...props} />;
  };
};

// 🔹 HOC 2: Validation
const withValidation = (WrappedComponent) => {
  return (props) => {
    const validate = (formData) => {
      let errors = {};
      if (!formData.comment || !formData.comment.trim()) {
        errors.comment = "Comment is required!";
      }
      if (!formData.choice || formData.choice.trim() === "") {
        errors.choice = "Please select Yes or No!";
      }
      return errors;
    };

    return <WrappedComponent {...props} />;
  };
};


// 🔹 HOC 3: Logger
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Logger HOC: Props Received", props);
    return <WrappedComponent {...props}/>;
  };
};


const FeedbackForm = ({ validate, log }) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      log("Validation error occurred!");
      return;
    }
    log(`Feedback submitted: ${form.choice} - ${form.comment}`);
    alert("Feedback submitted successfully!");
    setForm({ comment: "", choice: "" });
    setErrors({});
  };

  return (
    <div style={{ border: "1px solid gray", padding: "20px", width: "300px" }}>
      <h2>Employee Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comment: </label>
          <input
            type="text"
            name="comment"
            value={form.comment}
            onChange={handleChange}
          />
          {errors.comment && <p style={{ color: "red" }}>{errors.comment}</p>}
        </div>
        <div>
          <label>MileStone2 Completed? </label>
          <select name="choice" value={form.choice} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.choice && <p style={{ color: "red" }}>{errors.choice}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

//Enhancedhoc
const EnhancedFeedbackForm = withAuth(
  withValidation(withLogger(FeedbackForm))
);


const FeedbackFormHOC = () => {
  const [user] = useState({
    isLoggedIn: true, 
    userName: "Ravi",
  });

  return (
    <div>
      <EnhancedFeedbackForm
        isLoggedIn={user.isLoggedIn}
        userName={user.userName}
      />
    </div>
  );
};

export default FeedbackFormHOC;
