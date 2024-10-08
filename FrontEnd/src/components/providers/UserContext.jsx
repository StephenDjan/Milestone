import { createContext, useState } from "react";

const UserContext = createContext()

export const UserContextprovider = ({children}) =>{

    const [userInfo, setUserInfo] = useState(null)


    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;