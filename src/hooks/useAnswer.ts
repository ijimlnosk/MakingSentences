import { useState } from "react";

export const useAnswer = (hiddenKeywords: string[] | null) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(() =>
    hiddenKeywords ? new Array(hiddenKeywords.length).fill("") : []
  );
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const checkAnswer = () => {
    if (!hiddenKeywords) return;

    const allFilled = userAnswers.every((answer) => answer.trim() !== "");

    const allCorrect =
      allFilled &&
      userAnswers.length === hiddenKeywords.length &&
      userAnswers.every(
        (answer, index) =>
          answer.trim().toLocaleLowerCase() ===
          hiddenKeywords[index].toLocaleLowerCase()
      );
    setIsCorrect(allCorrect);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  };

  const setUserAnswer = (index: number, value: string) => {
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  return { userAnswers, setUserAnswer, isCorrect, checkAnswer, handleKeyDown };
};
