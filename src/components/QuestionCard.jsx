import React from "react";
import { Card, Button } from "react-bootstrap";

export default function QuestionCard({ question, options, selectedAnswer, onSelect, onNext, onPrev }) {
  return (
    <Card
      className="shadow-lg p-4 mb-3 animate__animated animate__fadeIn"
      style={{
        borderRadius: "15px",
        background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
        color: "#fff",
      }}
    >
      <Card.Body>
        <h5 className="mb-4">{question}</h5>

        <div className="d-flex flex-column gap-3">
          {options.map((option, idx) => (
            <Button
              key={idx}
              variant={selectedAnswer === option ? "success" : "outline-light"}
              onClick={() => onSelect(option)}
              className="text-start fw-semibold"
              style={{ borderRadius: "10px", transition: "0.2s" }}
            >
              {option}
            </Button>
          ))}
        </div>

        <div className="d-flex justify-content-between mt-4">
          <Button variant="secondary" onClick={onPrev} style={{ borderRadius: "10px" }}>
            Previous
          </Button>
          <Button variant="primary" onClick={onNext} style={{ borderRadius: "10px" }}>
            Next
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
