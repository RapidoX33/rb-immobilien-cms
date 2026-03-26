import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Home, Maximize, ArrowRight, Building2 } from 'lucide-react';
import { useContent } from '../lib/contentContext';
import { EditableText, EditableImage } from '../components/Editable';

export default function Kaufobjekte() {
  const { content, isLoading, handleSave } = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const kaufProperties = content.properties.filter((p) => p.type === 'kaufen');

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <EditableImage
            src={content.kaufHeroImage}
            onSave={(url) => handleSave('kaufHeroImage', url)}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            alt="Kaufobjekte"
          />
        </div>
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <EditableText
              value={content.kaufTitle}
              onSave={(v) => handleSave('kaufTitle', v)}
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
            />
            <EditableText
              value={content.kaufSubtitle}
              onSave={(v) => handleSave('kaufSubtitle', v)}
              as="p"
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-brand-light min-h-[60vh] -mt-8 rounded-t-[2.5rem] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {kaufProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kaufProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/objekt/${property.id}`}
                    className="block bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-brand-dark tracking-wide">
                        {property.category}
                      </div>
                      {/* Price Badge */}
                      <div className="absolute bottom-4 right-4 bg-brand-red text-white rounded-xl px-4 py-2 text-sm font-bold">
                        {property.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-display font-bold text-brand-dark mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-brand-gray text-sm mb-4">
                        <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                        <span className="truncate">{property.address}</span>
                      </div>
                      {/* Spec Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {property.rooms !== null && (
                          <div className="flex items-center gap-2 text-sm text-brand-gray">
                            <Home className="w-4 h-4 text-brand-red/70" />
                            <span>{property.rooms} Zimmer</span>
                          </div>
                        )}
                        {property.area !== null && (
                          <div className="flex items-center gap-2 text-sm text-brand-gray">
                            <Maximize className="w-4 h-4 text-brand-red/70" />
                            <span>{property.area} m&sup2;</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-red font-semibold text-sm group-hover:gap-3 transition-all">
                        Details ansehen
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-24"
            >
              <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-brand-red" />
              </div>
              <h2 className="text-2xl font-display font-bold text-brand-dark mb-3">
                Aktuell keine Kaufobjekte
              </h2>
              <p className="text-brand-gray max-w-md mx-auto mb-8">
                Derzeit sind keine Kaufobjekte verfügbar. Bitte schauen Sie später wieder vorbei oder kontaktieren Sie uns direkt.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-red/90 transition-colors"
              >
                Kontaktieren Sie uns
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
