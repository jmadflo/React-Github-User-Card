import React from 'react'

const UserCard = props => {
    const { url, name, login, avatar_url, public_repos, location, hireable } = props.user
    return (
        <div className='UserCard'>
            <a href={url}>
                <h3>{name}</h3>
                <img src={avatar_url} alt="user's profile avatar"/>
                <div className="userContent">
                    <p><strong>Username: </strong>{login}</p>
                    <p><strong>Number of Public Repositories: </strong>{public_repos}</p>
                    <p><strong>Location: </strong>{location}</p>
                    <p><strong>{hireable ? 'Is Hireable' : 'Is Not Hireable'}</strong></p>
                </div>
                
            </a>
        </div>
    )
}

export default UserCard