import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import AddTask from './AddTask';

describe('AddTask', () => {
  it('should render', () => {
    render(<AddTask />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
