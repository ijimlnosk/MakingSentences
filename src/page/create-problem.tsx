import { ProblemForm } from "./type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCreateProblem } from "../apis/problem";
import { useProblemForm } from "../hooks/useProblemForm";
import KeywordInputList from "../components/createProblem/keywordInputList";
import styles from "./create-problem.module.scss";
import { useNavigate } from "react-router-dom";

const CreateProblem = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newProblem: ProblemForm) => postCreateProblem(newProblem),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["problems"] });
      alert("문제가 성공적으로 생성되었습니다!");
    },
    onError: (error) => {
      alert(`문제 생성 실패: ${error}`);
    },
  });

  const {
    register,
    handleSubmit,
    errors,
    keywords,
    handleKeywordChange,
    addKeyword,
    removeKeyword,
  } = useProblemForm();

  const onSubmit = (data: ProblemForm) => {
    console.log("문제 생성 클릭");
    mutation.mutate(data);
  };

  const handlePrev = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h2>문제 생성</h2>
      <form className={styles.create} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.item}>
          <label>제목</label>
          <input className={styles.input} type="text" {...register("title")} />
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </div>
        <div className={styles.item}>
          <label>문장</label>
          <textarea {...register("description")} className={styles.textarea} />
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description.message}</p>
          )}
        </div>
        <KeywordInputList
          keywords={keywords}
          onAddKeyword={addKeyword}
          onKeywordChange={handleKeywordChange}
          onRemoveKeyword={removeKeyword}
        />
        <button
          type="submit"
          disabled={mutation.isPending}
          className={styles.createProblem}
        >
          {mutation.isPending ? "전송 중..." : "문제 생성"}
        </button>
      </form>
      <button onClick={handlePrev} className={styles.back}>
        ←
      </button>
    </div>
  );
};

export default CreateProblem;
