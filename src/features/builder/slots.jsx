function Slot({ label, item, onClick, active }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: active ? "2px solid red" : "1px solid black",
        padding: 10,
        marginBottom: 10,
        cursor: "pointer",
        borderRadius: 6,
        backgroundColor: active ? "#1a1a1a" : "transparent",
        color: active ? "white" : "black",
      }}
    >
       <strong>{label}</strong>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 5 }}>
            {item?.image && (
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 30, height: 30 }}
              />
            )}

            <span>{item?.name || "Empty"}</span>
          </div>
        </div>
  );
}

export default Slot;