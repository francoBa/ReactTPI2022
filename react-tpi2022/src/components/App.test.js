import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ListaNoticias from './ListaNoticias';

test('renders results by bitcoin search', async () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  const valor = 'bitcoin';
  render(<ListaNoticias valor={valor} />);
  // const noticias = render(<ListaNoticias valor="Ether" />);
  // console.log(noticias);
  // ListaNoticias.debug();
  screen.queryByLabelText({ valor });
  // const result = await screen.findAllByLabelText('bitcoin');
  // expect(result).toHaveTextContent(valor.content);
});

test('renders results not found for random text', async () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  const valor = 'aksdlasdqwxmlaw';
  render(<ListaNoticias valor={valor} />);
  screen.queryByLabelText('No se han encontrado resultados de la búsqueda!');
});

test('renders results with error text', async () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  const valor = '&page=300;';
  render(<ListaNoticias valor={valor} />);
  screen.queryByLabelText(
    'Se ha generado un error de carga. Contacte a soporte técnico!'
  );
});
