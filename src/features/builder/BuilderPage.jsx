import { useBuilder } from "./useBuilder";
import {useWeapons} from '../../Hooks/path/useWeapons';
import Slot from "../builder/slots";

export default function BuilderPage() {
  const { data } = useWeapons();
  const weapons = data.data || [];
  console.log("data:", data);
console.log("weapons:", weapons);
console.log("is array:", Array.isArray(weapons));
console.log("length:", weapons?.length);

  const { build, selectedSlot, selectSlot, equip } = useBuilder();


  const slotConfig = {
    rightHand: "weapons",
    leftHand: "weapons",
    head: "armor",
    chest: "armors",
    legs: "armors",
  }

  const filteredItems = weapons

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>

      {/* LEFT: ITEMS */}
      <div style={{ flex: 1 }}>
        <h2>Weapons</h2>

        {weapons.map(item => (
          <div
            key={item.id}
            onClick={() => equip(item)}
            style={{
              border: "1px solid gray",
              padding: 10,
              marginBottom: 10,
              cursor: "pointer",
              color:'white',
            }}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* RIGHT: BUILD */}
      <div style={{ flex: 1 }}>
        <h2>Build (selected: {selectedSlot})</h2>

        <Slot label="Right Hand" active={selectedSlot === "rightHand"} onClick={() => selectSlot("rightHand")} item={build.rightHand} />

        <Slot label="Left Hand" active={selectedSlot === "leftHand"} onClick={() => selectSlot("leftHand")} item={build.leftHand} />

        <Slot label="Head" active={selectedSlot === "head"} onClick={() => selectSlot("head")} item={build.head} />

        <Slot label="Chest" active={selectedSlot === "chest"} onClick={() => selectSlot("chest")} item={build.chest} />

        <Slot label="Legs" active={selectedSlot === "legs"} onClick={() => selectSlot("legs")} item={build.legs} />
      </div>
    </div>
  );
}