import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { routes } from './constants/routes';
import Layout from './layout/Layout';
import {
  Home,
  News,
  Events,
  AboutUs,
  WorkSchedule,
  EventDetails,
} from './pages';
import Loader from './shared/components/Loader';

import CreateNews from './admin/pages/CreateNews';
import AdminLayout from './admin/layout/AdminLayout';
import MainAdmin from './admin/pages/MainAdminPage';
import CreateEvent from './admin/pages/CreateEvent';
import CreateWorkSchedule from './admin/pages/CreateWorkSchedule';

export function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.ROOT.path} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.NEWS.path} element={<News />} />
          <Route path={routes.WORK_SCHEDULE.path} element={<WorkSchedule />} />
          <Route path={routes.EVENTS.path} element={<Events />} />
          <Route path={routes.EVENT_ID.path} element={<EventDetails />} />
          <Route path={routes.ABOUT_US.path} element={<AboutUs />} />
        </Route>

        <Route path={routes.ADMIN_MAIN.path} element={<AdminLayout />}>
          <Route index element={<MainAdmin />} />
          <Route path={routes.CREATE_NEWS.path} element={<CreateNews />} />
          <Route
            path={routes.CREATE_SCHEDULE.path}
            element={<CreateWorkSchedule />}
          />
          <Route path={routes.CREATE_EVENT.path} element={<CreateEvent />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
