import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Home, Maximize, ArrowRight, Building2, Info, Image as ImageIcon } from 'lucide-react';
import { useContent } from '../lib/contentContext';
import { EditableText, EditableImage } from '../components/Editable';
import { cn } from '../lib/utils';

function FadeImg({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => { setLoaded(false); setError(false); }, [src]);
  useEffect(() => { if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setLoaded(true); }, [src]);
  return (
    <div className="relative w-full h-full">
      {!loaded && !error && <div className="absolute inset-0 bg-gray-100 animate-pulse" />}
      {error && <div className="absolute inset-0 bg-gray-100 flex items-center justify-center"><ImageIcon className="w-8 h-8 text-gray-300" /></div>}
      <img ref={imgRef} src={src} alt={alt} className={cn(className, 'transition-opacity duration-500', loaded ? 'opacity-100' : 'opacity-0')} referrerPolicy="no-referrer" onLoad={() => setLoaded(true)} onError={() => setError(true)} {...props} />
    </div>
  );
}

type TabType = 'mieten' | 'kaufen';

export default function Objekte() {
  const { content, isLoading, handleSave } = useContent();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get('typ') as TabType) || 'mieten';
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const switchTab = (tab: TabType) => {
    setActiveTab(tab);
    setSearchParams({ typ: tab });
  };

  if (isLoading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const properties = content.properties.filter((p) => p.type === activeTab);
  const heroImage = activeTab === 'mieten' ? content.mietHeroImage : content.kaufHeroImage;
  const heroTitle = activeTab === 'mieten' ? content.mietTitle : content.kaufTitle;
  const heroSubtitle = activeTab === 'mieten' ? content.mietSubtitle : content.kaufSubtitle;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 w-full h-full">
          <EditableImage
            src={heroImage}
            onSave={(url) => handleSave(activeTab === 'mieten' ? 'mietHeroImage' : 'kaufHeroImage', url)}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            alt="Objekte"
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
              value={heroTitle}
              onSave={(v) => handleSave(activeTab === 'mieten' ? 'mietTitle' : 'kaufTitle', v)}
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
            />
            <EditableText
              value={heroSubtitle}
              onSave={(v) => handleSave(activeTab === 'mieten' ? 'mietSubtitle' : 'kaufSubtitle', v)}
              as="p"
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-brand-light min-h-[60vh] -mt-8 rounded-t-[2.5rem] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Banner */}
          <div className="mb-10 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-start gap-4">
            <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-1">
                <EditableText
                  value={content.objektePreviewTitle}
                  onSave={(v) => handleSave('objektePreviewTitle', v)}
                />
              </p>
              <EditableText
                value={content.objektePreviewText}
                onSave={(v) => handleSave('objektePreviewText', v)}
                as="p"
                multiline
              />
            </div>
          </div>

          {/* Tab Switch */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm">
              <button
                onClick={() => switchTab('mieten')}
                className={cn(
                  'relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                  activeTab === 'mieten'
                    ? 'text-white'
                    : 'text-brand-gray hover:text-brand-dark'
                )}
              >
                {activeTab === 'mieten' && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-brand-red rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  <EditableText
                    value={content.objekteTabMieten}
                    onSave={(v) => handleSave('objekteTabMieten', v)}
                  />
                </span>
              </button>
              <button
                onClick={() => switchTab('kaufen')}
                className={cn(
                  'relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                  activeTab === 'kaufen'
                    ? 'text-white'
                    : 'text-brand-gray hover:text-brand-dark'
                )}
              >
                {activeTab === 'kaufen' && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-brand-red rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  <EditableText
                    value={content.objekteTabKaufen}
                    onSave={(v) => handleSave('objekteTabKaufen', v)}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Property Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {properties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {properties.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-full"
                    >
                      <Link
                        to={`/objekt/${property.id}`}
                        className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                      >
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                          <FadeImg
                            src={property.images[0]}
                            alt={property.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-brand-dark tracking-wide">
                            {property.category}
                          </div>
                          <div className="absolute bottom-4 right-4 bg-brand-red text-white rounded-xl px-4 py-2 text-sm font-bold">
                            {property.price}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-lg font-display font-bold text-brand-dark mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
                            {property.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-brand-gray text-sm mb-4">
                            <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                            <span className="truncate">{property.address}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mb-4 min-h-[28px]">
                            {property.rooms !== null && (
                              <div className="flex items-center gap-2 text-sm text-brand-gray">
                                <Home className="w-4 h-4 text-brand-red/70" />
                                <span>{property.rooms} <EditableText value={content.objekteZimmerLabel} onSave={(v) => handleSave('objekteZimmerLabel', v)} /></span>
                              </div>
                            )}
                            {property.area !== null && (
                              <div className="flex items-center gap-2 text-sm text-brand-gray">
                                <Maximize className="w-4 h-4 text-brand-red/70" />
                                <span>{property.area} m&sup2;</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 text-brand-red font-semibold text-sm group-hover:gap-3 transition-all mt-auto pt-2">
                            <EditableText
                              value={content.objekteDetailsLink}
                              onSave={(v) => handleSave('objekteDetailsLink', v)}
                            />
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-24"
                >
                  <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-10 h-10 text-brand-red" />
                  </div>
                  <EditableText
                    value={content.objekteEmptyTitle}
                    onSave={(v) => handleSave('objekteEmptyTitle', v)}
                    as="h2"
                    className="text-2xl font-display font-bold text-brand-dark mb-3"
                  />
                  <EditableText
                    value={content.objekteEmptyText}
                    onSave={(v) => handleSave('objekteEmptyText', v)}
                    as="p"
                    multiline
                    className="text-brand-gray max-w-md mx-auto mb-8"
                  />
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-red/90 transition-colors"
                  >
                    <EditableText
                      value={content.objekteEmptyButton}
                      onSave={(v) => handleSave('objekteEmptyButton', v)}
                    />
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
