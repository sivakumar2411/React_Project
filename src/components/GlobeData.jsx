import React, { useEffect, useMemo, useState } from 'react'

export const UserContext =React.createContext();

const GlobeData = ({children}) => {
    const [ADOUser,setADOUser]=useState(()=>
    {
      const sdata=localStorage.getItem('ADOUser');
      return sdata?JSON.parse(sdata):{};
    });
    const GUserdatamod = useMemo(() => {
        return ({
            ADOUser,
            LogIn:(Udata)=>{setADOUser(Udata)},
            LogOut:()=>{setADOUser({})}
        });
    },[ADOUser]);
    useEffect(()=>
    {
      localStorage.setItem('ADOUser',JSON.stringify(ADOUser));
    },[ADOUser])
  return (
    <UserContext.Provider value={GUserdatamod}>
        {children}
    </UserContext.Provider>
  )
}

export default GlobeData