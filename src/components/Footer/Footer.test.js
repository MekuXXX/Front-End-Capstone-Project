import { render, screen } from '@testing-library/react';
import Footer from './Footer';
test('Footer', () => {
  render(<Footer />);
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
  expect(footerElement).toHaveTextContent('Copyright');
  expect(footerElement).toHaveTextContent('maded by Mohamed');
});
