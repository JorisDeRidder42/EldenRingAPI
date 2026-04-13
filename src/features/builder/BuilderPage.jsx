import { useBuilder } from "./useBuilder";
import Slot from "../builder/components/slots";
import ItemCard from "../builder/components/ItemCard";
import StatsPanel from "./StatsPanel";
import { useItems } from "./hooks/useItems";

const BuilderPage = () => {
  const { data: weaponsData } = useItems("/weapons");
  const { data: armorsData } = useItems("/armors");


  const weapons = weaponsData.data ?? [];
  const armors = armorsData.data ?? [];  
  
  const { build, selectedSlot, selectSlot, equip } = useBuilder();


    const items = (() => {
    switch (selectedSlot) {
      case "rightHand":
      case "leftHand":
        return weapons;

    case "head":
      return armors.filter(item =>
        item.category?.toLowerCase().includes("helm")
        
      );

    case "chest":
      return armors.filter(item =>
        item.category?.toLowerCase().includes("chest")
      );

    case "legs":
      return armors.filter(item =>
        item.category?.toLowerCase().includes("leg")
      );
      case "hands":
      return armors.filter(item =>
        item.category?.toLowerCase().includes("gauntlet")
      );

    default:
      return [];
  }
})();
  console.log('items', items);
  
  return (
    <div className="build-slot">

      {/* LEFT: ITEMS */}
      <div className="left">
        <h2>Weapons</h2>
        {items.length === 0 && <h2>No items available</h2>}
        {items?.map(item => (
          <ItemCard className="item-card"
            item={item}
            key={item.id}
            onClick={() => equip(item)}
            isSelected={build[selectedSlot]?.id === item.id}
            >
            <strong>{item.name}</strong>
            <img
              src={item.image}
              alt={item.name}
            />
          </ItemCard>
        ))}
      </div>

      {/* RIGHT: BUILD */}
      <div className="right">
        <h2>Build</h2>
        <h5>Selected slot: {selectedSlot || "None"}</h5>

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
          label="Hands"
          active={selectedSlot === "hands"}
          onClick={() => selectSlot("hands")}
          item={build.hands}
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
      <StatsPanel build={build}/>
    </div>
  );
}

export default BuilderPage;