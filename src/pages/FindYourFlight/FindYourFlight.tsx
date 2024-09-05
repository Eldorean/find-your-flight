
import { useState } from "react";
import TextInput from "../../components/TextInput";
import FlightInfoDisplay from "./components/FlightInfoDisplay/FlightInfoDisplay";
import FlightDisplayContainer from "./components/FlightDisplayContainer";

const FindYourFlight = () => {
  const [query, setQuery] = useState('');

  const onChangehandler = (e: string) => {
    setQuery(e);
  }

  const showFlights = query.length > 2;

  return (
    <FlightDisplayContainer>
      <TextInput onChange={onChangehandler} value={query} placeholder="Find your flight" />
      {showFlights && <FlightInfoDisplay query={query} />}
    </FlightDisplayContainer>
  )
};

export default FindYourFlight;