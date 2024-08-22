import { useEffect, useState } from 'react';
import { SpriteSVG } from '../../../img/SpriteSVG';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleThemeLight = () => {
    setTheme(' light');
  };

  const handleThemeBlack = () => {
    setTheme('dark');
  };

  return (
    <div className="flex gap-3 px-3 py-2 text-white bg-black-300 rounded-lg dark:bg-white dark:text-black-300">
      <button onClick={handleThemeLight}>
        <SpriteSVG name="sun" />
      </button>
      <button onClick={handleThemeBlack}>
        <SpriteSVG name="moon" />
      </button>
    </div>
  );
}
