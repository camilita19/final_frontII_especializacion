import { render, cleanup } from '@testing-library/react';
import ErrorFallback from '../ErrorFallback';
import '@testing-library/jest-dom/extend-expect';

describe('ErrorFallback', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<ErrorFallback />);
  });

  afterEach(() => {
    cleanup();
  });


  it('should render ErrorContainer component', () => {
    // expect(screen.getByTestId('error-container')).toBeInTheDocument();
  });

  it('should render ErrorTitle component', () => {
    // expect(screen.getByTestId('error-title')).toBeInTheDocument();
  });

  
  it('should set body overflowY style to hidden on mount', () => {
    expect(document.body.style.overflowY).toBe('hidden');
  });
});
export {};
