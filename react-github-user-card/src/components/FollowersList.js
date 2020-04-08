import React from 'react'
import UserCard from './UserCard'

const FollowersList = ({ followers }) => {
    return (
        <div className="FollowersList">
            <h2>Follower List</h2>
            <div className="followerItems">
                {followers.map(follower => {
                    return <UserCard key={follower.id} user={follower} showDetails={false}/> 
                })}
            </div>
        </div>
    )
}

export default FollowersList