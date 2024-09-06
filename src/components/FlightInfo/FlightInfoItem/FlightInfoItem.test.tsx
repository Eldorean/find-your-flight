import { render } from '@testing-library/react';
import FlightInfoItem from './FlightInfoItem';

it('renders flight info correctly', () => {
  const flightNumber = 'ABC123';
  const flightIdentifier = 'ABC';
  const airport = 'JFK';
  const date = '2022-01-01';
  const expectedTime = '12:00';

  const { container, getByText } = render(
    <FlightInfoItem
      flightNumber={flightNumber}
      flightIdentifier={flightIdentifier}
      airport={airport}
      date={date}
      expectedTime={expectedTime}
      rowNumber={1}
    />
  );

  expect(getByText(flightNumber)).toBeInTheDocument();
  expect(getByText(flightIdentifier)).toBeInTheDocument();
  expect(getByText(airport)).toBeInTheDocument();
  expect(getByText(date)).toBeInTheDocument();
  expect(getByText(expectedTime)).toBeInTheDocument();
  expect(container.firstChild).toHaveClass('odd');
});