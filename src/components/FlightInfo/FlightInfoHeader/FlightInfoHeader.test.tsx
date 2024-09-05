import { render } from "@testing-library/react";
import FlightInfoHeader from "./FlightInfoHeader";

describe("FlightInfoHeader", () => {
  it("renders the flight info header correctly", () => {
    const { getByText } = render(<FlightInfoHeader />);
    
    expect(getByText("Flightnumber")).toBeInTheDocument();
    expect(getByText("FlightTag")).toBeInTheDocument();
    expect(getByText("Airport")).toBeInTheDocument();
    expect(getByText("date")).toBeInTheDocument();
  });
});