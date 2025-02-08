import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProblemDetail } from "../apis/problem";
import { useEffect, useState } from "react";

export const useProblemDetail = () => {
  const { id } = useParams();
  const problemId = Number(id) || 0;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["problemDetail", problemId],
    queryFn: () => getProblemDetail(problemId),
  });

  const [hiddenKeyword, setHiddenKeyword] = useState<string | null>(null);

  useEffect(() => {
    if (!data?.keywords || data.keywords.length === 0) return;
    const randomIndex = Math.floor(Math.random() * data.keywords.length);

    setHiddenKeyword(data.keywords[randomIndex]);
  }, [data]);

  return { data, isLoading, isError, hiddenKeyword };
};
