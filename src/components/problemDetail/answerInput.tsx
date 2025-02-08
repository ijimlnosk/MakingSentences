import { AnswerInputProps } from "./type";
import styles from "./answerInput.module.scss";

const AnswerInput = ({
  userAnswer,
  setUserAnswer,
  isCorrect,
  checkAnswer,
  handleKeyDown,
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
            <p className={styles.fail}>X</p>
          )}
        </div>
      )}
    </div>
  );
};
export default AnswerInput;
