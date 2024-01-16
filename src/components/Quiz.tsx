import { useState, useCallback } from "react";
import QUESTIONS from "../questions.ts";
import Question from "./Question.tsx";
import Summary from "./Summary.tsx";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const selectAnswerHandler = useCallback(function selectAnswerHandler(
    selectedAnswer: string | null
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer || ""];
    });
  },
  []);

  const skipAnswerHandler = useCallback(
    () => selectAnswerHandler(null),
    [selectAnswerHandler]
  );

  return (
    <div id="quiz">
      {quizIsComplete ? (
        <Summary userAnswers={userAnswers} />
      ) : (
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectedAnswer={selectAnswerHandler}
          onSkipAnswer={skipAnswerHandler}
        />
      )}
    </div>
  );
}

export default Quiz;
