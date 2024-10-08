import { Link } from 'react-router-dom';

import useRoutesByKey from '../../../shared/hooks/useRoutesByKey';
import MobileProfile from './MobileProfile';

export default function MobileNavBar({
  navBarDisplay,
}: {
  navBarDisplay: string;
}) {
  const { routes, activePath, handleClickLink } = useRoutesByKey([
    'ADMIN_MAIN',
    'CREATE_NEWS',
    'CREATE_SCHEDULE',
    'CREATE_EVENT',
  ]);

  return (
    <nav className={`${navBarDisplay} md:hidden`}>
      <ul className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        {routes.map(({ path, name }, index) => (
          <li key={index}>
            <Link
              to={path}
              onClick={() => handleClickLink(path)}
              className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 
                hover:bg-gray-700 hover:text-white ${
                  activePath === path ? 'bg-gray-700 text-white' : ''
                }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <MobileProfile />
    </nav>
  );
}
