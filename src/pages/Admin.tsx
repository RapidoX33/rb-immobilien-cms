import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useAuth } from '../lib/auth';

export default function Admin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const success = await login(password);
      if (success) {
        navigate('/');
      } else {
        setError('Falsches Passwort. Bitte versuchen Sie es erneut.');
      }
    } catch {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {/* Hero */}
    <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-24 bg-brand-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-red/20" />
      <div className="relative z-10 text-center text-white">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold">Administration</h1>
        <p className="mt-4 text-xl text-white/70">Zugang zum Content-Management-System</p>
      </div>
    </section>

    <section className="py-24 bg-brand-light -mt-8 rounded-t-[2.5rem] relative z-10 flex items-center justify-center px-4">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-brand-red" />
            </div>
            <h1 className="text-2xl font-display font-bold text-brand-dark">Admin Login</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-brand-dark mb-1">
                Passwort
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors"
                placeholder="Admin-Passwort eingeben"
                required
                autoFocus
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors disabled:opacity-50"
            >
              {loading ? 'Wird angemeldet...' : 'Anmelden'}
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
