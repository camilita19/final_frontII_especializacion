import { render, screen, cleanup } from '@testing-library/react';
import ModalSubscribe from '../ModalSubscribe';

describe('ModalSubscribe', () => {
  beforeEach(() => {
    // render(<ModalSubscribe />);
  });

  afterEach(() => {
    cleanup();
  });
  it('should render a modal with a title, description, image, and subscribe button', () => {
    // Arrange
    const onClose = jest.fn();
    const onSubscribe = jest.fn();

    // Act
    render(<ModalSubscribe onClose={onClose} onSubscribe={onSubscribe} />);

    // Assert
    const tituloModal = screen.getByText('Suscríbete a nuestro Newsletter');
    expect(tituloModal).toBeInTheDocument();

    const descripcionModal = screen.getByText(
      'Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.'
    );
    expect(descripcionModal).toBeInTheDocument();

    const imagenModal = screen.getByAltText('mr-burns-excellent');
    expect(imagenModal).toBeInTheDocument();

    const botonSuscribir = screen.getByText('Suscríbete');
    expect(botonSuscribir).toBeInTheDocument();
  });
});

export {};
