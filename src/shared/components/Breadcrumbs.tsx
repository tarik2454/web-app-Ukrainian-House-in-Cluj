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

    return (
      <span key={index}>
        <Link to={routePath}>{routeName}</Link>
        {index < pathname.length - 1 && ' / '}
      </span>
    );
  });

  return (
    <Container>
      <Link to={routes.ROOT.path}>Головна</Link>
      {pathname.length > 0 && ' / '}
      {breadcrumbLinks}
    </Container>
  );
}
