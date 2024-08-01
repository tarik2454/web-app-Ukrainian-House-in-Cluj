import { SpriteSVG } from '../../../img/SpriteSVG';

export default function ThemeToggle() {
  return (
    <div className="flex gap-4 px-4 py-2 bg-black-300 rounded-lg">
      <button>
        <SpriteSVG name="sun" />
      </button>
      <button>
        <SpriteSVG name="moon" />
      </button>
    </div>
  );
}
