import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

test('shows the menu', async () => {
  render(<Home />, {wrapper: BrowserRouter});
  expect(screen.getByRole('menu')).toBeInTheDocument();

  const menuItems = screen.getAllByRole('menuitem');
  expect(menuItems).toHaveLength(3);

  let menuAnchor = screen.getByText('Play Movie');
  expect(menuAnchor).toBeInTheDocument();
  expect(menuAnchor).toHaveAttribute('href', '/cv');

  menuAnchor = screen.getByText('About');
  expect(menuAnchor).toBeInTheDocument();
  expect(menuAnchor).toHaveAttribute('href', '/about');

  menuAnchor = screen.getByText('Contact');
  expect(menuAnchor).toBeInTheDocument();
  expect(menuAnchor).toHaveAttribute('href', '/contact');
});