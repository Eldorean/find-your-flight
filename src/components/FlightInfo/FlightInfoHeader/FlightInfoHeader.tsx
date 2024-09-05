import "./FlightInfoHeader.css"

type FlightInfoHeaderProps = {
  onSort: (key: 'date' | 'expectedTime') => void;
};

const FlightInfoHeader = ({onSort}: FlightInfoHeaderProps) => (
  <div className='flightInfoLayout header'>
      <div>Flightnumber</div>
      <div>FlightTag </div>
      <div>Airport</div>
      <div onClick={() => onSort('date')}>date</div>
      <div onClick={() => onSort('expectedTime')}>expected time</div>
  </div>
);

export default FlightInfoHeader;
