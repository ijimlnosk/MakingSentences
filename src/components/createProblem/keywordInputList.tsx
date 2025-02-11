import { KeywordInputListProps } from "./type";
import styles from "./style.module.scss";

const KeywordInputList = ({
  keywords,
  onAddKeyword,
  onKeywordChange,
  onRemoveKeyword,
}: KeywordInputListProps) => {
  return (
    <div className={styles.item}>
      <label>키워드</label>
      {keywords.map((keyword, index) => (
        <div key={index} className={styles.keywordBox}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => onKeywordChange(index, e.target.value)}
            className={styles.keyword}
          />
          <button
            type="button"
            onClick={() => onRemoveKeyword(index)}
            className={styles.delete}
          >
            삭제
          </button>
        </div>
      ))}
      <div className={styles.addKeywordBox}>
        <button
          type="button"
          onClick={onAddKeyword}
          className={styles.addKeyword}
        >
          키워드 추가
        </button>
      </div>
    </div>
  );
};
export default KeywordInputList;
