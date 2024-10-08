import { Link } from 'react-router-dom';
import useRoutesByKey from '../hooks/useRoutesByKey';

export default function NavBar() {
  const { routes, activePath, handleClickLink } = useRoutesByKey([
    'ROOT',
    'NEWS',
    'WORK_SCHEDULE',
    'EVENTS',
    'ABOUT_US',
  ]);

  return (
    <nav>
      <ul className="flex gap-[30px]">
        {routes.map(({ path, name }, index) => (
          <li key={index} className="relative">
            <Link
              className={`text-black-200 text-xl 
              after:block after:content-[''] after:w-full after:h-[1.5px] after:bg-black-200 after:scale-0 after:absolute after:-bottom-[2px] after:transition-all
              hover:after:scale-100 focus:after:scale-100
              ${activePath === path ? 'after:scale-100 fter:scale-100' : ''}
              dark:text-dark-title dark:after:bg-dark-title`}
              to={path}
              onClick={() => handleClickLink(path)}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
