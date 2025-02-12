import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProblem } from "../apis/problem";
import styles from "./style.module.scss";
import { Trash2 } from "lucide-react";

const DeleteProblemButton = ({ questionId }: { questionId: number }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteProblem(questionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["problemList"] });
    },
    onError: (error) => {
      console.error("삭제 실패", error);
    },
  });

  const handleDelete = async () => {
    mutation.mutate();
  };

  return (
    <div className={styles.button} onClick={handleDelete}>
      <Trash2 size={"20px"} color="#aa0d03" />
    </div>
  );
};
export default DeleteProblemButton;
