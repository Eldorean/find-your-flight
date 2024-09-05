import { FlightInfoHeader, FlightInfoItem } from '../../../../components/FlightInfo';
import List from '../../../../components/List/List';
import useAsync from '../../../../hooks/useAsync';
import fetchFlightData from '../../../../utils/flightData/fetchFlightdata';
import filterByAirport from '../../../../utils/flightData/filterByAirport';
import sortBykey from '../../../../utils/sortBykey/sortBykey';
import './FlightInfoDisplay.css';

type FlightInfoDisplayProps = {
  query?: string;
};

const FlightInfoDisplay = ({ query }: FlightInfoDisplayProps) => {
  const {loading, value} = useAsync(fetchFlightData);

  const parsedFlights = (
    value?.flights
    .filter(filterByAirport(query))
    .sort(sortBykey('airport'))
    .slice(0, 5)
    .map(flight => ({ id: flight.flightIdentifier, ...flight }))
  )

  return (
    loading ? <div>Loading...</div> :
    <>
      <FlightInfoHeader />
      <List items={parsedFlights || []} element={FlightInfoItem} />
    </>
  );
};

export default FlightInfoDisplay;