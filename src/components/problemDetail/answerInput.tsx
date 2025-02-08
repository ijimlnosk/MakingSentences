import { AnswerInputProps } from "./type";
import styles from "./answerInput.module.scss";

const AnswerInput = ({
  userAnswer,
  setUserAnswer,
  isCorrect,
  checkAnswer,
  handleKeyDown,
  hiddenKeyword,
}: AnswerInputProps) => {
  return (
    <div>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="정답을 입력하세요"
        disabled={isCorrect === true}
      />
      <button onClick={checkAnswer} disabled={isCorrect === true}>
        제출
      </button>
      {isCorrect !== null && (
        <div>
          {isCorrect ? (
            <p className={styles.correct}>O</p>
          ) : (
            <div>
              <p className={styles.fail}>X</p>
              <p>정답: {hiddenKeyword}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default AnswerInput;
