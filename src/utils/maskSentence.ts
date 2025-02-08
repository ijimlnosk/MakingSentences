export const maskSentence = (sentence: string, keywords: string[] | null) => {
  if (!keywords || keywords.length === 0) return sentence;
  let maskedSentence = sentence;

  keywords.forEach((keyword, index) => {
    const regex = new RegExp(
      `(${keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
      "gi"
    );
    maskedSentence = maskedSentence.replace(regex, `(${index + 1})`);
  });

  return maskedSentence;
};
