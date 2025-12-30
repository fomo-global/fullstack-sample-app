import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';

test('рендерит приветствие с именем', () => {
  render(<Hello name="Elina" />);
  expect(screen.getByText(/Hello, Elina!/)).toBeInTheDocument();
});