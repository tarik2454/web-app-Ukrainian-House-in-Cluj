import { useMemo } from 'react';
import { routes, Route } from '../../constants/routes';

export default function useRoutesByKey(keys: (keyof typeof routes)[]): Route[] {
  return useMemo(() => {
    return keys.map(key => routes[key]);
  }, [keys]);
}
