import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Key, Home as HomeIcon, Building } from 'lucide-react';
import { useContent } from '../lib/contentContext';
import { EditableText, EditableImage } from '../components/Editable';

export default function Home() {
  const { content, handleSave } = useContent();
  if (!content) return null;

  const services = [
    {
      icon: Key,
      titleKey: 'homeCard1Title' as const,
      descKey: 'homeCard1Desc' as const,
      link: '/mietobjekte',
    },
    {
      icon: HomeIcon,
      titleKey: 'homeCard2Title' as const,
      descKey: 'homeCard2Desc' as const,
      link: '/kaufobjekte',
    },
    {
      icon: Building,
      titleKey: 'homeCard3Title' as const,
      descKey: 'homeCard3Desc' as const,
      link: '/dienstleistungen',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <EditableImage
            src={content.heroImage}
            onSave={(url) => handleSave('heroImage', url)}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            alt="RB Immobilien Hero"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              <EditableText
                value={content.heroTitle}
                onSave={(v) => handleSave('heroTitle', v)}
                as="span"
                className="block"
              />
              <EditableText
                value={content.heroTitleHighlight}
                onSave={(v) => handleSave('heroTitleHighlight', v)}
                as="span"
                className="text-brand-red block"
              />
            </h1>
            <EditableText
              value={content.heroSubtitle}
              onSave={(v) => handleSave('heroSubtitle', v)}
              as="p"
              multiline
              className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
            />
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/mietobjekte"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                <EditableText
                  value={content.heroCta1}
                  onSave={(v) => handleSave('heroCta1', v)}
                />
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm transition-colors border border-white/20"
              >
                <EditableText
                  value={content.heroCta2}
                  onSave={(v) => handleSave('heroCta2', v)}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-brand-light -mt-8 rounded-t-[2.5rem] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <EditableText
              value={content.servicesOverviewTitle}
              onSave={(v) => handleSave('servicesOverviewTitle', v)}
              as="h2"
              className="font-display text-4xl md:text-5xl font-bold text-brand-dark"
            />
            <EditableText
              value={content.servicesOverviewSubtitle}
              onSave={(v) => handleSave('servicesOverviewSubtitle', v)}
              as="p"
              multiline
              className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <Link
                    to={service.link}
                    className="glass-card rounded-3xl p-8 block group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-red-50 text-brand-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <EditableText
                      value={content[service.titleKey]}
                      onSave={(v) => handleSave(service.titleKey, v)}
                      as="h3"
                      className="font-display text-2xl font-bold text-brand-dark mb-3"
                    />
                    <EditableText
                      value={content[service.descKey]}
                      onSave={(v) => handleSave(service.descKey, v)}
                      as="p"
                      multiline
                      className="text-brand-gray leading-relaxed"
                    />
                    <span className="inline-flex items-center gap-1 mt-6 text-brand-red font-semibold text-sm group-hover:gap-2 transition-all">
                      Mehr erfahren <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <EditableText
                value={content.newsLabel}
                onSave={(v) => handleSave('newsLabel', v)}
                as="span"
                className="text-brand-red font-semibold text-sm tracking-widest uppercase"
              />
              <EditableText
                value={content.newsTitle}
                onSave={(v) => handleSave('newsTitle', v)}
                as="h2"
                className="font-display text-3xl md:text-4xl font-bold text-brand-dark mt-4"
              />
              <EditableText
                value={content.newsText}
                onSave={(v) => handleSave('newsText', v)}
                as="p"
                multiline
                className="mt-6 text-brand-gray leading-relaxed text-lg"
              />
              <a
                href={content.newsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-brand-dark hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <EditableText
                  value={content.newsLinkText}
                  onSave={(v) => handleSave('newsLinkText', v)}
                />
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-brand-red/10 rounded-3xl" />
              <EditableImage
                src={content.newsImage}
                onSave={(url) => handleSave('newsImage', url)}
                className="relative rounded-3xl overflow-hidden shadow-xl"
                imgClassName="w-full h-full object-cover"
                alt="Aktuell"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
