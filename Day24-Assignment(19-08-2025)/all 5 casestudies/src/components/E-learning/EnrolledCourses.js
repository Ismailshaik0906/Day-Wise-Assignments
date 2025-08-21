import React from "react";

const EnrolledCourses = ({ courses, updateProgress }) => {
  return (
    <div style={{ border: "2px solid black", padding: "15px", width: "300px" }}>
      <h2>My Courses</h2>
      {courses.length === 0 ? (
        <p>No courses enrolled</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id} style={{ marginBottom: "10px" }}>
              <strong>{course.title}</strong> - {course.progress}%
              <br />
              <input
                type="range"
                min="0"
                max="100"
                value={course.progress}
                onChange={(e) => updateProgress(course.id, e.target.value)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EnrolledCourses;
