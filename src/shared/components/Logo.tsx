import logo from '../../assets/images/logo.png';
import { routes } from '../../constants/routes';

export default function Logo({ admin = false }: { admin?: boolean }) {
  return (
    <a href={admin ? `${routes.ADMIN_MAIN.path}` : `${routes.ROOT.path}`}>
      <div className="flex gap-2 items-center">
        <img src={logo} width="50px" height="50px" alt="Logo" />
        {!admin ? (
          <p className="text-ukraine-gradient text-base">Ukraine House</p>
        ) : null}
      </div>
    </a>
  );
}
