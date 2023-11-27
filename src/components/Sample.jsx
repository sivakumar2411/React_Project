import React, { useContext } from 'react'
import { UserContext } from './Provider';

const Sample = () => {

    const {user, login, logout} = useContext(UserContext)

  return (
    <div>
        {user.name}, {user.email}
        <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default Sample;