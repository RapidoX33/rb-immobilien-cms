import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AuthProvider } from '../../lib/auth';
import { ContentProvider } from '../../lib/contentContext';
import { AdminBar } from '../AdminBar';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <AuthProvider>
      <ContentProvider>
        <div className="min-h-screen flex flex-col font-sans text-brand-dark bg-white">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
          <AdminBar />
        </div>
      </ContentProvider>
    </AuthProvider>
  );
}
