import { useState } from "react";

export function useBuilder() {

  const [selectedSlot, setSelectedSlot] = useState("rightHand");

  const [build, setBuild] = useState({
    rightHand: null,
    leftHand: null,
    head: null,
    chest: null,
    legs: null,
    hands: null,
  });

  function selectSlot(slot) {
    setSelectedSlot(slot);
  }

  function equip(item) {
    setBuild(prev => ({
      ...prev,
      [selectedSlot]: item,
    }));
  }

  function reset() {
    setBuild({
      rightHand: null,
      leftHand: null,
      head: null,
      chest: null,
      legs: null,
      hands: null,
    });
  }

  return {
    build,
    selectedSlot,
    selectSlot,
    equip,
    reset,
  };
}