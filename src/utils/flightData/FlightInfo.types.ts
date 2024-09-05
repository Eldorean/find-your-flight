export interface FlightInfoType extends Record<string, unknown> {
  flightIdentifier: string;
  flightNumber: string;
  airport: string;
  date: string;
  expectedTime: string;
  originalTime: string;
  url: string;
  score: string;
}

export interface FlightsResponse extends Record<string, unknown> {
  flights: FlightInfoType[]
};