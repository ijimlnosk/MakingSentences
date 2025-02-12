import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

const BackButton = ({ url }: { url: string }) => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate(url);
  };

  return (
    <button onClick={handlePrev} className={styles.back}>
      ←
    </button>
  );
};
export default BackButton;
