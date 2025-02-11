import { AnswerInputProps } from "./type";
import styles from "./answerInput.module.scss";

const AnswerInput = ({
  userAnswers,
  setUserAnswer,
  isCorrect,
  checkAnswer,
  handleKeyDown,
  hiddenKeywords,
}: AnswerInputProps) => {
  return (
    <div className={styles.container}>
      {/* 히든 키워드의 개수만큼 input을 늘린다 */}
      {hiddenKeywords?.map((_, index) => (
        <input
          key={index}
          type="text"
          value={userAnswers[index]}
          onChange={(e) => setUserAnswer(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          placeholder={`정답 ${index + 1}`}
          disabled={isCorrect === true}
          className={styles.input}
        />
      ))}
      <button
        onClick={checkAnswer}
        disabled={isCorrect === true}
        className={styles.button}
      >
        제출
      </button>
      {isCorrect !== null && (
        <div>
          {isCorrect ? (
            <p className={styles.correct}>O</p>
          ) : (
            <div>
              <p className={styles.fail}>X</p>
              <p>정답: {hiddenKeywords?.join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default AnswerInput;
