import { useEffect, useState } from 'react';
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

function FadeImg({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!loaded && !error && <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-inherit" />}
      {error && <div className="absolute inset-0 bg-gray-100 flex items-center justify-center"><ImageIcon className="w-8 h-8 text-gray-300" /></div>}
      <img src={src} alt={alt} className={cn(className, 'transition-opacity duration-500', loaded ? 'opacity-100' : 'opacity-0')} loading="lazy" referrerPolicy="no-referrer" onLoad={() => setLoaded(true)} onError={() => setError(true)} {...props} />
    </div>
  );
}

export default function ObjektDetail() {
  const { id } = useParams<{ id: string }>();
  const { content, isLoading } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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
          <h1 className="text-3xl font-display font-bold text-brand-dark mb-4">
            Objekt nicht gefunden
          </h1>
          <p className="text-brand-gray mb-8">
            Das gesuchte Objekt existiert nicht oder wurde entfernt.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-red/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zur Startseite
          </Link>
        </motion.div>
      </div>
    );
  }

  const backLink = property.type === 'mieten' ? '/objekte?typ=mieten' : '/objekte?typ=kaufen';
  const backLabel = property.type === 'mieten' ? 'Mietobjekte' : 'Kaufobjekte';

  const keyFacts = [
    { label: 'Zimmer', value: property.rooms !== null ? `${property.rooms}` : '-', icon: Home },
    { label: 'Fläche', value: property.area !== null ? `${property.area} m\u00B2` : '-', icon: Maximize },
    { label: 'Stockwerk', value: property.floor || '-', icon: Building },
    { label: 'Verfügbar', value: property.available || '-', icon: Calendar },
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
      <div className="bg-white border-b border-gray-100 sticky top-[96px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to={backLink}
            className="flex items-center gap-2 text-brand-gray hover:text-brand-red transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>
          <div className="flex items-center gap-2">
            <span className="bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
              {property.type === 'mieten' ? 'Miete' : 'Kauf'}
            </span>
            <span className="bg-brand-light text-brand-dark px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
              {property.category}
            </span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[40vh] md:h-[60vh]">
          {/* Main Image */}
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden group">
            <FadeImg
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Side Images */}
          <div className="hidden md:grid grid-rows-2 gap-4">
            {property.images[1] && (
              <div className="relative rounded-3xl overflow-hidden group">
                <FadeImg
                  src={property.images[1]}
                  alt={`${property.title} 2`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
            {property.images[2] && (
              <div className="relative rounded-3xl overflow-hidden group">
                <FadeImg
                  src={property.images[2]}
                  alt={`${property.title} 3`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
          </div>
        </div>
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
              <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-3">
                {property.title}
              </h1>
              <div className="flex items-center gap-1.5 text-brand-gray mb-4">
                <MapPin className="w-5 h-5 text-brand-red" />
                <span>{property.address}</span>
              </div>
              <div className="text-3xl font-display font-bold text-brand-red">
                {property.price}
                {property.priceDetail && (
                  <span className="text-base font-normal text-brand-gray ml-2">
                    {property.priceDetail}
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
                  key={fact.label}
                  className="bg-white p-6 rounded-3xl text-center shadow-sm"
                >
                  <fact.icon className="w-6 h-6 text-brand-red mx-auto mb-2" />
                  <div className="text-xl font-display font-bold text-brand-dark">
                    {fact.value}
                  </div>
                  <div className="text-sm text-brand-gray mt-1">{fact.label}</div>
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
                <h2 className="text-xl font-display font-bold text-brand-dark mb-4">
                  Beschreibung
                </h2>
                <p className="text-brand-gray leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
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
                <h2 className="text-xl font-display font-bold text-brand-dark mb-4">
                  Ausstattung
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-brand-gray">
                      <div className="w-5 h-5 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-red" />
                      </div>
                      <span>{feature}</span>
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
                    <FadeImg
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-dark">
                      {property.agent.name}
                    </h3>
                    <p className="text-sm text-brand-gray">{property.agent.role}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-3 text-brand-gray hover:text-brand-red transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-brand-red" />
                    {property.agent.phone}
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center gap-3 text-brand-gray hover:text-brand-red transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 text-brand-red" />
                    {property.agent.email}
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
                <h3 className="text-lg font-display font-bold text-white mb-4">
                  Anfrage senden
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors text-sm"
                  />
                  <textarea
                    placeholder="Nachricht"
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
                    Anfrage senden
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
