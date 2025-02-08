export type AnswerInputProps = {
  userAnswers: string[];
  setUserAnswer: (index: number, value: string) => void;
  isCorrect: boolean | null;
  checkAnswer: () => void;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => void;
  hiddenKeywords: string[] | null;
};
