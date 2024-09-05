import filterByAirport from "./filterByAirport";
import { FlightInfoType } from "./FlightInfo.types";

const generateMock = (airport: string) => ({
  airport, 
  flightNumber: "ABC123",
  flightIdentifier: "",
  date: "",
  expectedTime: "",
  originalTime: "",
  url: "",
  score: ""
})

describe("filterByAirport", () => {
  const flights: FlightInfoType[] = [
    generateMock("JFK"),
    generateMock("LAX"),
    generateMock("ORD"),
  ];

  it("should filter flights by airport correctly", () => {
    const filteredFlights = flights.filter(filterByAirport("JFK"));
    expect(filteredFlights).toEqual([expect.objectContaining({ airport: "JFK" })]);
  });

  it("should be case-insensitive", () => {
    const filteredFlights = flights.filter(filterByAirport("lax"));
    expect(filteredFlights).toEqual([expect.objectContaining({ airport: "LAX" })]);
  });

  it("should return an empty array if no flights match the airport", () => {
    const filteredFlights = flights.filter(filterByAirport("SFO"));
    expect(filteredFlights).toEqual([]);
  });
});