import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useContent } from '../lib/contentContext';
import { EditableText, EditableImage } from '../components/Editable';

export default function Kontakt() {
  const { content, handleSave } = useContent();
  const [formData, setFormData] = useState({
    anrede: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!content) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSent(true);
      setFormData({ anrede: '', name: '', email: '', phone: '', message: '' });
    } catch {
      alert('Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <EditableImage
            src={content.contactHeroImage}
            onSave={(url) => handleSave('contactHeroImage', url)}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            alt="Kontakt"
          />
        </div>
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <EditableText
              value={content.contactTitle}
              onSave={(v) => handleSave('contactTitle', v)}
              as="h1"
              className="font-display text-5xl md:text-6xl font-bold"
            />
            <EditableText
              value={content.contactSubtitle}
              onSave={(v) => handleSave('contactSubtitle', v)}
              as="p"
              className="mt-4 text-xl text-white/80"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <EditableText
                value={content.companyName}
                onSave={(v) => handleSave('companyName', v)}
                as="h2"
                className="text-3xl font-display font-bold text-brand-dark"
              />

              {/* Address Block */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark mb-1">Adresse</p>
                  <EditableText
                    value={content.address}
                    onSave={(v) => handleSave('address', v)}
                    as="p"
                    className="text-brand-gray"
                  />
                  <EditableText
                    value={content.addressZip}
                    onSave={(v) => handleSave('addressZip', v)}
                    as="p"
                    className="text-brand-gray"
                  />
                  <EditableText
                    value={content.addressDescription}
                    onSave={(v) => handleSave('addressDescription', v)}
                    as="p"
                    multiline
                    className="text-brand-gray text-sm mt-2"
                  />
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark mb-1">Telefon & Fax</p>
                  <p className="text-brand-gray">
                    Tel:{' '}
                    <EditableText
                      value={content.phone}
                      onSave={(v) => handleSave('phone', v)}
                      className="text-brand-gray"
                    />
                  </p>
                  <p className="text-brand-gray">
                    Fax:{' '}
                    <EditableText
                      value={content.fax}
                      onSave={(v) => handleSave('fax', v)}
                      className="text-brand-gray"
                    />
                  </p>
                </div>
              </div>

              {/* Email Block */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark mb-1">E-Mail</p>
                  <a href={`mailto:${content.email}`} className="text-brand-red hover:underline">
                    <EditableText
                      value={content.email}
                      onSave={(v) => handleSave('email', v)}
                      className="text-brand-red"
                    />
                  </a>
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-brand-red" />
                  <h3 className="text-xl font-display font-bold text-brand-dark">Öffnungszeiten</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-brand-dark mb-2">Telefon</p>
                    <div className="text-brand-gray text-sm space-y-1">
                      <p className="flex justify-between">
                        <span>Mo - Do</span>
                        <EditableText
                          value={content.phoneHoursMoDo}
                          onSave={(v) => handleSave('phoneHoursMoDo', v)}
                          className="text-brand-gray"
                        />
                      </p>
                      <p className="flex justify-between">
                        <span>Fr</span>
                        <EditableText
                          value={content.phoneHoursFr}
                          onSave={(v) => handleSave('phoneHoursFr', v)}
                          className="text-brand-gray"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-semibold text-brand-dark mb-2">Schalter</p>
                    <div className="text-brand-gray text-sm space-y-1">
                      <p className="flex justify-between">
                        <span>Dienstag</span>
                        <EditableText
                          value={content.schalterDi}
                          onSave={(v) => handleSave('schalterDi', v)}
                          className="text-brand-gray"
                        />
                      </p>
                      <p className="flex justify-between">
                        <span>Donnerstag</span>
                        <EditableText
                          value={content.schalterDo}
                          onSave={(v) => handleSave('schalterDo', v)}
                          className="text-brand-gray"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-6">Schreiben Sie uns</h3>

                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-display font-bold text-brand-dark mb-2">Vielen Dank!</h4>
                    <p className="text-brand-gray">Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bei Ihnen.</p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-brand-red hover:underline text-sm font-semibold"
                    >
                      Weitere Nachricht senden
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1">Anrede</label>
                      <select
                        value={formData.anrede}
                        onChange={(e) => setFormData({ ...formData, anrede: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors bg-white"
                        required
                      >
                        <option value="">Bitte wählen</option>
                        <option value="Herr">Herr</option>
                        <option value="Frau">Frau</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors"
                        placeholder="Vor- und Nachname"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1">E-Mail</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors"
                        placeholder="ihre@email.ch"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1">Telefon</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors"
                        placeholder="+41 ..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1">Nachricht</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors resize-none"
                        placeholder="Ihre Nachricht..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {sending ? 'Wird gesendet...' : (
                        <>
                          Nachricht senden
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Google Maps */}
              <div className="rounded-3xl overflow-hidden shadow-sm">
                <iframe
                  src={content.googleMapsUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort RB Immobilien Treuhand AG"
                  className="h-[300px] w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
