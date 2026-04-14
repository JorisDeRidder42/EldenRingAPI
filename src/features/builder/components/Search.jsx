import { useState } from "react";

const Search = ({search, setSearch}) => {

  return (
    <input type="search" className="search" value={search} onChange={(event) => setSearch(event.target.value)}/>
  )
}
export default Search;