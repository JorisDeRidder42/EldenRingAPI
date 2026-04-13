export const calculateStats = (build) => {
  const items = Object.values(build).filter(Boolean);


      let attack = 0;
      let defense = 0;
      let weight = 0;

      items.forEach((item) => {
        attack += item?.attack?.physical ?? item?.attack ?? 0;
        defense += item?.defense?.physical ?? item?.defense ?? 0;
        weight += item?.weight ?? 0;
      });
      const stats = { attack, defense, weight };
      console.log('stats', stats);
      return stats;
};

export default calculateStats;