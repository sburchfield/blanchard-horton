import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the firm homepage', () => {
  render(<App />);
  expect(screen.getAllByText(/Blanchard Horton PLLC/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Strategic protection for inventions/i)).toBeInTheDocument();
});
