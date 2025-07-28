<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Student Feedback</title>
</head>
<body>
	<h2>Course Feedback Form</h2>
    <form action="submitFeedback" method="post">
        
        Name: <input type="text" name="studentName"><br><br>

        
        Email: <input type="email" name="email" ><br><br>

        Course Attended: <input type="text" name="course" ><br><br>

        Feedback: <textarea name="feedback" ></textarea><br><br>

        <input type="submit" value="Submit Feedback">
    </form>
</body>
</html>