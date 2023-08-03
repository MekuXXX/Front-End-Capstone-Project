import { render, screen } from '@testing-library/react';
import BookForm from './BookForm';
test('BookForm', () => {
  render(<BookForm />);
  const bookFormElement = screen.getByTestId('bookForm');
  expect(bookFormElement).toBeInTheDocument();
  expect(bookFormElement).toHaveTextContent('Book your meal!');
  expect(bookFormElement).toContainHTML('form');
  expect(bookFormElement).toContainHTML('label');
  expect(bookFormElement).toContainHTML('input');
  expect(bookFormElement).toHaveTextContent('Add to cart');
});
