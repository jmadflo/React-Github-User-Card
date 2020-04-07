import React from 'react'
import UserCard from './UserCard'

const MainUser = ({ mainUser }) => {
    return (
        <div className="MainUser">
            <h2>Main User</h2>
            <UserCard user={mainUser}/>
        </div>
    )
}

export default MainUser