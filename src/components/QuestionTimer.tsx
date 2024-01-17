import { QuestionTimerProps } from "../types/questionTimer";
import { useState, useEffect } from "react";

export default function QuestionTimer({
  timeout,
  onTimeout,
  mode,
}: QuestionTimerProps) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    if (onTimeout !== null) {
      const timer = setTimeout(onTimeout, timeout);

      return () => {
        clearTimeout(timer);
      };
    }

    return () => {};
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
