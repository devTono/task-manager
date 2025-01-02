import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import TitleHeader from './TitleHeader';

describe('TitleHeader', () => {
  it('should render', () => {
    render(<TitleHeader />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
