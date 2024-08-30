import { Link } from 'react-router-dom';
import useRoutesByKey from '../../../shared/hooks/useRoutesByKey';

export default function NavBar() {
  const { routes, activePath, handleClickLink } = useRoutesByKey([
    'ADMIN_MAIN',
    'CREATE_NEWS',
    'CREATE_SCHEDULE',
    'CREATE_EVENT',
  ]);

  return (
    <nav className="hidden md:block">
      <ul className="ml-10 flex items-baseline space-x-4">
        {routes.map(({ path, name }, index) => (
          <li key={index}>
            <Link
              to={path}
              onClick={() => handleClickLink(path)}
              className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 
              hover:bg-gray-700 hover:text-white ${
                activePath === path ? 'bg-gray-700' : ''
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
