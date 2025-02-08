import { http, HttpResponse } from "msw";
import { ProblemItem } from "../apis/type";

const mockProblems: ProblemItem[] = [
  {
    id: 1,
    title: "테스트 문제 1",
    sentences: "이 문장은 테스트1 문장입니다.",
    keywords: ["테스트1"],
  },
  {
    id: 2,
    title: "테스트 문제 2",
    sentences: "이 문장은 테스트2 문장입니다.",
    keywords: ["테스트2"],
  },
  {
    id: 3,
    title: "테스트 문제 3",
    sentences: "이 문장은 테스트3 문장입니다.",
    keywords: ["테스트3", "문장"],
  },
  {
    id: 4,
    title: "테스트 문제 4",
    sentences: "이 문장은 테스트4 문장입니다.",
    keywords: ["테스트4"],
  },
  {
    id: 5,
    title: "테스트 문제 5",
    sentences: "오늘은 새로운 프로젝트를 시작하기 좋은 날이다.",
    keywords: ["새로운", "좋은"],
  },
  {
    id: 6,
    title: "테스트 문제 6",
    sentences: "3개월 내에 관련된 증거를 제출할 수 있다",
    keywords: ["3개월", "증거를"],
  },
];

export const handlers = [
  http.get(`/api/problems`, () => {
    return HttpResponse.json(mockProblems);
  }),

  http.get("/api/problems/:id", ({ params }) => {
    const id = params.id;
    const problem = mockProblems.find((p) => p.id === Number(id));
    if (problem) {
      return HttpResponse.json(problem);
    } else {
      return new HttpResponse(
        JSON.stringify({ message: "Problem not found" }),
        {
          status: 404,
        }
      );
    }
  }),

  http.post("/api/problems", async ({ request }) => {
    const body = (await request.json()) as Partial<ProblemItem> & {
      keywords?: string[];
    };

    if (
      typeof body !== "object" ||
      !body ||
      !body.title ||
      !body.sentences ||
      !Array.isArray(body.keywords)
    ) {
      return new HttpResponse(
        JSON.stringify({
          message:
            "Title, sentences are required, and forbiddenWord must be an array",
        }),
        { status: 400 }
      );
    }

    const newId =
      mockProblems.length > 0
        ? Math.max(...mockProblems.map((p) => p.id)) + 1
        : 1;

    const newProblem: ProblemItem = {
      id: newId,
      title: body.title,
      sentences: body.sentences,
      keywords: body.keywords || [], // 없을 경우 빈 배열
    };

    mockProblems.push(newProblem);

    return HttpResponse.json(newProblem, { status: 201 });
  }),
];
