import { render, screen } from '@testing-library/react';
import Specials from './Specials';
test('Specials', () => {
  render(<Specials />);
  const specialsElement = screen.getByTestId('specials');
  expect(specialsElement).toBeInTheDocument();
  expect(specialsElement).toHaveTextContent('This weeks specials!');
  expect(specialsElement).toContainHTML('div');
  expect(specialsElement).toContainHTML('img');
  expect(specialsElement).toContainHTML('p');
  expect(specialsElement).toHaveTextContent('Order a delivery');
});
