import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

test('shows the menu', async () => {
  render(<Home />, {wrapper: BrowserRouter});
  expect(screen.getByRole('menu')).toBeInTheDocument();

  const menuItems = screen.getAllByRole('menuitem');
  expect(menuItems).toHaveLength(3);

  expect(menuItems[0]).toHaveTextContent('Play Movie');
  let childAnchor = menuItems[0].childNodes[0];
  expect(childAnchor).toHaveAttribute('href', '/cv');

  expect(menuItems[1]).toHaveTextContent('About');
  childAnchor = menuItems[1].childNodes[0];
  expect(childAnchor).toHaveAttribute('href', '/about');

  expect(menuItems[2]).toHaveTextContent('Contact');
  childAnchor = menuItems[2].childNodes[0];
  expect(childAnchor).toHaveAttribute('href', '/contact');
});