package com.example.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;


@WebServlet("/submitFeedback")
public class FeedbackServlet extends HttpServlet{
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();

        String name = req.getParameter("studentName");
        String email = req.getParameter("email");
        String course = req.getParameter("course");
        String feedback = req.getParameter("feedback");
        
        HttpSession session = req.getSession();
        if (session.getAttribute("feedbackSubmitted") != null) {
            out.println("<h3>You have already submitted feedback!</h3>");
            return;
        } else {
            session.setAttribute("feedbackSubmitted", true);
        }

        resp.getWriter().println("<h2>Thank You for Your Feedback!</h2>");
        resp.getWriter().println("<p>Name: " + name + "</p>");
        resp.getWriter().println("<p>Email: " + email + "</p>");
        resp.getWriter().println("<p>Course:" + course + "</p>");
        resp.getWriter().println("<p>Feedback:" + feedback + "</p>");
	}

}
