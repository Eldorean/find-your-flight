
import { useState } from "react";
import TextInput from "../../components/Input";
import FlightInfoDisplay from "./components/FlightInfoDisplay/FlightInfoDisplay";

const FindYourFlight = () => {
  const [query, setQuery] = useState('');

  const onChangehandler = (e: string) => {
    setQuery(e);
  }

  const showFlights = query.length > 2;

  return (
    <>
      <TextInput onChange={onChangehandler} value=""  />
      {showFlights && <FlightInfoDisplay query={query} />}
    </>
  )
};

export default FindYourFlight;