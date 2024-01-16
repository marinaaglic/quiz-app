export interface QuestionTimerProps {
  timeout: number;
  onTimeout: (() => void) | null;
}
