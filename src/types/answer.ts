export interface AnswerProps {
  answers: string[];
  selectedAnswer: string;
  answerState: string;
  onSelect: (answer: string) => void;
}
