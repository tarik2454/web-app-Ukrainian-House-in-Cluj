import { SpriteSVG } from '../../img/SpriteSVG';

const icons = [
  { name: 'telegram', link: '#', paddingTop: 'pt-[2px]' },
  { name: 'instagram', link: '#', paddingTop: 'pt-[3px]' },
  { name: 'facebook', link: '#', paddingTop: '' },
];

export default function IconsBlock() {
  return (
    <ul className="flex gap-3 justify-items-center">
      {icons.map((icon, index) => (
        <li
          key={index}
          className={`hover:text-blue-600 focus:text-blue-600 transition-all duration-250 ${icon.paddingTop}`}
        >
          <a href={icon.link}>
            <SpriteSVG name={icon.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}
