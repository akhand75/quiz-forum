import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Quiz", path: "/quiz" },
    { name: "Results", path: "/result" },
  ];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white sidebar"
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "linear-gradient(180deg,#0A1931,#1E3A8A)",
      }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4 fw-bold">GATEFORUM</span>
      </a>
      <hr />
      <Nav className="flex-column">
        {links.map((link, idx) => (
          <Nav.Item key={idx} className="mb-2">
            <Link
              to={link.path}
              className={`nav-link text-white ${
                location.pathname === link.path ? "active-link" : ""
              }`}
            >
              {link.name}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}
