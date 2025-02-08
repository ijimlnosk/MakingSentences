export type KeywordInputListProps = {
  keywords: string[];
  onKeywordChange: (index: number, value: string) => void;
  onAddKeyword: () => void;
  onRemoveKeyword: (index: number) => void;
};
