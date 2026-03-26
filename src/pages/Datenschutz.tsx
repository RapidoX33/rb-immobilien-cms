import { motion } from 'motion/react';
import { useContent } from '../lib/contentContext';
import { EditableText, EditableImage } from '../components/Editable';

export default function Datenschutz() {
  const { content, handleSave } = useContent();
  if (!content) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[300px] flex items-center justify-center">
        <EditableImage
          src={content.datenschutzHeroImage}
          onSave={(url) => handleSave('datenschutzHeroImage', url)}
          className="absolute inset-0 w-full h-full"
          imgClassName="w-full h-full object-cover"
          alt="Datenschutz"
        />
        <div className="absolute inset-0 bg-brand-dark/60" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-6xl font-bold"
          >
            Datenschutzerkl&auml;rung
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
            {/* Intro Paragraphs */}
            <div className="space-y-6 mb-10">
              <EditableText
                value={content.datenschutzIntro}
                onSave={(v) => handleSave('datenschutzIntro', v)}
                as="p"
                multiline
                className="text-brand-gray leading-relaxed"
              />
              <EditableText
                value={content.datenschutzUsage}
                onSave={(v) => handleSave('datenschutzUsage', v)}
                as="p"
                multiline
                className="text-brand-gray leading-relaxed"
              />
              <EditableText
                value={content.datenschutzSecurity}
                onSave={(v) => handleSave('datenschutzSecurity', v)}
                as="p"
                multiline
                className="text-brand-gray leading-relaxed"
              />
            </div>

            {/* Kontaktformular */}
            <div className="mb-10">
              <h2 className="text-2xl font-display font-bold text-brand-dark pb-4 border-b border-gray-200 mb-6">
                Kontaktformular
              </h2>
              <EditableText
                value={content.datenschutzContact}
                onSave={(v) => handleSave('datenschutzContact', v)}
                as="p"
                multiline
                className="text-brand-gray leading-relaxed"
              />
            </div>

            {/* Auskunft, Löschung, Sperrung */}
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-dark pb-4 border-b border-gray-200 mb-6">
                Auskunft, L&ouml;schung, Sperrung
              </h2>
              <EditableText
                value={content.datenschutzRights}
                onSave={(v) => handleSave('datenschutzRights', v)}
                as="p"
                multiline
                className="text-brand-gray leading-relaxed"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
