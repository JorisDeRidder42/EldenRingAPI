import Stat from '../builder/stat';
import {calculateStats} from '../builder/utils/calculateStats';
import { useBuilder } from './useBuilder';
const StatsPanel = ({build}) => {
    const stats = calculateStats(build);
    const MAX_WEIGHT = 50;
    const isOver = stats.weight > MAX_WEIGHT;

    return(
        <div className="statsPanel">
  

  <h2>Stats</h2>

  {/* DAMAGE */}
  <div className="statsSection">
    <h3>Attack</h3>
    <Stat label="Physical" value={stats.attack.phy} />
    <Stat label="Magic" value={stats.attack.mag} />
    <Stat label="Fire" value={stats.attack.fire} />
    <Stat label="Lightning" value={stats.attack.light} />
    <Stat label="Holy" value={stats.attack.holy} />
    <Stat label="Crit" value={stats.attack.crit} />
  </div>

  {/* DEFENSE */}
  <div className="statsSection">
    <h3>Defense</h3>
    <Stat label="Physical" value={stats.defense.phy} />
    <Stat label="Magic" value={stats.defense.mag} />
    <Stat label="Fire" value={stats.defense.fire} />
    <Stat label="Lightning" value={stats.defense.light} />
    <Stat label="Holy" value={stats.defense.holy} />
    <Stat label="Boost" value={stats.defense.boost} />
  </div>

  {/* WEIGHT */}
  <div className="statsSection">
    <h3>Weight</h3>
   <Stat label="Equip Load"
      value={stats.weight}
      className={isOver ? "weight over" : "weight"} />
  </div>

</div>
    )
}
export default StatsPanel;