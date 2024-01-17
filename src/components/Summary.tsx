import QuizComplete from "../assets/quiz-complete.png";
import { SummaryProps } from "../types/summary";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }: SummaryProps) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = (
    (skippedAnswers.length / userAnswers.length) *
    100
  ).toFixed(0);

  const correctAnswersShare = (
    (correctAnswers.length / userAnswers.length) *
    100
  ).toFixed(0);

  const wrongAnswersShare = (
    100 -
    parseFloat(skippedAnswersShare) -
    parseFloat(correctAnswersShare)
  ).toFixed(0);

  return (
    <div id="summary">
      <img src={QuizComplete} alt="Quiz complete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>

      <ol>
        <li>
          {userAnswers.map((answer, index) => {
            let cssClass = "user-answer";
            if (answer === null) {
              cssClass += " skipped";
            } else if (answer === QUESTIONS[index].answers[0]) {
              cssClass += " correct";
            } else {
              cssClass += " wrong";
            }
            return (
              <div key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? "Skipped"}</p>
              </div>
            );
          })}
        </li>
      </ol>
    </div>
  );
}
