import { render, screen } from '@testing-library/react';
import App from './App';

describe('Counter Test', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText('Welcome to counter app');
    expect(linkElement).toBeInTheDocument();
  });
});
