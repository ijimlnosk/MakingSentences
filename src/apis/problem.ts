import axios from "axios";
import {
  PostCreateProblemProps,
  PostCreateProblemResponse,
  ProbelmDetailResponse,
  ProblemItem,
} from "./type";

export const getProblemList = async () => {
  const response = await axios.get<ProblemItem[]>("/api/problems");
  return response.data;
};

export const getProblemDetail = async (id: number) => {
  const response = await axios.get<ProbelmDetailResponse>(
    `/api/problems/${id}`
  );
  return response.data;
};

export const postCreateProblem = async ({
  title,
  sentences,
  keywords,
}: PostCreateProblemProps) => {
  const response = await axios.post<PostCreateProblemResponse>(
    "/api/problems",
    {
      title,
      sentences,
      keywords,
    }
  );
  console.log(response.data);
  return response.data;
};
