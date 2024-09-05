import { vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import FlightInfoDisplay from './FlightInfoDisplay';
import useAsync from '../../../../hooks/useAsync';

vi.mock('../../../../utils/flightData/fetchFlightdata', () => ({
  default: vi.fn()
}));
vi.mock('../../../../hooks/useAsync');

describe('FlightInfoDisplay', () => {
  test('renders loading message when loading is true', () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(null, { status: 200 })
    );

    (useAsync as Mock).mockReturnValue({
      loading: true,
      value: undefined,
    });

    render(<FlightInfoDisplay query="" />);
    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders flight info items when loading is false', () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(null, { status: 200 })
    );

    (useAsync as Mock).mockReturnValue({
      loading: false,
      value: { flights: [{
        flightNumber: 'ABC123',
        flightIdentifier: 'ABC',
        airport: 'JFK',
        date: '2022-01-01',
      }]},
    });
    render(<FlightInfoDisplay query="JFK" />);
    const loadingElement = screen.getByText('JFK');
    expect(loadingElement).toBeInTheDocument();
  });
});