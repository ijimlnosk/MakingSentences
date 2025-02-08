export type KeywordInputListProps = {
  keywords: string[];
  onKeywordChange: (index: number, value: string) => void;
  onAddKeyword: () => void;
  onRemoveKeyword: (index: number) => void;
};

const KeywordInputList = ({
  keywords,
  onAddKeyword,
  onKeywordChange,
  onRemoveKeyword,
}: KeywordInputListProps) => {
  return (
    <div>
      <label>키워드</label>
      {keywords.map((keyword, index) => (
        <div key={index}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => onKeywordChange(index, e.target.value)}
          />
          <button type="button" onClick={() => onRemoveKeyword(index)}>
            삭제
          </button>
        </div>
      ))}
      <button type="button" onClick={onAddKeyword}>
        키워드 추가
      </button>
    </div>
  );
};
export default KeywordInputList;
