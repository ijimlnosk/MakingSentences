import { http, HttpResponse } from "msw";
import { ProblemItem } from "../apis/type";

const mockProblems: ProblemItem[] = [
  {
    questionId: 1,
    title: "테스트 문제 1",
    description: "이 문장은 테스트1 문장입니다.",
    keywords: ["테스트1"],
  },
];

export const handlers = [
  http.get(`/api/problems`, () => {
    return HttpResponse.json(mockProblems);
  }),

  http.get("/api/problems/:id", ({ params }) => {
    const id = params.id;
    const problem = mockProblems.find((p) => p.questionId === Number(id));
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
      !body.description ||
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
        ? Math.max(...mockProblems.map((p) => p.questionId)) + 1
        : 1;

    const newProblem: ProblemItem = {
      questionId: newId,
      title: body.title,
      description: body.description,
      keywords: body.keywords || [], // 없을 경우 빈 배열
    };

    mockProblems.push(newProblem);

    return HttpResponse.json(newProblem, { status: 201 });
  }),
];
