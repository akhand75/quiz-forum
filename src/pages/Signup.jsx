import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [branch, setBranch] = useState("CSE");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, branch })
    );
    navigate("/"); // ✅ Works now
  };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0A1931,#1E3A8A)" }}
        >
            <Card className="p-4 shadow-lg animate__animated animate__fadeIn" style={{ width: "450px", borderRadius: "15px" }}>
                <h3 className="text-center mb-4 text-light">Signup</h3>
                <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label className="text-light">Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ borderRadius: "10px" }}
                        />
                    </Form.Group>

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

                    <Form.Group className="mb-3" controlId="formBranch">
                        <Form.Label className="text-light">Branch</Form.Label>
                        <Form.Select value={branch} onChange={(e) => setBranch(e.target.value)} style={{ borderRadius: "10px" }}>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="ME">ME</option>
                            <option value="CE">CE</option>
                            <option value="CH">CH</option>
                        </Form.Select>
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

                    <Button type="submit" className="w-100 mb-3" style={{ borderRadius: "10px", backgroundColor: "#3B82F6", border: "none" }}>
                        Signup
                    </Button>

                    <div className="text-center text-light">
                        Already have an account? <Link to="/login" className="text-warning">Login</Link>
                    </div>
                </Form>
            </Card>
        </div>
    );
}
