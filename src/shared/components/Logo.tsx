import logo from '@/img/logo.png';
import routes from '../../constants/routes';

export default function Logo() {
  return (
    <a href={routes.ROOT}>
      <div className="flex gap-2 items-center">
        <img src={logo} width="50px" height="50px" alt="Logo" />
        <p
          className="text-base bg-clip-text text-transparent 
            bg-gradient-to-r from-yellow-500 from-30% via-amber-500 via-40% to-blue-600 to-70%"
        >
          Ukraine House
        </p>
      </div>
    </a>
  );
}
