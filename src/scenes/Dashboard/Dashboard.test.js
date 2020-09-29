import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('dashboard navbar item', () => {
  const { getByText } = render(<Dashboard />);
  const NavBarItem = getByText(/Betting/i);
  expect(NavBarItem).toBeInTheDocument();
});