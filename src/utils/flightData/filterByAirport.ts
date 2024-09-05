import { FlightInfoType } from "./FlightInfo.types";

const filterByAirport = (airport: string = '') => (flight: FlightInfoType) => 
  flight.airport.toLocaleLowerCase().startsWith(airport.toLocaleLowerCase());

export default filterByAirport;