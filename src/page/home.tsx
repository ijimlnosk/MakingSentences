import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleProblemList = (url: string) => {
    navigate(url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>안녕하세요. </div>
      <div
        className={styles.link}
        onClick={() => handleProblemList("/problem-list")}
      >
        문제 리스트로 이동 →
      </div>
      <div
        className={styles.link}
        onClick={() => handleProblemList("/create-problem")}
      >
        문제 생성하러 가기 →
      </div>
    </div>
  );
};

export default Home;
