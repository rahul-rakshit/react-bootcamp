import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("Props Exercise App component", () => {
  it("renders the name that was passed in, test 1", () => {
    const { getByRole } = render(<App name="Herbert Chorley" />);

    const heading = getByRole("heading");

    expect(heading).toHaveTextContent("Hello, Herbert Chorley!");
  });

  it("renders the name that was passed in, test 2", () => {
    const { getByRole } = render(<App name="Jacob Kowalski" />);

    const heading = getByRole("heading");

    expect(heading).toHaveTextContent("Hello, Jacob Kowalski!");
  });
});
