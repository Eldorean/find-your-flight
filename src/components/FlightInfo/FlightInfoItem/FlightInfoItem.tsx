import { FlightInfoType } from "../../../utils/fetchFlightData/FlightInfo.types";
import "./FlightInfoItem.css";
import "../FlightInfo.css";

type FlightInfoItemProps = Pick<FlightInfoType, 'flightNumber' | 'flightIdentifier' | 'airport' | 'date'>;

const FlightInfoItem = ({ flightNumber, flightIdentifier, airport, date }: FlightInfoItemProps) => (
  <div className='flightInfoLayout item'>
    <div>{flightNumber}</div>
    <div>{flightIdentifier}</div>
    <div>{airport}</div>
    <div>{date}</div>
  </div>
);

export default FlightInfoItem;