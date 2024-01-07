import { useContext } from "react"
import { UserNameContext } from "../context/UsernameContext"

function User() {

    const username = useContext(UserNameContext)

  return (
    <div className="main">
      <h2>
        User: {username}
      </h2>
    </div>
  )
}

export default User
