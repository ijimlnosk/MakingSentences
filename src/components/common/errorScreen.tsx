import styles from "./style.module.scss";

const ErrorScreen = ({ message }: { message: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>{message}</div>
    </div>
  );
};
export default ErrorScreen;
