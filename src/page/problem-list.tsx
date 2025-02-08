import { useQuery } from "@tanstack/react-query";
import { getProblemList } from "../apis/problem";
import styles from "./problem-list.module.scss";
import { useNavigate } from "react-router-dom";

const ProblemList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["problemList"],
    queryFn: getProblemList,
  });

  const navigate = useNavigate();

  const handleProblemDetail = (id: number) => {
    navigate(`/problem-detail/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>문제 데이터가 없습니다.</div>;

  return (
    <div className={styles.container}>
      <div>problem list</div>
      <div>
        {data?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleProblemDetail(item.id)}
            className={styles.item}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProblemList;
