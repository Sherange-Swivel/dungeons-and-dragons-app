import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const element = screen.getByTestId("app-element");
  expect(element).toBeInTheDocument();
});

test('renders home page', () => {
  render(<App />);
  const element = screen.getByTestId("home-element");
  expect(element).toBeInTheDocument();
});
