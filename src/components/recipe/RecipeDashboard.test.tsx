import { render, screen } from '@testing-library/react';
import RecipeDashboard from './RecipeDashboard';

test('renders recipe dashboard', () => {
  render(<RecipeDashboard />);
  const dashboardText = screen.getByText(/Find Recipes with an Ingredient you have!/i);
  expect(dashboardText).toBeInTheDocument();
});

