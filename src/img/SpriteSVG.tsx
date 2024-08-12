export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'sun':
      return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <g fill="#fff">
            <path d="M12 19.25C8 19.25 4.75 16 4.75 12S8 4.75 12 4.75 19.25 8 19.25 12 16 19.25 12 19.25Zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75 5.75-2.58 5.75-5.75S15.17 6.25 12 6.25ZM12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7Zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Z" />
          </g>
        </svg>
      );

    case 'moon':
      return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="#fff" rx="12" />
        </svg>
      );

    case 'arrow-right':
      return (
        <svg width="20" height="21" fill="none" viewBox="0 0 20 21">
          <path
            stroke="#667085"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.67"
            d="M4.167 10.5h11.666m0 0L10 4.667m5.833 5.833L10 16.333"
          />
        </svg>
      );

    case 'arrow-left':
      return (
        <svg width="20" height="21" fill="none" viewBox="0 0 20 21">
          <path
            stroke="#667085"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.67"
            d="M15.833 10.5H4.167m0 0L10 16.333M4.167 10.5 10 4.667"
          />
        </svg>
      );

    case 'facebook':
      return (
        <svg width="50" height="50" fill="none" viewBox="0 0 512 512">
          <path
            fill="#667085"
            fillRule="evenodd"
            d="M430 256.5c0 95.821-77.679 173.5-173.5 173.5S83 352.321 83 256.5 160.679 83 256.5 83 430 160.679 430 256.5Zm-196.471-5.854v112.907h37.636V250.646h27.902v-27.514h-27.902v-11.29c0-13.238 7.051-19.857 21.154-19.857 4.499 0 8.306.39 11.421 1.168l.389-29.07c-7.527-1.73-13.886-2.596-19.078-2.596-16.265 0-28.94 4.37-38.025 13.108-8.998 8.652-13.497 20.851-13.497 36.598v11.939h-20.894v27.514h20.894Z"
            clipRule="evenodd"
          />
        </svg>
      );

    case 'telegram':
      return (
        <svg width="46" height="46" fill="none" viewBox="0 0 512 512">
          <path
            fill="#667085"
            fillRule="evenodd"
            d="M255.5 442C358.501 442 442 358.501 442 255.5S358.501 69 255.5 69 69 152.499 69 255.5 152.499 442 255.5 442Zm64.419-257.965c.649-3.335-2.725-6.03-5.86-4.679l-138.593 59.729c-9.756 4.205-11.463 17.243-3.114 23.79l13.901 10.901a17.398 17.398 0 0 0 20.022 1.007l59.477-37.636c2.098-1.328 4.519 1.157 3.118 3.2l-30.491 44.455c-5.267 7.679-3.455 18.128 4.094 23.61l28.76 20.887c8.316 6.039 20.124 1.426 22.082-8.627l26.604-136.637Z"
            clipRule="evenodd"
          />
        </svg>
      );

    case 'instagram':
      return (
        <svg width="44" height="44" fill="none" viewBox="0 0 512 512">
          <path
            fill="#667085"
            fillRule="evenodd"
            d="M256 59C147.2 59 59 147.2 59 256s88.2 197 197 197 197-88.2 197-197S364.8 59 256 59Zm83.757 152.592c0-21.732-17.617-39.349-39.349-39.349h-88.816c-21.732 0-39.349 17.617-39.349 39.349v88.816c0 21.732 17.617 39.349 39.349 39.349h88.816c21.732 0 39.349-17.617 39.349-39.349v-88.816ZM211.592 161C183.651 161 161 183.651 161 211.592v88.816C161 328.349 183.651 351 211.592 351h88.816C328.349 351 351 328.349 351 300.408v-88.816C351 183.651 328.349 161 300.408 161h-88.816ZM256 286.355c16.765 0 30.355-13.59 30.355-30.355s-13.59-30.355-30.355-30.355-30.355 13.59-30.355 30.355 13.59 30.355 30.355 30.355Zm0 9.556c22.042 0 39.911-17.869 39.911-39.911S278.042 216.089 256 216.089 216.089 233.958 216.089 256s17.869 39.911 39.911 39.911Zm57.337-93.875c0 7.761-6.292 14.053-14.053 14.053-7.761 0-14.053-6.292-14.053-14.053 0-7.762 6.292-14.054 14.053-14.054 7.761 0 14.053 6.292 14.053 14.054Z"
            clipRule="evenodd"
          />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
