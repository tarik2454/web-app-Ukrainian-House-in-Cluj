import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import routes from './constants/routes';
import Layout from './layout/Layout';
import { HomePage, News, Events, AboutUs } from './pages';

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={routes.ROOT} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.NEWS} element={<News />} />
          <Route path={routes.EVENTS} element={<Events />} />
          <Route path={routes.ABOUT_US} element={<AboutUs />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
