import { SpriteSVG } from '../../img/SpriteSVG';

export default function IconsBlock() {
  return (
    <ul className="flex gap-3 justify-items-center">
      <li className="pt-[2px]">
        <a href="#">
          <SpriteSVG name="telegram" />
        </a>
      </li>
      <li className="pt-[3px]">
        <a href="#">
          <SpriteSVG name="instagram" />
        </a>
      </li>
      <li className="">
        <a href="#">
          <SpriteSVG name="facebook" />
        </a>
      </li>
    </ul>
  );
}
