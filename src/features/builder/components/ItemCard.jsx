const ItemCard = ({ item, onClick, isSelected }) => {
  return (
    <div className="item" onClick={onClick}>
      {item?.image && (
        <img
          src={item.image}
          alt={item.name}
          style={{ width: 40, height: 40 }}
        />
      )}

      <div>
        <div style={{ fontWeight: 600 }}>{item.name}</div>

        {/* mini stats preview (optioneel) */}
        <div className="mini-stats">
          {item.attack?.map((atk) => (
            <span key={atk.name} style={{ marginRight: 8 }}>
              {atk.name.slice(0, 3)}: {atk.amount}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ItemCard;