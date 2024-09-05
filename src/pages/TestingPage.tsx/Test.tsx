import { FlightInfoHeader, FlightInfoItem } from "../../components/FlightInfo";

const Test = () => {
  return (
    <div>
      <FlightInfoHeader />
      <FlightInfoItem flightNumber="123" flightIdentifier="ABC" airport="LAX" date="2021-01-01" />
    </div>
  )
}
export default Test;
