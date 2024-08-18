import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { server } from "mocks/node";
import { sendNetworkRequest } from "$src/utils/networkRequest";
import { jsonplaceholderURL } from "constants/urls";
import { jsonplaceholderTodo } from "types";
import { jsonPlaceholderTodoMock } from "mocks/data";

describe("networkRequest function", () => {
  describe("without mock", () => {
    it("makes an api call to jsonPlaceholder api", async () => {
      const user = await sendNetworkRequest<jsonplaceholderTodo>(
        jsonplaceholderURL
      );
      expect(user.id).toBe(1);
      expect(user.userId).toBe(1);
      expect(user.title).toBe("delectus aut autem");
      expect(user.completed).toBe(false);
    });
  });

  describe("with mock using MSW", () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    it("makes an api call to jsonPlaceholder api and MSW intercepts", async () => {
      const user = await sendNetworkRequest<jsonplaceholderTodo>(
        jsonplaceholderURL
      );
      expect(user.id).toBe(jsonPlaceholderTodoMock.id);
      expect(user.title).toBe(jsonPlaceholderTodoMock.title);
      expect(user.userId).toBe(jsonPlaceholderTodoMock.userId);
      expect(user.completed).toBe(jsonPlaceholderTodoMock.completed);
    });
  });
});
