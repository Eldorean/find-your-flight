import { render } from '@testing-library/react';
import FlightDisplayContainer from './FlightDisplayContainer';

describe('FlightDisplayContainer', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <FlightDisplayContainer>
        <div>Child Component</div>
      </FlightDisplayContainer>
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });
});