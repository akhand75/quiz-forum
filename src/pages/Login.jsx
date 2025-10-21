import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const username = "Student"; // Default username
  const branch = "CSE"; // Default branch
  const navigate = useNavigate(); // Navigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Store user info in localStorage (simulate authentication)
    localStorage.setItem(
      "user",
      JSON.stringify({ email, username, branch })
    );
    navigate("/"); // Redirect to Dashboard
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0A1931,#1E3A8A)" }}
    >
      <Card
        className="p-4 shadow-lg animate__animated animate__fadeIn"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-4 text-light">Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="text-light">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 mb-3"
            style={{ borderRadius: "10px", backgroundColor: "#3B82F6", border: "none" }}
          >
            Login
          </Button>

          <div className="text-center text-light">
            Don't have an account?{" "}
            <Link to="/signup" className="text-warning">
              Signup
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
}
