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

      <div style={{ marginTop: 5 }}>
        {item ? (
          <div>
            <div>{item.name}</div>
          </div>
        ) : (
          <span style={{ opacity: 0.5 }}>Empty</span>
        )}
      </div>
    </div>
  );
}

export default Slot;