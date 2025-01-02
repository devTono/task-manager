import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Task from './Task';

describe('Task', () => {
  it('should render', () => {
    render(<Task task={{ id: 1, name: 'Test Task', completed: false }} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
});
