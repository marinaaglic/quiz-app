import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { QuestionProps } from "../types/questionProps";
import { useState } from "react";
import QUESTIONS from "../questions";

export default function Question({
  index,
  onSelectedAnswer,
  onSkipAnswer,
}: QuestionProps) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null as boolean | null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function selectAnswerHandler(answer: string) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer((prevAnswer) => ({
        selectedAnswer: prevAnswer.selectedAnswer,
        isCorrect: QUESTIONS[index]?.answers[0] === prevAnswer.selectedAnswer,
      }));
      setTimeout(() => {
        onSelectedAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index]?.text}</h2>
      <Answers
        answers={QUESTIONS[index]?.answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={selectAnswerHandler}
      />
    </div>
  );
}
