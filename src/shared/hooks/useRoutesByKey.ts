import { useMemo, useState } from 'react';
import { routes, Route } from '../../constants/routes';
import { useLocation } from 'react-router-dom';

interface UseRoutesResult {
  routes: Route[];
  activePath: string;
  handleClickLink: (path: string) => void;
}

export default function useRoutesByKey(
  keys: (keyof typeof routes)[]
): UseRoutesResult {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const routeList = useMemo(() => {
    return keys.map(key => routes[key]);
  }, [keys]);

  const handleClickLink = (path: string) => {
    setActivePath(path);
  };

  return {
    routes: routeList,
    activePath,
    handleClickLink,
  };
}
