import { Suspense } from 'react';
import { Footer, Header } from '../modules';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
