import { useAuth } from '../lib/auth';
import { LogOut, Shield } from 'lucide-react';

export function AdminBar() {
  const { isAdmin, logout } = useAuth();
  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-brand-dark text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 text-sm font-medium">
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-brand-red" />
        <span>Admin Modus</span>
      </div>
      <div className="w-px h-4 bg-white/20" />
      <span className="text-gray-400 text-xs">Klicken Sie auf Texte oder Bilder zum Bearbeiten</span>
      <div className="w-px h-4 bg-white/20" />
      <button onClick={logout} className="flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors">
        <LogOut className="w-4 h-4" />
        Abmelden
      </button>
    </div>
  );
}
