import { FlightsResponse } from "./FlightInfo.types";

const getUrl = () => `${window.location.origin}/flights.json`;

const fetchFlightData = new Promise<FlightsResponse>((resolve, reject) => {
  fetch(getUrl())
    .then((response) => {
      if (!response.ok) {
        reject('Failed to fetch data');
      }
      resolve(response.json());
  });
});

export default fetchFlightData;