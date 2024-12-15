import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useTypeWriter } from "./useTypewriter";
describe("useTypewriter", () => {
  it("should be empty after showing and deleting words characters", () => {
    const words = ["Test", "Word"];
    const { result } = renderHook(() => useTypeWriter(words));

    console.log("Data:", result.current);
    expect(result.current).toBe("");
  });
});
