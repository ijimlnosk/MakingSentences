export type ProblemItem = {
  questionId: number;
  title: string;
  description: string;
  keywords?: string[];
};

export type ProblemListResponse = {
  data: ProblemListItem[];
  status: string;
  message: string;
};

export type ProblemListItem = {
  questionId: number;
  title: string;
};

export type ProblemDetailResponse = {
  data: ProbelmDetailItem;
  status: string;
  message: string;
};

export type ProbelmDetailItem = {
  questionId: number;
  title: string;
  description: string;
  keywords?: string[];
};

export type PostCreateProblemProps = {
  title: string;
  description: string;
  keywords?: string[];
};

export type PostCreateProblemResponse = {
  title: string;
  description: string;
  keywords?: string[];
};
