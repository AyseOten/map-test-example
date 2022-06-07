import React from 'react';
import { render, screen } from '@testing-library/react';
import MapContainer from './MapContainer';

test('renders learn react link', () => {
  render(<MapContainer/>);
  const linkElement = screen.getByText(/MapContainer/i);
  expect(linkElement).toBeInTheDocument();
});
