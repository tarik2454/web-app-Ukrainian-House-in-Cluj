import { SpriteSVG } from "../../assets/images/SpriteSVG";

const icons = [
  { name: "telegram", link: "#", paddingTop: "pt-[2px]" },
  { name: "instagram", link: "#", paddingTop: "pt-[3px]" },
  { name: "facebook", link: "#", paddingTop: "" },
];

export default function IconsBlock() {
  return (
    <ul className="flex justify-items-center gap-3">
      {icons.map((icon, index) => (
        <li
          key={index}
          className={`relative flex h-fit transition-all duration-250 hover:text-ukraniane-end focus:text-ukraniane-end ${icon.paddingTop} after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-6 after:w-6 after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:rounded-full after:bg-transparent after:transition-all after:duration-250 after:content-[''] after:hover:bg-ukraniane-via after:focus:bg-ukraniane-via`}
        >
          <a href={icon.link}>
            <SpriteSVG name={icon.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}
