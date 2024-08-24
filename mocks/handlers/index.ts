import { jsonplaceholderURL } from "../../constants/urls";
import { jsonPlaceholderTodoMock } from "../data";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(jsonplaceholderURL, () => {
    return HttpResponse.json(jsonPlaceholderTodoMock);
  }),
];
