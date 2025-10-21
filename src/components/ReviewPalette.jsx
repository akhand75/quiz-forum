import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ReviewPalette({ total, answers, marked, current, onJump }) {
  const getColor = (index) => {
    if (marked.includes(index)) return "#FFC107";
    if (answers[index]) return "#28a745";
    return "#6c757d";
  };

  return (
    <Card
      className="p-3 shadow-lg animate__animated animate__fadeIn"
      style={{
        borderRadius: "15px",
        background: "linear-gradient(135deg, #0A1931, #1E3A8A)",
        color: "#fff",
      }}
    >
      <Card.Body>
        <h5 className="text-center mb-3">Review Palette</h5>
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {Array.from({ length: total }).map((_, idx) => (
            <Button
              key={idx}
              onClick={() => onJump(idx)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: getColor(idx),
                color: "#fff",
                border: "none",
                fontWeight: current === idx ? "bold" : "500",
                transform: current === idx ? "scale(1.1)" : "scale(1)",
                transition: "0.2s",
              }}
            >
              {idx + 1}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
