import { Link } from "react-router-dom";
import useRoutesByKey from "../hooks/useRoutesByKey";

export default function NavBar() {
  const { routes, activePath, handleClickLink } = useRoutesByKey([
    "ROOT",
    "NEWS",
    "WORK_SCHEDULE",
    "EVENTS",
    "ABOUT_US",
  ]);

  return (
    <nav>
      <ul className="flex gap-[30px]">
        {routes.map(({ path, name }, index) => (
          <li key={index} className="relative">
            <Link
              className={`text-xl text-black-200 after:absolute after:-bottom-[2px] after:block after:h-[1.5px] after:w-full after:scale-0 after:bg-black-200 after:transition-all after:content-[''] hover:after:scale-100 focus:after:scale-100 ${activePath === path ? "fter:scale-100 after:scale-100" : ""} dark:text-dark-title dark:after:bg-dark-title`}
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
