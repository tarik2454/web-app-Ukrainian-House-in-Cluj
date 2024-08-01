import routes from '../../constants/routes';

const navItems = [
  { path: routes.HOME, label: 'Головна' },
  { path: routes.NEWS, label: 'Новини' },
  { path: routes.EVENTS, label: 'Події' },
  { path: routes.ABOUT_US, label: 'Про нас' },
];

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-[30px]">
        {navItems.map((item, index) => (
          <li key={index}>
            <a className="text-black-200 text-xl" href={item.path}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
