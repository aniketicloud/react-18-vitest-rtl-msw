import { addNumbers } from "$src/utils/add";
import { expect, test } from "vitest";
test("should add two numbers", () => {
  const num1 = 1;
  const num2 = 3;
  const expected = 4;
  const result = addNumbers(num1, num2);
  expect(result).toBe(expected);
});
