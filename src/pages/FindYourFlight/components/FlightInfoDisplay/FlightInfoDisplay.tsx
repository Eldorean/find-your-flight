import { useState } from 'react';
import { FlightInfoHeader, FlightInfoItem } from '../../../../components/FlightInfo';
import List from '../../../../components/List/List';
import useAsync from '../../../../hooks/useAsync';
import fetchFlightData from '../../../../utils/flightData/fetchFlightdata';
import filterByAirport from '../../../../utils/flightData/filterByAirport';
import sortBykey from '../../../../utils/sortBykey/sortBykey';

type FlightInfoDisplayProps = {
  query?: string;
};

type SortProps = {key: string, direction: 'asc' | 'desc'}

const FlightInfoDisplay = ({ query }: FlightInfoDisplayProps) => {
  const {loading, value} = useAsync(fetchFlightData);
  const [sortKey, setSortKey] = useState<SortProps>({key: 'airport', direction: 'asc'});

  const parsedFlights = (
    value?.flights
    .filter(filterByAirport(query))
    .sort(sortBykey(sortKey.key, sortKey.direction))
    .slice(0, 5)
    .map(flight => ({ id: flight.flightIdentifier, ...flight }))
  ) || [];

  const handleSort = (key: string) => {
    const direction = (
      sortKey.key === key && 
      sortKey.direction === 'asc' ? 
      'desc' : 'asc'
    )
    console.log(sortKey)
    setSortKey({
      key,
      direction,
    });
  };

  const showFlights = parsedFlights.length > 0;

  return (
    loading ? <div>Loading...</div> :
    showFlights ? <>
      <FlightInfoHeader onSort={handleSort} />
      <List items={parsedFlights} element={FlightInfoItem} />
    </> : null
  );
};

export default FlightInfoDisplay;