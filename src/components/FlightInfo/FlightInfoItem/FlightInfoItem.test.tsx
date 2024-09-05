import { render } from '@testing-library/react';
import FlightInfoItem from './FlightInfoItem';

it('renders flight info correctly', () => {
  const flightNumber = 'ABC123';
  const flightIdentifier = 'ABC';
  const airport = 'JFK';
  const date = '2022-01-01';

  const { getByText } = render(
    <FlightInfoItem
      flightNumber={flightNumber}
      flightIdentifier={flightIdentifier}
      airport={airport}
      date={date}
    />
  );

  expect(getByText(flightNumber)).toBeInTheDocument();
  expect(getByText(flightIdentifier)).toBeInTheDocument();
  expect(getByText(airport)).toBeInTheDocument();
  expect(getByText(date)).toBeInTheDocument();
});