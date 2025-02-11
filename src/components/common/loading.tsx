import styles from "./style.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
};
export default Loading;
