const ItemCard = ({ item, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        cursor: "pointer",
        background: "#2a2a2a",
        border: isSelected ? "2px solid gold" : "1px solid #444",
        transition: "0.2s",
      }}
    >
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
        <div style={{ fontSize: 12, opacity: 0.8 }}>
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