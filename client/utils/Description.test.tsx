import { render, screen } from '@testing-library/react';
import Description from './Description';

test('it provides a description', () => {
  const testText: string = "test description";
  render(<Description value={testText} />);
  const description = screen.getByRole('description');
  expect(description).toBeInTheDocument();
  expect(description).toHaveTextContent(testText);
  expect(description).toBeInstanceOf(HTMLParagraphElement);
});