import { NavLink } from 'react-router-dom';

import useRoutesByKey from '../hooks/useRoutesByKey';

export default function NavBar() {
  const routes = useRoutesByKey([
    'ROOT',
    'NEWS',
    'WORK_SCHEDULE',
    'EVENTS',
    'ABOUT_US',
  ]);

  return (
    <nav>
      <ul className="flex gap-[30px]">
        {routes.map((item, index) => (
          <li key={index} className="relative">
            <NavLink
              className="text-black-200 text-xl 
              after:block after:content-[''] after:w-full after:h-[1.5px] after:bg-black-200 after:scale-0 after:absolute after:-bottom-[2px] after:transition-all
              hover:after:scale-100 focus:after:scale-100
              dark:text-dark-title dark:after:bg-dark-title"
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
