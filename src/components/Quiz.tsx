import { useState, useCallback } from "react";
import QUESTIONS from "../questions.ts";
import QuestionTimer from "./QuestionTimer.tsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const activeQuestionIndex = userAnswers.length;

  function selectAnswerHandler(selectedAnswer: string | null) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer || ""];
    });
  }

  const skipAnswerHandler = useCallback(
    () => selectAnswerHandler(null),
    [selectAnswerHandler]
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={skipAnswerHandler} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => selectAnswerHandler(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
