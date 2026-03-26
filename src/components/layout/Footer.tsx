import { Link } from 'react-router-dom';
import { EditableText } from '../Editable';
import { useContent } from '../../lib/contentContext';

export function Footer() {
  const { content, handleSave } = useContent();

  if (!content) return null;

  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,16,46,0.08),_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src="https://rbimmobilien.ch/img/titellogo.png"
              alt="RB Immobilien Treuhand AG"
              className="h-10 w-auto brightness-0 invert"
            />
            <EditableText
              value={content.footerDescription}
              onSave={(v) => handleSave('footerDescription', v)}
              className="text-gray-400 text-sm leading-relaxed"
              as="p"
              multiline
            />
          </div>

          {/* Standort Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-white">Standort</h4>
            <div className="text-gray-400 space-y-1">
              <EditableText
                value={content.companyName}
                onSave={(v) => handleSave('companyName', v)}
                className="text-gray-400 block"
                as="p"
              />
              <EditableText
                value={content.address}
                onSave={(v) => handleSave('address', v)}
                className="text-gray-400 block"
                as="p"
              />
              <EditableText
                value={content.addressZip}
                onSave={(v) => handleSave('addressZip', v)}
                className="text-gray-400 block"
                as="p"
              />
            </div>
          </div>

          {/* Kontakt Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-white">Kontakt</h4>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-brand-red">T</span>
                <EditableText
                  value={content.footerPhone}
                  onSave={(v) => handleSave('footerPhone', v)}
                  className="text-gray-400"
                />
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-red">F</span>
                <EditableText
                  value={content.footerFax}
                  onSave={(v) => handleSave('footerFax', v)}
                  className="text-gray-400"
                />
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-red">E</span>
                <EditableText
                  value={content.footerEmail}
                  onSave={(v) => handleSave('footerEmail', v)}
                  className="text-gray-400"
                />
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} RB Immobilien Treuhand AG. Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
