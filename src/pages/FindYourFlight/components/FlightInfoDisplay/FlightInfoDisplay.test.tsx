import { vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import FlightInfoDisplay from './FlightInfoDisplay';

vi.mock('../../../../hooks/useAsync');

import useAsync from '../../../../hooks/useAsync';

describe('FlightInfoDisplay', () => {
  test('renders loading message when loading is true', () => {
    (useAsync as Mock).mockReturnValue({
      loading: true,
      value: null,
    });

    render(<FlightInfoDisplay query="" />);
    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders flight info items when loading is false', async () => {
    (useAsync as Mock).mockReturnValue({
      loading: false,
      value: { flights: [{
        flightNumber: 'ABC123',
        flightIdentifier: 'ABC',
        airport: 'JFK',
        date: '2022-01-01',
      }]},
    });
    await render(<FlightInfoDisplay query="JFK" />);
    const loadingElement = await screen.getByText('JFK');
    expect(loadingElement).toBeInTheDocument();
  });
});