import React, { useState } from "react";
import CourseCard from "./CourseCard";
import EnrolledCourses from "./EnrolledCourses";

const CourseList = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courses = [
    { id: 1, title: "React Basics", author: "John Doe", duration: "3h" },
    { id: 2, title: "JavaScript Advanced", author: "Anna Smith", duration: "5h" },
    { id: 3, title: "Python for Data Science", author: "Peter Parker", duration: "6h" },
  ];

  const enrollCourse = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, { ...course, progress: 0 }]);
    }
  };

  const updateProgress = (id, progress) => {
    setEnrolledCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, progress } : c))
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      <div>
        <h2>Available Courses</h2>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            isEnrolled={enrolledCourses.some((c) => c.id === course.id)}
            enrollCourse={enrollCourse}
          />
        ))}
      </div>
      <EnrolledCourses courses={enrolledCourses} updateProgress={updateProgress} />
    </div>
  );
};

export default CourseList;
