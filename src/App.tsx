import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import routes from './constants/routes';
import Layout from './layout/Layout';
import {
  HomePage,
  News,
  Events,
  AboutUs,
  WorkSchedule,
  AdminPage,
  EventDetails,
} from './pages';

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={routes.ROOT.path} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.NEWS.path} element={<News />} />
          <Route path={routes.WORK_SCHEDULE.path} element={<WorkSchedule />} />
          <Route path={routes.EVENTS.path} element={<Events />} />
          <Route path={routes.EVENT_ID.path} element={<EventDetails />} />
          <Route path={routes.ABOUT_US.path} element={<AboutUs />} />
        </Route>
        <Route path={routes.ADMIN.path} element={<AdminPage />} />
      </Routes>
    </Suspense>
  );
}
