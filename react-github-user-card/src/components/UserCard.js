import React from 'react'

const UserCard = props => {
    const { url, name, login, avatar_url, public_repos, location, hireable } = props.user
    
    const fixUrl = (urlParam) => {
        let string=`${urlParam}`.replace('api.', '')
        string = string.toString().replace('/users', '')
        console.log(string)
        return string
    }
    return (
        <div className='UserCard'>
            <a href={fixUrl(url)}>
                <h3>{name}</h3>
                <img src={avatar_url} alt={`${name}'s profile avatar`}/>
                <div className="userContent">
                    <p><strong>Username: </strong>{login}</p>
                    <div style={props.showDetails ? {display: 'block'} : {display: 'none'}}>
                        <p><strong>Number of Public Repositories: </strong>{public_repos}</p>
                        <p><strong>Location: </strong>{location}</p>
                        <p><strong>Is Hireable: </strong>{hireable ? 'Yes' : 'No'}</p>
                    </div>         
                </div>
                
            </a>
        </div>
    )
}

export default UserCard