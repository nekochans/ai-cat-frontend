import { ChatHeader } from '@/app/chat/_components/ChatContent/ChatHeader';
import { render, screen } from '@testing-library/react';

describe('src/app/chat/_components/ChatContent/ChatHeader.tsx TestCases', () => {
  it('should display ChatHeader', () => {
    const expectedCatName = 'もこちゃん';
    const expectedCatType = 'チンチラシルバー';

    render(<ChatHeader />);

    expect(screen.getByRole('img', { name: expectedCatName })).toHaveAttribute(
      'alt',
      expectedCatName
    );

    expect(screen.getByText(expectedCatName)).toBeInTheDocument();
    expect(screen.getByText(expectedCatType)).toBeInTheDocument();
  });
});
