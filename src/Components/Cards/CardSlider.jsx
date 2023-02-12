const CardSlider = ({limit, setLimit}) => {
    return(
        <>
        <input type={'range'} value={limit} min={8} max={40} onChange={(evt) => setLimit(evt.target.value)}/>
        {limit}
        </>
    )
}

export default CardSlider;