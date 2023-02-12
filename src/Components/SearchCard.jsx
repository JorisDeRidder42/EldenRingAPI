const SearchCard = ({name, setName}) => {
    return (
        <>
        <input type={'text'} value={name} onChange={(evt) => setName(evt.target.value)} placeholder={'Search item'}/>
        {name}
        </>
    )
}
export default SearchCard;