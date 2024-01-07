import User from "./components/User"
import CreateContextProvider from "./context/UsernameContext"

function App() {

  
  return (
  <CreateContextProvider>
    <div>
      <User />
    </div>
  </CreateContextProvider>
  )
}

export default App
