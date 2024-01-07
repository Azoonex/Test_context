import { useState } from "react"
import User from './components/User'
import { UserNameContext } from "./context/UsernameContext"

function App() {

  const [userName, setUsername] = useState < string > ('amir abas')
  
  return (
   <UserNameContext.Provider
   value={userName}
   >
      <div>
        <User />
      </div>
   </UserNameContext.Provider>
  )
}

export default App
