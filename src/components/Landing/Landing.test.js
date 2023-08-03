import { render, screen } from '@testing-library/react';
import Landing from './Landing';
test('Landing', () => {
  render(<Landing />);
  const landingElement = screen.getByTestId('landing');
  expect(landingElement).toBeInTheDocument();
  expect(landingElement).toHaveTextContent('Little Lemon');
  expect(landingElement).toContainHTML('img');
});
