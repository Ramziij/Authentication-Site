import { useTour } from '@reactour/tour'

function App() {
  const { setIsOpen } = useTour()
  return (
    <>
      <p className="first-step">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
        finibus nulla, quis varius justo. Vestibulum lorem lorem, viverra porta
        metus nec, porta luctus orci
      </p>

      <p className="second-step">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
        finibus nulla, quis varius justo. Vestibulum lorem lorem, viverra porta
        metus nec, porta luctus orci
      </p>
      
      <button onClick={() => setIsOpen(true)}>Open Tour</button>
    </>
  )
}

export default App;
