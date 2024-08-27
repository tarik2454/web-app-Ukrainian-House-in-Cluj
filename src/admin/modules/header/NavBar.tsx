import { Link, useLocation } from 'react-router-dom';
import useRoutesByKey from '../../../shared/hooks/useRoutesByKey';
import { useState } from 'react';

export default function NavBar() {
  const routes = useRoutesByKey(['ADMIN_MAIN', 'CREATE_NEWS', 'CREATE_EVENT']);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleClickLink = (path: string) => {
    setActivePath(path);
  };

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
