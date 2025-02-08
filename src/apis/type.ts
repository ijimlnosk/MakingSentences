export type ProblemItem = {
  id: number;
  title: string;
  sentences: string;
  keywords?: string[];
};

export type ProbelmDetailResponse = {
  id: number;
  title: string;
  sentences: string;
  keywords?: string[];
};

export type PostCreateProblemProps = {
  title: string;
  sentences: string;
  keywords?: string[];
};

export type PostCreateProblemResponse = {
  title: string;
  sentences: string;
  keywords?: string[];
};
