import { useState } from "react";

export const useAnswer = (hiddenKeyword: string | null) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const checkAnswer = () => {
    if (!hiddenKeyword) return;
    setIsCorrect(
      userAnswer.trim().toLocaleLowerCase() ===
        hiddenKeyword.toLocaleLowerCase()
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  };

  return { userAnswer, setUserAnswer, isCorrect, checkAnswer, handleKeyDown };
};
