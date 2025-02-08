import { ProblemForm } from "./type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCreateProblem } from "../apis/problem";
import { useProblemForm } from "../hooks/useProblemForm";
import KeywordInputList from "../components/createProblem/keywordInputList";

const CreateProblem = () => {
  const queryClient = useQueryClient();

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
    mutation.mutate(data);
  };

  return (
    <div>
      <h2>문제 생성</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>제목</label>
          <input type="text" {...register("title")} />
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </div>
        <div>
          <label>문장</label>
          <textarea {...register("sentences")} />
          {errors.sentences && (
            <p style={{ color: "red" }}>{errors.sentences.message}</p>
          )}
        </div>
        <KeywordInputList
          keywords={keywords}
          onAddKeyword={addKeyword}
          onKeywordChange={handleKeywordChange}
          onRemoveKeyword={removeKeyword}
        />
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "전송 중..." : "문제 생성"}
        </button>
      </form>
    </div>
  );
};

export default CreateProblem;
