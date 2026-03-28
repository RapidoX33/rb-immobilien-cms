import { motion } from 'motion/react';
import { useContent } from '../lib/contentContext';
import { EditableText, EditableImage } from '../components/Editable';

export default function Impressum() {
  const { content, handleSave } = useContent();
  if (!content) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[300px] flex items-center justify-center pt-24">
        <EditableImage
          src={content.impressumHeroImage}
          onSave={(url) => handleSave('impressumHeroImage', url)}
          className="absolute inset-0 w-full h-full"
          imgClassName="w-full h-full object-cover"
          alt="Impressum"
        />
        <div className="absolute inset-0 bg-brand-dark/60" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-6xl font-bold"
          >
            Impressum
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm"
          >
            {/* Kontakt-Adresse */}
            <div className="mb-10">
              <h2 className="text-2xl font-display font-bold text-brand-dark pb-4 border-b border-gray-200 mb-6">
                Kontakt-Adresse
              </h2>
              <div className="space-y-1 text-brand-gray">
                <EditableText
                  value={content.impressumCompanyName}
                  onSave={(v) => handleSave('impressumCompanyName', v)}
                  as="p"
                  className="font-bold text-brand-dark"
                />
                <EditableText
                  value={content.impressumAddress}
                  onSave={(v) => handleSave('impressumAddress', v)}
                  as="p"
                  className="text-brand-gray"
                />
                <EditableText
                  value={content.impressumZip}
                  onSave={(v) => handleSave('impressumZip', v)}
                  as="p"
                  className="text-brand-gray"
                />
                <EditableText
                  value={content.impressumCountry}
                  onSave={(v) => handleSave('impressumCountry', v)}
                  as="p"
                  className="text-brand-gray"
                />
                <div className="pt-2 space-y-1">
                  <p className="flex items-center gap-1">
                    T{' '}
                    <EditableText
                      value={content.footerPhone}
                      onSave={(v) => handleSave('footerPhone', v)}
                      className="text-brand-gray"
                    />
                  </p>
                  <p className="flex items-center gap-1">
                    F{' '}
                    <EditableText
                      value={content.footerFax}
                      onSave={(v) => handleSave('footerFax', v)}
                      className="text-brand-gray"
                    />
                  </p>
                  <p>
                    E-Mail:{' '}
                    <a href={`mailto:${content.impressumEmail}`} className="text-brand-red hover:underline">
                      <EditableText
                        value={content.impressumEmail}
                        onSave={(v) => handleSave('impressumEmail', v)}
                        className="text-brand-red"
                      />
                    </a>
                  </p>
                  <p>
                    <a href="https://www.rbimmobilien.ch" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">
                      www.rbimmobilien.ch
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Vertretungsberechtigte Person */}
            <div className="mb-10">
              <h2 className="text-2xl font-display font-bold text-brand-dark pb-4 border-b border-gray-200 mb-6">
                Vertretungsberechtigte Person
              </h2>
              <EditableText
                value={content.impressumPerson}
                onSave={(v) => handleSave('impressumPerson', v)}
                as="p"
                className="text-brand-gray"
              />
            </div>

            {/* Handelsregister-Eintrag */}
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-dark pb-4 border-b border-gray-200 mb-6">
                Handelsregister-Eintrag
              </h2>
              <div className="space-y-1 text-brand-gray">
                <EditableText
                  value={content.impressumCompanyName}
                  onSave={(v) => handleSave('impressumCompanyName', v)}
                  as="p"
                  className="text-brand-gray"
                />
                <p>
                  UID:{' '}
                  <a
                    href={content.impressumUIDLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:underline"
                  >
                    <EditableText
                      value={content.impressumUID}
                      onSave={(v) => handleSave('impressumUID', v)}
                      className="text-brand-red"
                    />
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
