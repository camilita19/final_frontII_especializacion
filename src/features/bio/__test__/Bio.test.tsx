import { render, screen, cleanup } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import Bio from '../Bio';

describe('Bio', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Bio />);
  });

  afterEach(() => {
    cleanup();
  });

  // Renders the bio section with the first character (Bart Simpson)
  it('should render the bio section with the first character (Bart Simpson)', () => {
    const button = screen.getByRole('button', { name: /BART/i });
    fireEvent.click(button);

    // Use a regular expression to make the text matching more flexible
    expect(screen.getByText(/Bart Simpson/i)).toBeInTheDocument();
    // expect(screen.getByText(/Bio Descripcion Text/i)).toBeInTheDocument();
  });
});

export {};
