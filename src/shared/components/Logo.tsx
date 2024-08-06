import logo from '@/img/logo.png';
import routes from '../../constants/routes';

export default function Logo() {
  return (
    <a href={routes.ROOT}>
      <div className="flex gap-2 items-center">
        <img src={logo} width="50px" height="50px" alt="Logo" />
        <p className="text-ukraine-gradient text-base">Ukraine House</p>
      </div>
    </a>
  );
}
