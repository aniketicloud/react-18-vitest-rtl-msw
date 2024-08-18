import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos/1", () => {
    return HttpResponse.json({
      userId: 1,
      id: 1,
      title: "mocked title",
      completed: false,
    });
  }),
];
