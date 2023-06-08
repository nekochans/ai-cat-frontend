import { ChatHeader } from '@/app/chat/_components/ChatContent/ChatHeader';
import { render, screen } from '@testing-library/react';

describe('src/app/chat/_components/ChatContent/ChatHeader.tsx TestCases', () => {
  it('should display ChatHeader', () => {
    const expected = 'もこちゃん';

    render(<ChatHeader />);

    expect(screen.getByRole('img', { name: expected })).toHaveAttribute(
      'alt',
      expected
    );
  });
});
