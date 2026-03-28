import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Objekte from './pages/Objekte';
import ObjektDetail from './pages/ObjektDetail';
import Dienstleistungen from './pages/Dienstleistungen';
import Team from './pages/Team';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Admin from './pages/Admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'objekte', element: <Objekte /> },
      { path: 'mieten', element: <Navigate to="/objekte?typ=mieten" replace /> },
      { path: 'kaufen', element: <Navigate to="/objekte?typ=kaufen" replace /> },
      { path: 'objekt/:id', element: <ObjektDetail /> },
      { path: 'dienstleistungen', element: <Dienstleistungen /> },
      { path: 'team', element: <Team /> },
      { path: 'kontakt', element: <Kontakt /> },
      { path: 'impressum', element: <Impressum /> },
      { path: 'datenschutz', element: <Datenschutz /> },
      { path: 'admin', element: <Admin /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
