import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap"; // Import Button
import { useNavigate } from "react-router-dom";

export default function QuizNavbar({ username, branch }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" className="px-4 shadow-sm">
      {/* <Navbar.Brand href="#">GATEFORUM Portal</Navbar.Brand> */}
      <Nav className="ms-auto">
        <Nav.Item className="text-white mx-3">👤 {username}</Nav.Item>
        <Nav.Item className="text-white mx-3">🎓 {branch}</Nav.Item>
        <Button variant="outline-light" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
    </Navbar>
  );
}
