export type AnswerInputProps = {
  userAnswer: string;
  setUserAnswer: (value: string) => void;
  isCorrect: boolean | null;
  checkAnswer: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  hiddenKeyword: string | null;
};
