import React from 'react'

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit }) => {
  return (
    <div className="search-bar">
        <form onSubmit={onSearchSubmit}>
        <input
            type="text"
            placeholder="Search for a movie..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
        />
        <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBar
