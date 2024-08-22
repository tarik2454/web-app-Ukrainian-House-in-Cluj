import { NavLink } from 'react-router-dom';
import routes from '../../constants/routes';

const navItems = [
  { path: routes.ROOT.path, label: 'Головна' },
  { path: routes.NEWS.path, label: 'Новини' },
  { path: routes.WORK_SCHEDULE.path, label: 'Графік роботи' },
  { path: routes.EVENTS.path, label: 'Події' },
  { path: routes.ABOUT_US.path, label: 'Про нас' },
];

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-[30px]">
        {navItems.map((item, index) => (
          <li key={index} className="relative">
            <NavLink
              className="text-black-200 text-xl 
              after:block after:content-[''] after:w-full after:h-[1.5px] after:bg-black-200 after:scale-0 after:absolute after:-bottom-[2px] after:transition-all
              hover:after:scale-100 focus:after:scale-100
              dark:text-dark-title dark:after:bg-dark-title"
              to={item.path}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
