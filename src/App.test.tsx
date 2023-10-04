import App from "@/App.tsx";
import {render, screen} from "@testing-library/react";
import {describe, expect, test} from "vitest";

describe("App", () => {
  test("should render", () => {
    render(<App></App>);
    expect(screen.getByTestId("root-element")).toBeDefined()
  });
});
