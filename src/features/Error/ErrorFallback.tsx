import { useEffect } from 'react';
import { ErrorContainer, ErrorTitle } from './styled';

const ErrorFallback = () => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);
  return (
    <ErrorContainer>
      <ErrorTitle>
        D'oh! <br />
        Hubo un error, <br />
        intente más tarde
      </ErrorTitle>
    </ErrorContainer>
  );
};

export default ErrorFallback;
