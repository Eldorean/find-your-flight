import './FlightDisplayContainer.css'

type FlightDisplayContainerProps = {
  children: React.ReactNode
}

const FlightDisplayContainer = ({ children }: FlightDisplayContainerProps) => (
  <div className='flightDisplayContainer'>
    {children}
  </div>
)

export default FlightDisplayContainer