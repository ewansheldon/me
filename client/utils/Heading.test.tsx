import { render, screen } from '@testing-library/react';
import Heading from './Heading';

test('it provides a heading', () => {
  const testHeading: string = "test heading";
  render(<Heading value={testHeading} />)
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(testHeading);
  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});