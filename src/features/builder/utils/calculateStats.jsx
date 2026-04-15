export const calculateStats = (build) => {
  const items = Object.values(build).filter(Boolean);


  const stats = {
    attack: {
      phy: 0,
      mag: 0,
      fire: 0,
      light: 0,
      holy: 0,
      crit: 0,
    },
    defense: {
      phy: 0,
      mag: 0,
      fire: 0,
      light: 0,
      holy: 0,
      boost: 0,
    },
    weight: 0,
  };
    items.forEach((item) => {
      item.attack?.forEach((a) => {
        const key = a.name.toLowerCase();
        if (stats.attack[key] !== undefined) {
          stats.attack[key] += a.amount;
        }
      });

    item.defence?.forEach((d) => {
      const key = d.name.toLowerCase();
      if (stats.defense[key] !== undefined) {
        stats.defense[key] += d.amount;
      }
    });

    stats.weight += item.weight ?? 0;
  });
      return stats;
};

export default calculateStats;