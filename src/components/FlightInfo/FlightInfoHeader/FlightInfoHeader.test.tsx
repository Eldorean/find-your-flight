import { render, fireEvent } from "@testing-library/react";
import FlightInfoHeader from "./FlightInfoHeader";
import { vi } from "vitest";

const onSortMock = vi.fn();

describe("FlightInfoHeader", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders the flight info header correctly", () => {
    const { getByText } = render(<FlightInfoHeader onSort={() => {}} />);
    
    expect(getByText("Flightnumber")).toBeInTheDocument();
    expect(getByText("FlightTag")).toBeInTheDocument();
    expect(getByText("Airport")).toBeInTheDocument();
    expect(getByText("date")).toBeInTheDocument();
    expect(getByText("expected time")).toBeInTheDocument();
  });

  it("calls the onSort function when date is clicked", () => {
    const { getByText } = render(<FlightInfoHeader onSort={onSortMock} />);
    const dateElement = getByText("date");

    fireEvent.click(dateElement);

    expect(onSortMock).toHaveBeenCalledWith("date");
  });

  it("calls the onSort function when expected time is clicked", () => {
    const { getByText } = render(<FlightInfoHeader onSort={onSortMock} />);
    const expectedTimeElement = getByText("expected time");

    fireEvent.click(expectedTimeElement);

    expect(onSortMock).toHaveBeenCalledWith("expectedTime");
  });
});