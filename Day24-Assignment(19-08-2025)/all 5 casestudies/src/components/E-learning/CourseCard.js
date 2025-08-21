import React from "react";

const CourseCard = ({ course, isEnrolled, enrollCourse }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{course.title}</h3>
      <p>Author: {course.author}</p>
      <p>Duration: {course.duration}</p>
      <button onClick={() => enrollCourse(course)} disabled={isEnrolled}>
        {isEnrolled ? "Already Enrolled" : "Enroll"}
      </button>
    </div>
  );
};

export default CourseCard;
