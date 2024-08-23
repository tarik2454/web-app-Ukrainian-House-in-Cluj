import { Link, useLocation } from 'react-router-dom';

import routes from '../../constants/routes';
import Container from './Container';

export default function Breadcrumbs() {
  const location = useLocation();

  const pathname = location.pathname.split('/').filter(Boolean);

  const routeValues = Object.values(routes);

  const breadcrumbLinks = pathname.map((segment, index) => {
    const routePath = `/${pathname.slice(0, index + 1).join('/')}`;
    const route = routeValues.find(route => route.path === routePath);
    const routeName = route?.name || segment;

    const isLast = index === pathname.length - 1;

    return (
      <span key={index}>
        {isLast ? (
          <span>{routeName}</span>
        ) : (
          <Link to={routePath}>{routeName}</Link>
        )}
        {!isLast && ' / '}
      </span>
    );
  });

  return (
    <div className="pt-3">
      <Container>
        <Link to={routes.ROOT.path}>Головна</Link>
        {pathname.length > 0 && ' / '}
        {breadcrumbLinks}
      </Container>
    </div>
  );
}
