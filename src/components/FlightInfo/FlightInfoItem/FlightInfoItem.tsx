import "./FlightInfoItem.css";
import "../FlightInfo.css";

type FlightInfoItemProps = {
  flightNumber: string;
  flightIdentifier: string;
  airport: string;
  date: string;
  expectedTime: string;
  rowNumber: number;
};



const FlightInfoItem = ({ flightNumber, flightIdentifier, airport, date, expectedTime, rowNumber }: FlightInfoItemProps) => {
  const parity = rowNumber % 2 === 0 ? 'even' : 'odd';
  const className = `flightInfoLayout item ${parity}`;

  return (
    <div className={className}>
      <div>{flightNumber}</div>
      <div>{flightIdentifier}</div>
      <div>{airport}</div>
      <div>{date}</div>
      <div>{expectedTime}</div>
    </div>
  )
}

export default FlightInfoItem;