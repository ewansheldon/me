import { render, screen } from "@testing-library/react";
import About from "./About";
import { BrowserRouter } from "react-router-dom";

test('shows my name and bio', async () => {
  render(<About />, {wrapper: BrowserRouter});
  const headings = screen.getAllByRole('heading');
  expect(headings).toHaveLength(2);
  expect(headings[0]).toHaveTextContent('Ewan Sheldon');
  expect(headings[1]).toHaveTextContent('About this site');
});