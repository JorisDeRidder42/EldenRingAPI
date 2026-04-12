import { useBuilder } from "./useBuilder";
import { useWeapons } from "../../Hooks/path/useWeapons";
import { useArmors } from "../../Hooks/useArmors";
import Slot from "../builder/slots";
import ItemCard from "../../Components/ItemCard";

export default function BuilderPage() {
  const { data: weaponsData } = useWeapons();
  const { data: armorData } = useArmors();

  // FIX: juiste data extractie
const weapons = weaponsData?.data ?? [];
const armors = armorData?.data ?? [];

  const { build, selectedSlot, selectSlot, equip } = useBuilder();


const isArmorSlot = ["head", "chest", "legs"].includes(selectedSlot);

const items = isArmorSlot ? armors : weapons;

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>

      {/* LEFT: ITEMS */}
      <div
        style={{
          flex: 1,
          background: "#2a2a2a",
          color: "white",
          padding: 20,
          borderRadius: 10,
          minHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <h2>Weapons</h2>

        {items?.map(item => (
          <ItemCard
            item={item}
            key={item.id}
            onClick={() => equip(item)}
            style={{
              border: "1px solid gray",
              padding: 10,
              marginBottom: 10,
              cursor: "pointer",
              borderRadius: 6,
              background: "#2a2a2a",
            }}
          >
            <strong>{item.name}</strong>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
          </ItemCard>
        ))}
      </div>

      {/* RIGHT: BUILD */}
      <div
        style={{
          flex: 1,
          background: "#2a2a2a",
          color: "white",
          padding: 20,
          borderRadius: 10,
          minHeight: "100vh",
        }}
      >
        <h2>Build</h2>
        <h3>Selected slot: {selectedSlot}</h3>

        <Slot
          label="Right Hand"
          active={selectedSlot === "rightHand"}
          onClick={() => selectSlot("rightHand")}
          item={build.rightHand}
        />

        <Slot
          label="Left Hand"
          active={selectedSlot === "leftHand"}
          onClick={() => selectSlot("leftHand")}
          item={build.leftHand}
        />

        <Slot
          label="Head"
          active={selectedSlot === "head"}
          onClick={() => selectSlot("head")}
          item={build.head}
        />

        <Slot
          label="Chest"
          active={selectedSlot === "chest"}
          onClick={() => selectSlot("chest")}
          item={build.chest}
        />

        <Slot
          label="Legs"
          active={selectedSlot === "legs"}
          onClick={() => selectSlot("legs")}
          item={build.legs}
        />
      </div>
    </div>
  );
}