import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  MapPin,
  Home,
  Maximize,
  Building,
  Calendar,
  Phone,
  Mail,
  Check,
  Send,
  Image as ImageIcon,
} from 'lucide-react';
import { useContent } from '../lib/contentContext';
import { cn } from '../lib/utils';
import { ImageLightbox } from '../components/ImageLightbox';
import { EditableText, EditableImage } from '../components/Editable';
import type { PropertyItem } from '../lib/content';

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

export default function ObjektDetail() {
  const { id } = useParams<{ id: string }>();
  const { content, isLoading, handleSave } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const updateProperty = (field: keyof PropertyItem, value: any) => {
    if (!content) return;
    const updated = content.properties.map((p) =>
      p.id === id ? { ...p, [field]: value } : p
    );
    handleSave('properties', updated);
  };

  const updateAgent = (field: string, value: string) => {
    if (!content || !property) return;
    const updated = content.properties.map((p) =>
      p.id === id ? { ...p, agent: { ...p.agent, [field]: value } } : p
    );
    handleSave('properties', updated);
  };

  const updateFeature = (index: number, value: string) => {
    if (!content || !property) return;
    const newFeatures = [...property.features];
    newFeatures[index] = value;
    updateProperty('features', newFeatures);
  };

  const updateImage = (index: number, url: string) => {
    if (!content || !property) return;
    const newImages = [...property.images];
    newImages[index] = url;
    updateProperty('images', newImages);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const property = content.properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <EditableText
            value={content.detailNotFoundTitle}
            onSave={(v) => handleSave('detailNotFoundTitle', v)}
            as="h1"
            className="text-3xl font-display font-bold text-brand-dark mb-4"
          />
          <EditableText
            value={content.detailNotFoundText}
            onSave={(v) => handleSave('detailNotFoundText', v)}
            as="p"
            className="text-brand-gray mb-8"
          />
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-red/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <EditableText
              value={content.detailNotFoundButton}
              onSave={(v) => handleSave('detailNotFoundButton', v)}
            />
          </Link>
        </motion.div>
      </div>
    );
  }

  const backLink = property.type === 'mieten' ? '/objekte?typ=mieten' : '/objekte?typ=kaufen';

  const keyFacts = [
    { labelKey: 'detailLabelZimmer' as const, value: property.rooms !== null ? `${property.rooms}` : '-', field: 'rooms' as const, icon: Home },
    { labelKey: 'detailLabelFlaeche' as const, value: property.area !== null ? `${property.area} m\u00B2` : '-', field: 'area' as const, icon: Maximize },
    { labelKey: 'detailLabelStockwerk' as const, value: property.floor || '-', field: 'floor' as const, icon: Building },
    { labelKey: 'detailLabelVerfuegbar' as const, value: property.available || '-', field: 'available' as const, icon: Calendar },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anfrage: ${property.title}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\n\nNachricht:\n${formData.message}`
    );
    window.location.href = `mailto:${property.agent.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Top Nav Bar */}
      <div className="bg-white border-b border-gray-100 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to={backLink}
            className="flex items-center gap-2 text-brand-gray hover:text-brand-red transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <EditableText
              value={property.type === 'mieten' ? content.objekteTabMieten : content.objekteTabKaufen}
              onSave={(v) => handleSave(property.type === 'mieten' ? 'objekteTabMieten' : 'objekteTabKaufen', v)}
            />
          </Link>
          <div className="flex items-center gap-2">
            <span className="bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
              <EditableText
                value={property.type === 'mieten' ? content.detailBadgeMiete : content.detailBadgeKauf}
                onSave={(v) => handleSave(property.type === 'mieten' ? 'detailBadgeMiete' : 'detailBadgeKauf', v)}
              />
            </span>
            <span className="bg-brand-light text-brand-dark px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
              <EditableText value={property.category} onSave={(v) => updateProperty('category', v)} />
            </span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {property.images.length >= 3 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 rounded-3xl overflow-hidden aspect-[16/10] cursor-pointer" onClick={() => setLightboxIndex(0)}>
              <EditableImage src={property.images[0]} onSave={(url) => updateImage(0, url)} className="w-full h-full" imgClassName="w-full h-full object-cover" alt={property.title} />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-4">
              <div className="rounded-3xl overflow-hidden aspect-[16/10] cursor-pointer" onClick={() => setLightboxIndex(1)}>
                <EditableImage src={property.images[1]} onSave={(url) => updateImage(1, url)} className="w-full h-full" imgClassName="w-full h-full object-cover" alt={`${property.title} 2`} />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[16/10] cursor-pointer" onClick={() => setLightboxIndex(2)}>
                <EditableImage src={property.images[2]} onSave={(url) => updateImage(2, url)} className="w-full h-full" imgClassName="w-full h-full object-cover" alt={`${property.title} 3`} />
              </div>
            </div>
          </div>
        ) : property.images.length === 2 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden aspect-[16/10] cursor-pointer" onClick={() => setLightboxIndex(0)}>
              <EditableImage src={property.images[0]} onSave={(url) => updateImage(0, url)} className="w-full h-full" imgClassName="w-full h-full object-cover" alt={property.title} />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[16/10] cursor-pointer" onClick={() => setLightboxIndex(1)}>
              <EditableImage src={property.images[1]} onSave={(url) => updateImage(1, url)} className="w-full h-full" imgClassName="w-full h-full object-cover" alt={`${property.title} 2`} />
            </div>
          </div>
        ) : (
          <div className="rounded-3xl overflow-hidden aspect-[16/9] max-h-[500px] cursor-pointer" onClick={() => setLightboxIndex(0)}>
            <EditableImage src={property.images[0]} onSave={(url) => updateImage(0, url)} className="w-full h-full" imgClassName="w-full h-full object-cover" alt={property.title} />
          </div>
        )}
      </section>

      {/* Main Content + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <EditableText
                value={property.title}
                onSave={(v) => updateProperty('title', v)}
                as="h1"
                className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-3"
              />
              <div className="flex items-center gap-1.5 text-brand-gray mb-4">
                <MapPin className="w-5 h-5 text-brand-red" />
                <EditableText
                  value={property.address}
                  onSave={(v) => updateProperty('address', v)}
                  as="span"
                />
              </div>
              <div className="text-3xl font-display font-bold text-brand-red">
                <EditableText
                  value={property.price}
                  onSave={(v) => updateProperty('price', v)}
                  as="span"
                  className="text-brand-red"
                />
                {property.priceDetail && (
                  <span className="text-base font-normal text-brand-gray ml-2">
                    <EditableText
                      value={property.priceDetail}
                      onSave={(v) => updateProperty('priceDetail', v)}
                      as="span"
                      className="text-brand-gray"
                    />
                  </span>
                )}
              </div>
            </motion.div>

            {/* Key Facts Bento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {keyFacts.map((fact) => (
                <div
                  key={fact.labelKey}
                  className="bg-white p-6 rounded-3xl text-center shadow-sm"
                >
                  <fact.icon className="w-6 h-6 text-brand-red mx-auto mb-2" />
                  <div className="text-xl font-display font-bold text-brand-dark">
                    <EditableText
                      value={fact.value}
                      onSave={(v) => updateProperty(fact.field, v)}
                    />
                  </div>
                  <div className="text-sm text-brand-gray mt-1">
                    <EditableText
                      value={content[fact.labelKey]}
                      onSave={(v) => handleSave(fact.labelKey, v)}
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            {property.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm"
              >
                <EditableText
                  value={content.detailBeschreibungTitle}
                  onSave={(v) => handleSave('detailBeschreibungTitle', v)}
                  as="h2"
                  className="text-xl font-display font-bold text-brand-dark mb-4"
                />
                <EditableText
                  value={property.description}
                  onSave={(v) => updateProperty('description', v)}
                  as="p"
                  multiline
                  className="text-brand-gray leading-relaxed"
                />
              </motion.div>
            )}

            {/* Features */}
            {property.features && property.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-3xl shadow-sm"
              >
                <EditableText
                  value={content.detailAusstattungTitle}
                  onSave={(v) => handleSave('detailAusstattungTitle', v)}
                  as="h2"
                  className="text-xl font-display font-bold text-brand-dark mb-4"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-brand-gray">
                      <div className="w-5 h-5 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-red" />
                      </div>
                      <EditableText
                        value={feature}
                        onSave={(v) => updateFeature(i, v)}
                        as="span"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-[180px] space-y-6">
              {/* Agent Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <EditableImage
                      src={property.agent.image}
                      onSave={(url) => updateAgent('image', url)}
                      className="w-full h-full"
                      imgClassName="w-full h-full object-cover"
                      alt={property.agent.name}
                    />
                  </div>
                  <div>
                    <EditableText
                      value={property.agent.name}
                      onSave={(v) => updateAgent('name', v)}
                      as="h3"
                      className="font-display font-bold text-brand-dark"
                    />
                    <EditableText
                      value={property.agent.role}
                      onSave={(v) => updateAgent('role', v)}
                      as="p"
                      className="text-sm text-brand-gray"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-3 text-brand-gray hover:text-brand-red transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-brand-red" />
                    <EditableText
                      value={property.agent.phone}
                      onSave={(v) => updateAgent('phone', v)}
                      className="text-brand-red"
                    />
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center gap-3 text-brand-red hover:text-brand-red/80 transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 text-brand-red" />
                    <EditableText
                      value={property.agent.email}
                      onSave={(v) => updateAgent('email', v)}
                      className="text-brand-red"
                    />
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-brand-dark p-6 rounded-3xl"
              >
                <EditableText
                  value={content.detailAnfrageTitle}
                  onSave={(v) => handleSave('detailAnfrageTitle', v)}
                  as="h3"
                  className="text-lg font-display font-bold text-white mb-4"
                />
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder={content.detailFormName}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder={content.detailFormEmail}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    required
                  />
                  <input
                    type="tel"
                    placeholder={content.detailFormTelefon}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors text-sm"
                  />
                  <textarea
                    placeholder={content.detailFormNachricht}
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors text-sm resize-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-brand-red text-white py-3 rounded-xl font-semibold hover:bg-brand-red/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <EditableText
                      value={content.detailAnfrageButton}
                      onSave={(v) => handleSave('detailAnfrageButton', v)}
                    />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={property.images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
