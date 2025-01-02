import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import TaskList from './TaskList';
import { useAppSelector } from '../../redux/hooks';

vi.mock('../../redux/hooks', () => ({
  useAppSelector: vi.fn(),
}));

describe('TaskList', () => {
  it('should render', () => {
    (useAppSelector as ReturnType<typeof vi.fn>).mockReturnValue({ tasks: [], filter: 'ALL' });
    render(<TaskList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
