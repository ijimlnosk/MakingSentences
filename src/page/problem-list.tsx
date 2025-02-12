import { useQuery } from "@tanstack/react-query";
import { getProblemList } from "../apis/problem";
import styles from "./problem-list.module.scss";
import { useNavigate } from "react-router-dom";
import { ProblemListItem, ProblemListResponse } from "../apis/type";
import Loading from "../components/common/loading";
import ErrorScreen from "../components/common/errorScreen";
import DeleteProblemButton from "../components/deleteProblemButton";

const ProblemList = () => {
  const { data, isLoading, isError } = useQuery<ProblemListResponse>({
    queryKey: ["problemList"],
    queryFn: getProblemList,
  });

  const navigate = useNavigate();

  const handleProblemDetail = (id: number) => {
    navigate(`/problem-detail/${id}`);
  };

  if (isLoading) return <Loading />;
  if (isError) return <ErrorScreen message="데이터가 존재하지 않습니다." />;

  return (
    <div className={styles.container}>
      <div className={styles.title}>문제 목록</div>
      <div className={styles.box}>
        {data?.data.map((item: ProblemListItem) => (
          <div className={styles.itemBox}>
            <div
              key={item.questionId}
              onClick={() => handleProblemDetail(item.questionId)}
              className={styles.item}
            >
              {item.title}
            </div>
            <DeleteProblemButton questionId={item.questionId} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProblemList;
