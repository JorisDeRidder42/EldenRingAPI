import { useState } from "react";

const SearchWrapper = () => {
    const [search, setSearch] = useState('');
    return(
        <>
         <input type={"text"} value={search} onChange={(evt) => setSearch(evt.target.value)} placeholder={'Search your item here'}/>
         <input type={"submit"} placeholder='Search'/>
          {console.log(search)}
        </>
    );
}
export default SearchWrapper;