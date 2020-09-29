import React from 'react';
import { render } from '@testing-library/react';
import Matches from './Matches';

test('matches table title', () => {
  const { getByText } = render(<Matches />);
  const Headline = getByText(/Recent Scoccer Statistics/i);
  expect(Headline).toBeInTheDocument();
});