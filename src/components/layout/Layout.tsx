import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollRestoration } from 'react-router-dom';
import { AuthProvider } from '../../lib/auth';
import { ContentProvider } from '../../lib/contentContext';
import { AdminBar } from '../AdminBar';

export function Layout() {
  return (
    <AuthProvider>
      <ContentProvider>
        <div className="min-h-screen flex flex-col font-sans text-brand-dark bg-white">
          <ScrollRestoration />
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
