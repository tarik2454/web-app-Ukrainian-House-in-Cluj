import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../modules/header/Header';
import Loader from '../../shared/components/Loader';

export default function AdminLayout() {
  return (
    <>
      <Header />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
}
