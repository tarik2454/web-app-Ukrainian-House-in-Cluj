import routes from '../../../constants/routes';

export default function NavBar() {
  const specificKeys = ['ADMIN_MAIN', 'CREATE_NEWS', 'CREATE_EVENT'];

  return (
    <nav className="hidden md:block">
      <ul className="ml-10 flex items-baseline space-x-4">
        {specificKeys.map(key => {
          const { path, name } = routes[key];

          return (
            <li key={key}>
              <a
                href={path}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
