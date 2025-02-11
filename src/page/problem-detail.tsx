import styles from "./problem-detail.module.scss";
import { useProblemDetail } from "../hooks/useProblemDetail";
import { maskSentence } from "../utils/maskSentence";
import { useAnswer } from "../hooks/useAnswer";
import AnswerInput from "../components/problemDetail/answerInput";
import Loading from "../components/common/loading";
import ErrorScreen from "../components/common/errorScreen";

const ProblemDetail = () => {
  const { data, isLoading, isError, hiddenKeyword } = useProblemDetail();

  const { userAnswers, setUserAnswer, isCorrect, checkAnswer, handleKeyDown } =
    useAnswer(hiddenKeyword);

  if (isLoading) return <Loading />;
  if (isError || !data) return <ErrorScreen message="문제 데이터가 없습니다" />;

  console.log(data.data.description);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>{data?.data.title}</div>
        <div className={styles.item}>
          {data.data.description
            .split(";")
            .map((sentence: string, index: number) => {
              return <p key={index}>{maskSentence(sentence, hiddenKeyword)}</p>;
            })}
        </div>
        <AnswerInput
          userAnswers={userAnswers}
          setUserAnswer={setUserAnswer}
          isCorrect={isCorrect}
          checkAnswer={checkAnswer}
          handleKeyDown={handleKeyDown}
          hiddenKeywords={hiddenKeyword}
        />
      </div>
    </div>
  );
};
export default ProblemDetail;
