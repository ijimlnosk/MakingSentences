import axios from "axios";
import {
  PostCreateProblemProps,
  PostCreateProblemResponse,
  ProbelmDetailResponse,
  ProblemItem,
} from "./type";
import { axiosInstance } from "./axiosInstance";

export const getProblemList = async () => {
  const response = await axiosInstance.get<ProblemItem[]>("/keyword");
  return response.data;
};

export const getProblemDetail = async (id: number) => {
  const response = await axios.get<ProbelmDetailResponse>(`/keyword${id}`);
  return response.data;
};

export const postCreateProblem = async ({
  title,
  description,
  keywords,
}: PostCreateProblemProps) => {
  console.log(import.meta.env.VITE_BASE_URL);
  const response = await axiosInstance.post<PostCreateProblemResponse>(
    "/keyword",
    {
      title,
      description,
      keywords,
    }
  );
  console.log(response.data);
  return response.data;
};
