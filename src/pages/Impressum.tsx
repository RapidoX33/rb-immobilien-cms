import { motion } from 'motion/react';
import { Phone, Printer, Mail, Globe } from 'lucide-react';
import { useContent } from '../lib/contentContext';
import { EditableText, EditableImage } from '../components/Editable';

export default function Impressum() {
  const { content, handleSave } = useContent();
  if (!content) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-24">
        <div className="absolute inset-0 w-full h-full">
          <EditableImage
            src={content.impressumHeroImage}
            onSave={(url) => handleSave('impressumHeroImage', url)}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            alt="Impressum"
          />
        </div>
        <div className="absolute inset-0 bg-brand-dark/60" />
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <EditableText
              value={content.impressumPageTitle}
              onSave={(v) => handleSave('impressumPageTitle', v)}
              as="h1"
              className="font-display text-5xl md:text-6xl font-bold"
            />
          </motion.div>
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
              <EditableText
                value={content.impressumSectionKontakt}
                onSave={(v) => handleSave('impressumSectionKontakt', v)}
                as="h2"
                className="text-2xl font-display font-bold text-brand-dark pb-4 border-b border-gray-200 mb-6"
              />
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
                <div className="pt-3 space-y-2">
                  <a href={`tel:${content.footerPhone}`} className="flex items-center gap-2 text-brand-red hover:text-brand-red/80 transition-colors">
                    <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <EditableText
                      value={content.footerPhone}
                      onSave={(v) => handleSave('footerPhone', v)}
                      className="text-brand-red"
                    />
                  </a>
                  <p className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <span className="text-brand-red">
                      <EditableText
                        value={content.footerFax}
                        onSave={(v) => handleSave('footerFax', v)}
                        className="text-brand-red"
                      />
                    </span>
                  </p>
                  <a href={`mailto:${content.impressumEmail}`} className="flex items-center gap-2 text-brand-red hover:text-brand-red/80 transition-colors">
                    <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <EditableText
                      value={content.impressumEmail}
                      onSave={(v) => handleSave('impressumEmail', v)}
                      className="text-brand-red"
                    />
                  </a>
                  <a href={content.impressumWebsiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-red hover:text-brand-red/80 transition-colors">
                    <Globe className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <EditableText
                      value={content.impressumWebsite}
                      onSave={(v) => handleSave('impressumWebsite', v)}
                      className="text-brand-red"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Vertretungsberechtigte Person */}
            <div className="mb-10">
              <EditableText
                value={content.impressumSectionPerson}
                onSave={(v) => handleSave('impressumSectionPerson', v)}
                as="h2"
                className="text-2xl font-display font-bold text-brand-dark pb-4 border-b border-gray-200 mb-6"
              />
              <EditableText
                value={content.impressumPerson}
                onSave={(v) => handleSave('impressumPerson', v)}
                as="p"
                className="text-brand-gray"
              />
            </div>

            {/* Handelsregister-Eintrag */}
            <div>
              <EditableText
                value={content.impressumSectionHandelsregister}
                onSave={(v) => handleSave('impressumSectionHandelsregister', v)}
                as="h2"
                className="text-2xl font-display font-bold text-brand-dark pb-4 border-b border-gray-200 mb-6"
              />
              <div className="space-y-1 text-brand-gray">
                <EditableText
                  value={content.impressumCompanyName}
                  onSave={(v) => handleSave('impressumCompanyName', v)}
                  as="p"
                  className="text-brand-gray"
                />
                <p>
                  <EditableText
                    value={content.impressumUIDLabel}
                    onSave={(v) => handleSave('impressumUIDLabel', v)}
                  />{' '}
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
