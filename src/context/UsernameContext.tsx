import { createContext,useState } from "react"

// store for send data
const UserNameContext = createContext()

export {
    UserNameContext
}

type Pro = {
    title?: string;
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

function CreateContextProvider({ childern }: Pro){

    const [userName, setUsername] = useState < string > ('amir abas')

    
    return (
        <UserNameContext.Provider value={userName}>
            {childern}
        </UserNameContext.Provider>
    )
}

export default CreateContextProvider
