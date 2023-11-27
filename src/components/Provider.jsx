import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

export const UserContext = React.createContext();

const Provider = ({children}) => {

    const [user, setUser]=useState({
        name: "",
        email: ""
    })

    const UserValue = useMemo(() => {
        user,
        login= () => setUser({
            ...user, 
            [name]: value
        }),
        logout= () => setUser({
            name: "", 
            email: ""
        })
    }, [user])

  return (
    <UserContext.Provider value={UserValue}>
        {children}
    </UserContext.Provider>
  )
}

export default Provider;