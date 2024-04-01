import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { WelcomeMessage } from "./WelcomeMessage";

describe("WelcomeContainer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test.only("renders learn react link", async () => {
    render(<WelcomeMessage name="brr" />);

    await waitFor(() => {
      const welcomeMsg = screen.getByText("brr", { exact: false });
      // const welcomeMsg = screen.getByText(/Welcome, brr/i);

      screen.debug();

      expect(welcomeMsg).toBeInTheDocument();
    });
  });
});
