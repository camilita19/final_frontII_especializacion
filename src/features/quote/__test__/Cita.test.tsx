import { act, cleanup, render, screen, findByRole } from '../../../test-utils';
import { waitFor, fireEvent } from '@testing-library/react';
import Cita from '../Cita';

describe('Cita', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Cita />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Should render button 'Obtener cita aleatoria' and empty input by default", async () => {
    const citaRandomButton = screen.queryByRole('button', { name: 'Obtener cita aleatoria' });

    const input = screen.queryByPlaceholderText('Ingresa el nombre del autor');

    expect(citaRandomButton).toBeInTheDocument();
    expect(input).toBeEmptyDOMElement();
  });

  it("should fetch random quote when clicking button 'Obtener cita aleatoria' ", async () => {
    const citaRandomButton = await screen.findByRole('button', { name: /Obtener cita aleatoria/i });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(async () => {
      await waitFor(() => {
        // eslint-disable-next-line testing-library/no-wait-for-side-effects
        fireEvent.click(citaRandomButton);
      });
      await waitFor(() => {
        expect(screen.getByText("Hey, I'm the chief here. Bake him away, toys.")).toBeInTheDocument();
      });
      const quote = await screen.findByText("Hey, I'm the chief here. Bake him away, toys.");
      const author = await screen.findByText('Chief Wiggum');

      expect(quote).toBeInTheDocument();
      expect(author).toBeVisible();
    });
  });
});
export {};
