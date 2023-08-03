import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
test('Navbar', () => {
  render(<Navbar />);
  const navElement = screen.getByTestId('navbar');
  expect(navElement).toBeInTheDocument();
  expect(navElement).toHaveTextContent('Home');
  expect(navElement).toHaveTextContent('About');
  expect(navElement).toContainHTML('ul');
});
