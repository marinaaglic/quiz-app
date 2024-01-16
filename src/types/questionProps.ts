export interface QuestionProps {
  index: number;
  onSelectedAnswer: (selectedAnswer: string | null) => void;
  onSkipAnswer: () => void;
}
