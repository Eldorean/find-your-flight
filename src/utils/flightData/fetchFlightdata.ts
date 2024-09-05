import { FlightsResponse } from "./FlightInfo.types";

const fetchFlightData = () => new Promise<FlightsResponse>((resolve, reject) => {
  fetch(`${window.location.origin}/flights.json`)
    .then((response) => {
      if (!response.ok) {
        reject('Failed to fetch data');
      }
      resolve(response.json());
    }).catch(() => {
      reject('Failed to fetch data');
    })
});

export default fetchFlightData;