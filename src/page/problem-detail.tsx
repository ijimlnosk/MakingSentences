import styles from "./problem-detail.module.scss";
import { useProblemDetail } from "../hooks/useProblemDetail";
import { maskSentence } from "../utils/maskSentence";
import { useAnswer } from "../hooks/useAnswer";
import AnswerInput from "../components/problemDetail/answerInput";

const ProblemDetail = () => {
  const { data, isLoading, isError, hiddenKeyword } = useProblemDetail();

  const { userAnswer, setUserAnswer, isCorrect, checkAnswer, handleKeyDown } =
    useAnswer(hiddenKeyword);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>문제 데이터가 없습니다.</div>;

  return (
    <div className={styles.container}>
      <div>problem detail</div>
      <div>
        <div className={styles.title}>{data?.title}</div>
        <div className={styles.item}>
          {data.sentences.split(".").map((sentence: string, index: number) => {
            return <p key={index}>{maskSentence(sentence, hiddenKeyword)}</p>;
          })}
        </div>
        <AnswerInput
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          isCorrect={isCorrect}
          checkAnswer={checkAnswer}
          handleKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};
export default ProblemDetail;
