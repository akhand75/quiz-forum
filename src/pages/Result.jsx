import React from "react";
import ResultDashboard from "../components/ResultDashboard";

export default function Result() {
  const result = {
    total: 25,
    attempted: 20,
    score: 15,
  };

  return <ResultDashboard result={result} />;
}
