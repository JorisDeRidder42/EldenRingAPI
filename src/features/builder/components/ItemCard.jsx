const ItemCard = ({ item, onClick }) => {
  return (
    <div className="item" onClick={onClick}>
      <div>
        <div className="item-name">{item.name}</div>
        {item?.image && (
        <img className="item-img"
          src={item.image}
          alt={item.name}
        />
      )}
        {/* mini stats preview (optioneel) */}
        <div className="mini-stats">
          {item.attack?.map((atk) => (
            <span key={atk.name} className="item-span">
              {atk.name.slice(0, 3)}: {atk.amount}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ItemCard;