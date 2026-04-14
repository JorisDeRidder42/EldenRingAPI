import { useBuilder } from "./useBuilder";
import Slot from "../builder/components/slots";
import ItemCard from "../builder/components/ItemCard";
import StatsPanel from "./StatsPanel";
import { useItems } from "./hooks/useItems";
import Search from "./components/Search";
import { useState } from "react";
import { useFilter } from "./hooks/useFilter";

const BuilderPage = () => {
  const { data: weaponsData } = useItems("/weapons");
  const { data: armorsData } = useItems("/armors");

  const [search, setSearch] = useState('');  
  
  
  const weapons = weaponsData.data ?? [];
  const armors = armorsData.data ?? [];  
  
  const { build, selectedSlot, selectSlot, equip } = useBuilder();

  
    const titleMap = {
        rightHand: "Weapons",
        leftHand: "Weapons",
        head: "Helmets",
        chest: "Chest Armor",
        legs: "Leg Armor",
        hands: "Gauntlets",
  };


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
  const filteredItems = useFilter({items, search});

  return (
    <>
    <Search search={search} setSearch={setSearch} className="search"/>
      <div className="build-slot">


        {/* LEFT: ITEMS */}
        <div className="left">
          <div className="item-list">
            {!selectedSlot && <p>Choose a slot to start</p>}
            <h2>{titleMap[selectedSlot] || "Select a slot"}</h2>
            {filteredItems.length === 0 ? <p>No items available</p> : <h5>{filteredItems.length} items available</h5>}
            {filteredItems?.map(item => (
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
    </>
  );
}

export default BuilderPage;