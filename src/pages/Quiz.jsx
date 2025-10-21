import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import ReviewPalette from "../components/ReviewPalette";
import sampleQuestions from "../data/sampleQuestions";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => {
      if (prev <= 1) {
        clearInterval(timer);
        navigate("/result", { state: { answers } }); // Auto submit when time runs out
        return 0;
      }
      return prev - 1;
    }), 1000);
    return () => clearInterval(timer);
  }, [answers, navigate]);

  const handleSelect = (option) => setAnswers({ ...answers, [currentIndex]: option });

  const handleNext = () => {
    if (currentIndex < sampleQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Redirect to result page after last question
      navigate("/result", { state: { answers } });
    }
  };

  const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  const toggleReview = () => {
    if (markedForReview.includes(currentIndex))
      setMarkedForReview(markedForReview.filter(i => i !== currentIndex));
    else setMarkedForReview([...markedForReview, currentIndex]);
  };

  const formattedTime = () => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="d-flex justify-content-between mb-3">
          <div className="fw-bold text-light fs-5">Timer: <span className="text-warning">{formattedTime()}</span></div>
          <div className="fw-bold text-light fs-5">Question: {currentIndex + 1}/{sampleQuestions.length}</div>
        </div>

        <QuestionCard
          question={sampleQuestions[currentIndex].question}
          options={sampleQuestions[currentIndex].options}
          selectedAnswer={answers[currentIndex]}
          onSelect={handleSelect}
          onNext={handleNext}
          onPrev={handlePrev}
        />

        <div className="mt-3">
          <button className="btn btn-warning me-3" onClick={toggleReview}>
            {markedForReview.includes(currentIndex) ? "Unmark Review" : "Mark for Review"}
          </button>
        </div>
      </div>

      <div className="col-md-4">
        <ReviewPalette
          total={sampleQuestions.length}
          answers={answers}
          marked={markedForReview}
          current={currentIndex}
          onJump={(i) => setCurrentIndex(i)}
        />
      </div>
    </div>
  );
}
