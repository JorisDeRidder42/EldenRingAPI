import { useState } from "react";

const Search = ({search, setSearch}) => {

  return (
    <input type="search" className="search" placeholder="search weapons..." aria-label="Search through the weapons" value={search} onChange={(event) => setSearch(event.target.value)}/>
  )
}
export default Search;