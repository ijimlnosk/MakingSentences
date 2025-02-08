export const maskSentence = (sentence: string, keyword: string | null) => {
  if (!keyword) return sentence;
  return sentence.replace(new RegExp(keyword, "gi"), "_____");
};
