// https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
import { it, expect } from "vitest";

const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

it("should add two numbers", () => {
  expect(addTwoNumbers(1, 2)).toEqual(3);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
