export type ProblemItem = {
  id: number;
  title: string;
  description: string;
  keywords?: string[];
};

export type ProbelmDetailResponse = {
  id: number;
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
