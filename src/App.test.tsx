import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerText = screen.getByText(/RecipeFinder/i);
  expect(headerText).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  const FooterText = screen.getByText(/We help cook fast!/i);
  expect(FooterText).toBeInTheDocument();
});
