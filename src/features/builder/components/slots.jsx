function Slot({ label, item, onClick, active }) {
  return (
    <div className={`slot ${active ? "active" : ""}`} onClick={onClick}>
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