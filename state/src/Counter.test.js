import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("The Counter component", () => {
  it("can count up", () => {
    const { getByText, getByRole } = render(<Counter />);

    expect(getByText("The button was pressed 0 times.")).toBeVisible();
    userEvent.click(getByRole("button"));
    expect(getByText("The button was pressed 1 times.")).toBeVisible();
    userEvent.click(getByRole("button"));
    expect(getByText("The button was pressed 2 times.")).toBeVisible();
    userEvent.click(getByRole("button"));
    expect(getByText("The button was pressed 3 times.")).toBeVisible();
  });
});
