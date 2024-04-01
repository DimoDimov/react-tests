import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test.only("renders learn react link", async () => {
  render(<App />);
  screen.debug();
  const postItemNode = await screen.findByText("Edit", { exact: false });
  screen.debug();

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
