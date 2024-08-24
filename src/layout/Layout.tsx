import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';
import Loader from '../shared/components/Loader';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="100vh">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
