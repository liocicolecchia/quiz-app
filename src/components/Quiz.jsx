import { useState } from "react";

import QUESTIONS from "../questions";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  return <h2>{QUESTIONS[activeQuestionIndex].text}</h2>;
}

export default Quiz;
