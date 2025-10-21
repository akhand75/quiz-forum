import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

export default function Dashboard() {
  // Sample Data
  const result = {
    total: 25,
    attempted: 20,
    score: 15,
  };

  const topicData = [
    { topic: "Fluid Mechanics", accuracy: 80 },
    { topic: "Thermodynamics", accuracy: 60 },
    { topic: "Strength of Materials", accuracy: 70 },
    { topic: "Communication Systems", accuracy: 90 },
  ];

  const trendData = [
    { attempt: 1, score: 12 },
    { attempt: 2, score: 15 },
    { attempt: 3, score: 18 },
    { attempt: 4, score: 20 },
  ];

  const pieData = [
    { name: "Correct", value: result.score },
    { name: "Incorrect", value: result.attempted - result.score },
    { name: "Unattempted", value: result.total - result.attempted },
  ];

  const COLORS = ["#4CAF50", "#F44336", "#9E9E9E"];
  const accuracy = ((result.score / result.attempted) * 100 || 0).toFixed(2);

  return (
    <div className="animate__animated animate__fadeIn">
      <h2 className="text-light mb-4">Dashboard</h2>

      {/* Quick Stats */}
      <Row className="mb-4">
        {[
          { label: "Total Questions", value: result.total, color: "#3B82F6" },
          { label: "Attempted", value: result.attempted, color: "#0EA5E9" },
          { label: "Correct", value: result.score, color: "#10B981" },
          { label: "Accuracy", value: `${accuracy}%`, color: "#FACC15" },
        ].map((stat, idx) => (
          <Col md={3} key={idx} className="mb-3">
            <Card
              className="text-center shadow-lg"
              style={{
                borderRadius: "15px",
                background: `linear-gradient(135deg,#0A1931,${stat.color})`,
                color: "#fff",
              }}
            >
              <Card.Body>
                <h5>{stat.label}</h5>
                <h3 className="fw-bold">{stat.value}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        {/* Pie Chart */}
        <Col md={6} className="mb-4">
          <Card
            className="shadow-lg p-3"
            style={{
              borderRadius: "15px",
              background: "linear-gradient(135deg,#0A1931,#1E3A8A)",
              color: "#fff",
            }}
          >
            <Card.Body>
              <h5 className="text-center mb-3">Overall Performance</h5>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {pieData.map((entry, index) => (
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
            </Card.Body>
          </Card>
        </Col>

        {/* Bar Chart */}
        <Col md={6} className="mb-4">
          <Card
            className="shadow-lg p-3"
            style={{
              borderRadius: "15px",
              background: "linear-gradient(135deg,#0A1931,#1E3A8A)",
              color: "#fff",
            }}
          >
            <Card.Body>
              <h5 className="text-center mb-3">Topic-wise Accuracy</h5>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={topicData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="topic" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      color: "#fff",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="accuracy" fill="#3B82F6" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Line Chart for Score Trend */}
      <Row>
        <Col>
          <Card
            className="shadow-lg p-3 mb-4"
            style={{
              borderRadius: "15px",
              background: "linear-gradient(135deg,#0A1931,#1E3A8A)",
              color: "#fff",
            }}
          >
            <Card.Body>
              <h5 className="text-center mb-3">Score Trend Over Attempts</h5>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="attempt" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      color: "#fff",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
