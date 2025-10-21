import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ResultDashboard({ result }) {
  const data = [
    { name: "Correct", value: result.score },
    { name: "Incorrect", value: result.attempted - result.score },
    { name: "Unattempted", value: result.total - result.attempted },
  ];

  const COLORS = ["#4CAF50", "#F44336", "#9E9E9E"];
  const accuracy = ((result.score / result.attempted) * 100 || 0).toFixed(2);
  const performance =
    accuracy >= 80 ? "Excellent" : accuracy >= 60 ? "Good" : "Needs Improvement";

  return (
    <div
      className="animate__animated animate__fadeInUp p-4"
      style={{
        background: "linear-gradient(135deg, #0A1931, #1E3A8A)",
        borderRadius: "20px",
        color: "#fff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      }}
    >
      <Card className="border-0 bg-transparent text-light" style={{ backdropFilter: "blur(10px)" }}>
        <Card.Body>
          <div className="text-center mb-4">
            <h3 className="fw-bold text-info">GATE Performance Summary</h3>
            <p className="text-light-50">Your detailed analytics overview</p>
          </div>

          <div className="row align-items-center">
            {/* Pie Chart */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      color: "#fff",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Stats */}
            <div className="col-md-6">
              <div
                className="p-3 rounded-3"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <ul className="list-unstyled mb-3">
                  <li className="d-flex justify-content-between mb-2">
                    <span>Total Questions</span>
                    <strong>{result.total}</strong>
                  </li>
                  <li className="d-flex justify-content-between mb-2">
                    <span>Attempted</span>
                    <strong>{result.attempted}</strong>
                  </li>
                  <li className="d-flex justify-content-between mb-2 text-success">
                    <span>Correct</span>
                    <strong>{result.score}</strong>
                  </li>
                  <li className="d-flex justify-content-between mb-2 text-danger">
                    <span>Incorrect</span>
                    <strong>{result.attempted - result.score}</strong>
                  </li>
                  <li className="d-flex justify-content-between text-secondary">
                    <span>Unattempted</span>
                    <strong>{result.total - result.attempted}</strong>
                  </li>
                </ul>

                <div>
                  <h6 className="fw-semibold mb-2">Accuracy</h6>
                  <ProgressBar
                    now={accuracy}
                    label={`${accuracy}%`}
                    variant={
                      accuracy >= 80
                        ? "success"
                        : accuracy >= 60
                        ? "info"
                        : "warning"
                    }
                    style={{ height: "1.2rem" }}
                    className="mb-3"
                  />

                  <p
                    className={`fw-bold text-center ${
                      accuracy >= 80
                        ? "text-success"
                        : accuracy >= 60
                        ? "text-info"
                        : "text-warning"
                    }`}
                    style={{ fontSize: "1.1rem" }}
                  >
                    {performance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
