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
          className={`relative flex h-fit hover:text-ukraniane-end focus:text-ukraniane-end transition-all duration-250 ${icon.paddingTop} 
          after:content-[''] after:w-6 after:h-6 after:bg-transparent after:rounded-full after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-250 after:absolute after:-z-10  
          after:hover:bg-ukraniane-via after:focus:bg-ukraniane-via`}
        >
          <a href={icon.link}>
            <SpriteSVG name={icon.name} className={''} />
          </a>
        </li>
      ))}
    </ul>
  );
}
