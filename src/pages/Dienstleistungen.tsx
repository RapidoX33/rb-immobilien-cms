import { motion } from 'motion/react';
import {
  Building2,
  Briefcase,
  Wrench,
  FileText,
  Calculator,
  PiggyBank,
} from 'lucide-react';
import { useContent } from '../lib/contentContext';
import { EditableText, EditableImage } from '../components/Editable';
import type { ServiceItem } from '../lib/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Briefcase,
  Wrench,
  FileText,
  Calculator,
  PiggyBank,
};

export default function Dienstleistungen() {
  const { content, handleSave } = useContent();
  if (!content) return null;

  const updateService = (id: string, field: keyof ServiceItem, value: string) => {
    const updated = content.servicesList.map((s) =>
      s.id === id ? { ...s, [field]: value } : s
    );
    handleSave('servicesList', updated);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
        <EditableImage
          src={content.servicesHeroImage}
          onSave={(url) => handleSave('servicesHeroImage', url)}
          className="absolute inset-0 w-full h-full"
          imgClassName="w-full h-full object-cover"
          alt="Dienstleistungen Hero"
        />
        <div className="absolute inset-0 bg-brand-dark/60" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <EditableText
              value={content.servicesTitle}
              onSave={(v) => handleSave('servicesTitle', v)}
              as="h1"
              className="font-display text-5xl md:text-6xl font-bold text-white"
            />
            <EditableText
              value={content.servicesSubtitle}
              onSave={(v) => handleSave('servicesSubtitle', v)}
              as="p"
              className="mt-4 text-xl text-white/80"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-brand-light -mt-8 rounded-t-[2.5rem] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <EditableText
              value={content.servicesIntro}
              onSave={(v) => handleSave('servicesIntro', v)}
              as="p"
              multiline
              className="text-lg text-brand-gray leading-relaxed"
            />
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.servicesList.map((service, i) => {
              const Icon = iconMap[service.icon] || Building2;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-red-50 text-brand-red rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <EditableText
                    value={service.title}
                    onSave={(v) => updateService(service.id, 'title', v)}
                    as="h3"
                    className="font-display text-xl font-bold text-brand-dark mb-3"
                  />
                  <EditableText
                    value={service.description}
                    onSave={(v) => updateService(service.id, 'description', v)}
                    as="p"
                    multiline
                    className="text-brand-gray leading-relaxed"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
