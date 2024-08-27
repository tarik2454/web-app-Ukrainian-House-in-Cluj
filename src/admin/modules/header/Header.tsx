import { useState } from 'react';

import MobileNavBar from './mobileMenu/MobileNavBar';
import Notifications from './Notifications';
import ProfileDropdown from './Profile';
import NavBar from './NavBar';
import MobileMenuButton from './mobileMenu/MobileMenuButton';
import Logo from '../../../shared/components/Logo';

export default function Header() {
  const [navBarDisplay, setNavBarDisplay] = useState('hidden');

  const handleToggleMenu = () => {
    setNavBarDisplay(navBarDisplay === 'hidden' ? 'block' : 'hidden');
  };

  return (
    <header className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="w-[39px]">
            <Logo admin={true} />
          </div>

          <NavBar />

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Notifications />
              <ProfileDropdown />
            </div>
          </div>

          <MobileMenuButton onClick={handleToggleMenu} />
        </div>
      </div>

      <MobileNavBar navBarDisplay={navBarDisplay} />
    </header>
  );
}
