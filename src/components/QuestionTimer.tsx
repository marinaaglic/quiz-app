import { QuestionTimerProps } from "../types/questionTimerProps";
import { useState, useEffect } from "react";

export default function QuestionTimer({
  timeout,
  onTimeout,
}: QuestionTimerProps) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    if (onTimeout !== null) {
      setTimeout(onTimeout, timeout);
    }
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
