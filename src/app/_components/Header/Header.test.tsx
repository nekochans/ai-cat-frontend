import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';
import '@testing-library/dom';

describe('src/app/_components/Header/Header.tsx Test Cases', () => {
  it('show Header with login link', () => {
    // eslint-disable-next-line react/prefer-shorthand-boolean
    render(<Header enableLoginLink={true} />);

    expect(screen.getByRole('link', { name: 'Log in' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'terms' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'privacy' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'external transmission' })).toBeTruthy();
  });

  it('show Header without login link', () => {
    render(<Header enableLoginLink={false} />);

    expect(screen.getByRole('link', { name: 'terms' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'privacy' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'external transmission' })).toBeTruthy();
  });
});
