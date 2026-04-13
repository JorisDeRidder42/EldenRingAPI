import Stat from '../builder/stat';
import {calculateStats} from '../builder/utils/calculateStats';
import { useBuilder } from './useBuilder';
const StatsPanel = () => {
    const { build } = useBuilder();
    const stats = calculateStats(build);

    return(
        <div className="statsPanel">
  
  <h2>Stats</h2>

  {/* DAMAGE */}
  <div className="statsSection">
    <h3>Attack</h3>
    <Stat label="Physical" value={stats.attack} />
    <Stat label="Magic" value={stats.magic} />
    <Stat label="Fire" value={stats.fire} />
    <Stat label="Lightning" value={stats.lightning} />
    <Stat label="Holy" value={stats.holy} />
    <Stat label="Crit" value={stats.crit} />
  </div>

  {/* DEFENSE */}
  <div className="statsSection">
    <h3>Defense</h3>
    <Stat label="Physical" value={stats.defense} />
    <Stat label="Magic" value={stats.magicDef} />
    <Stat label="Fire" value={stats.fireDef} />
    <Stat label="Lightning" value={stats.lightningDef} />
    <Stat label="Holy" value={stats.holyDef} />
    <Stat label="Boost" value={stats.boost} />
  </div>

  {/* WEIGHT */}
  <div className="statsSection">
    <h3>Weight</h3>
    <Stat label="Equip Load" value={stats.weight} />
  </div>

</div>
    )
}
export default StatsPanel;