interface Route {
  path: string;
  name?: string;
}

const routes: Record<string, Route> = {
  ROOT: { path: '/', name: 'Головна' },
  NEWS: { path: '/news', name: 'Новини' },
  WORK_SCHEDULE: { path: '/work-schedule', name: 'Графік роботи' },
  EVENTS: { path: '/events', name: 'Події' },
  ABOUT_US: { path: '/about-us', name: 'Про нас' },
  EVENT_ID: { path: '/events/:eventId', name: 'Подія' },

  SIGNIN: { path: '/signin', name: 'Вхід' },
  SIGNUP: { path: '/signup', name: 'Реєстрація' },

  ADMIN: { path: '/admin', name: 'Адмін' },
};

export default routes;
