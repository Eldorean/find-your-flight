import { FlightInfoType } from "../../../utils/flightData/FlightInfo.types";
import "./FlightInfoItem.css";
import "../FlightInfo.css";

type FlightInfoItemProps = Pick<FlightInfoType, 'flightNumber' | 'flightIdentifier' | 'airport' | 'date' | 'expectedTime'>;

const FlightInfoItem = ({ flightNumber, flightIdentifier, airport, date, expectedTime }: FlightInfoItemProps) => (
  <div className='flightInfoLayout item'>
    <div>{flightNumber}</div>
    <div>{flightIdentifier}</div>
    <div>{airport}</div>
    <div>{date}</div>
    <div>{expectedTime}</div>
  </div>
);

export default FlightInfoItem;