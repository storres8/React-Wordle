import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('Renders Hello World', () => {
    // Arrange
    render(<App />);
    // Act
    // Expect
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
