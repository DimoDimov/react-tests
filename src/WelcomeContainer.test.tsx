import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { WelcomeContainer } from "./WelcomeContainer";
import axios from "axios";

jest.mock("axios");

describe("WelcomeContainer", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (axios.get as jest.Mock).mockResolvedValue({
      data: {
        name: "brr",
      },
    });
  });
  test.only("renders learn react link", async () => {
    render(<WelcomeContainer />);
    screen.debug();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      const welcomeMsg = screen.getByText("brr", { exact: false });

      screen.debug();

      expect(welcomeMsg).toBeInTheDocument();
    });

    screen.debug();
  });
});
