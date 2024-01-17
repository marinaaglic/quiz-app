export interface QuestionTimerProps {
  timeout: number;
  mode: string;
  onTimeout: (() => void) | null;
}
