import useAsync from "../../hooks/useAsync";
import fetchFlightData from "../../utils/fetchFlightData/fetchFlightdata";

const Test = () => {
  const { loading, value } = useAsync(fetchFlightData);


  return !loading ? (
      <>{JSON.stringify(value)}</>
    ) : ( 
      <>loading</>
    )
}
export default Test;
