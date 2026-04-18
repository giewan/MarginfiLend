// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MarginfiLend title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MarginfiLend/i);
    expect(titleElement).toBeInTheDocument();
});
