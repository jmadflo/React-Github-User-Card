import React from 'react'

const SearchForm = props => {
    return (
        <form>
            <input type="text" name="SearchForm" placeholder="Search username" value={props.searchInputVal} onChange={props.updateSearchForm}/>
            <button onClick={props.submitNewUser}>Fetch User</button>
        </form>
    )
}

export default SearchForm