import italian from '../../img/sponsors/italian.png';
import patrir from '../../img/sponsors/patrir.png';
import unhcr from '../../img/sponsors/unhcr.png';

export default function Sponsors() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <img src={italian} alt="Italian" />
      <img src={patrir} alt="Patrir" />
      <img src={unhcr} alt="UNHCR" />
    </div>
  );
}
