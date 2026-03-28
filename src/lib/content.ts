export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string[];
  phone: string;
  mobile?: string;
  email: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PropertyItem {
  id: string;
  title: string;
  type: 'mieten' | 'kaufen';
  category: string;
  price: string;
  priceDetail: string;
  netPrice?: string;
  extraCosts?: string;
  location: string;
  address: string;
  rooms: number | null;
  area: number | null;
  floor: string;
  available: string;
  yearBuilt?: number | null;
  objectNumber?: string;
  description: string;
  features: string[];
  images: string[];
  agent: {
    name: string;
    role: string;
    image: string;
    phone: string;
    email: string;
  };
}

export interface SiteContent {
  // Hero
  heroImage: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroCta1: string;
  heroCta2: string;

  // Home Services Overview
  servicesOverviewTitle: string;
  servicesOverviewSubtitle: string;
  homeCard1Title: string;
  homeCard1Desc: string;
  homeCard2Title: string;
  homeCard2Desc: string;
  homeCard3Title: string;
  homeCard3Desc: string;

  // News
  newsLabel: string;
  newsTitle: string;
  newsText: string;
  newsLinkUrl: string;
  newsLinkText: string;
  newsImage: string;

  // Team
  teamHeroImage: string;
  teamTitle: string;
  teamSubtitle: string;
  teamMembers: TeamMember[];

  // Services Page
  servicesHeroImage: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicesIntro: string;
  servicesList: ServiceItem[];

  // Contact
  contactHeroImage: string;
  contactTitle: string;
  contactSubtitle: string;
  companyName: string;
  address: string;
  addressZip: string;
  addressDescription: string;
  phone: string;
  fax: string;
  email: string;
  phoneHoursMoDo: string;
  phoneHoursFr: string;
  schalterDi: string;
  schalterDo: string;
  googleMapsUrl: string;

  // Mietobjekte
  mietHeroImage: string;
  mietTitle: string;
  mietSubtitle: string;

  // Kaufobjekte
  kaufHeroImage: string;
  kaufTitle: string;
  kaufSubtitle: string;

  // Properties
  properties: PropertyItem[];

  // Impressum
  impressumHeroImage: string;
  impressumCompanyName: string;
  impressumAddress: string;
  impressumZip: string;
  impressumCountry: string;
  impressumEmail: string;
  impressumPerson: string;
  impressumUID: string;
  impressumUIDLink: string;

  // Datenschutz
  datenschutzHeroImage: string;
  datenschutzIntro: string;
  datenschutzUsage: string;
  datenschutzSecurity: string;
  datenschutzContact: string;
  datenschutzRights: string;

  // Footer
  footerDescription: string;
  footerPhone: string;
  footerFax: string;
  footerEmail: string;
}

const defaultContent: SiteContent = {
  // Hero
  heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  heroTitle: 'Wir sind persönlich',
  heroTitleHighlight: 'für Sie da.',
  heroSubtitle: 'Ihr kompetenter Partner für die Bewirtschaftung von Mietobjekten in den Kantonen Thurgau und St. Gallen. Vertrauen, das verbindet.',
  heroCta1: 'Mietobjekte finden',
  heroCta2: 'Kontakt aufnehmen',

  // Home Services
  servicesOverviewTitle: 'Unsere Kernkompetenzen',
  servicesOverviewSubtitle: 'Mit den Dienstleistungen der RB Immobilien Treuhand AG sind Sie bestens beraten und betreut.',
  homeCard1Title: 'Mieten',
  homeCard1Desc: 'Sie suchen ein neues Zuhause? Wir haben das passende Objekt für Sie.',
  homeCard2Title: 'Kaufen',
  homeCard2Desc: 'Sie möchten eine Immobilie erwerben? Entdecken Sie unsere Kaufobjekte.',
  homeCard3Title: 'Verwalten',
  homeCard3Desc: 'Professionelle Liegenschaftsverwaltung für einen sorgenfreien Alltag.',

  // News
  newsLabel: 'Aktuell',
  newsTitle: 'Die RB Immobilien Treuhand AG kommt in neue Hände.',
  newsText: 'Lesen Sie den aktuellen Artikel aus dem Weinfelder Anzeiger vom 25.06.2025 und erfahren Sie mehr über die Zukunft unseres Unternehmens.',
  newsLinkUrl: 'https://rbimmobilien.ch/userfiles/WAZ-Artikel%20RB%20Immobilien%20Treuhand%20AG.pdf',
  newsLinkText: 'Artikel lesen',
  newsImage: 'https://rbimmobilien.ch/userfiles/WAZ.jpg',

  // Team
  teamHeroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  teamTitle: 'Unser Team',
  teamSubtitle: 'Wir sind persönlich für Sie da.',
  teamMembers: [
    { id: '1', name: 'Mara Schönholzer', role: 'Inhaberin | Geschäftsführerin', qualifications: ['eidg. dipl. Immobilientreuhänderin', 'Immobilienbewirtschafterin mit eidg. FA'], phone: '+41 71 626 01 23', mobile: '+41 79 966 00 24', email: 'm.schoenholzer@rbimmobilien.ch', image: 'https://rbimmobilien.ch/userfiles/Mara_Schoenholzer.jpg' },
    { id: '2', name: 'René Bock', role: 'Mitglied des Verwaltungsrates', qualifications: ['lic. iur. HSG'], phone: '+41 71 626 01 40', email: 'r.bock@rbimmobilien.ch', image: 'https://rbimmobilien.ch/userfiles/Rene_Bock.jpg' },
    { id: '3', name: 'Matthias Bichsel', role: 'Immobilienbewirtschafter', qualifications: [], phone: '+41 71 626 01 10', mobile: '+41 79 858 87 79', email: 'm.bichsel@rbimmobilien.ch', image: 'https://rbimmobilien.ch/userfiles/team_mb.jpg' },
    { id: '4', name: 'Vivian Keller', role: 'Immobilienbewirtschafterin', qualifications: ['mit eidg. Fachausweis'], phone: '+41 71 626 01 16', mobile: '+41 79 281 00 20', email: 'v.keller@rbimmobilien.ch', image: 'https://rbimmobilien.ch/userfiles/vk.jpg' },
    { id: '5', name: 'Michelle Suter', role: 'Buchhaltung', qualifications: [], phone: '+41 71 626 01 20', email: 'm.suter@rbimmobilien.ch', image: 'https://rbimmobilien.ch/userfiles/Michelle_Suter.jpg' },
    { id: '6', name: 'Vanessa Rahming', role: 'Buchhaltung', qualifications: [], phone: '+41 71 626 01 25', email: 'v.rahming@rbimmobilien.ch', image: 'https://rbimmobilien.ch/userfiles/team_vr.jpg' },
    { id: '7', name: 'Priska Brülisauer', role: 'Administration', qualifications: [], phone: '+41 71 626 01 24', email: 'p.bruelisauer@rbimmobilien.ch', image: 'https://rbimmobilien.ch/userfiles/Priska%20Br%C3%BClisauer%20(Website).jpg' },
    { id: '8', name: 'Verena Meier', role: 'Administration', qualifications: [], phone: '+41 71 626 01 22', email: 'v.meier@rbimmobilien.ch', image: 'https://rbimmobilien.ch/userfiles/team_vm.jpg' },
    { id: '9', name: 'Manuel Kohler', role: 'Informatik', qualifications: [], phone: '+41 71 620 10 60', email: 'm.kohler@rbimmobilien.ch', image: 'https://rbimmobilien.ch/userfiles/team_mk.jpg' },
  ],

  // Services
  servicesHeroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  servicesTitle: 'Dienstleistungen',
  servicesSubtitle: 'Für Immobilien und Mietliegenschaften',
  servicesIntro: 'Die RB Immobilien Treuhand AG verfügt über umfassende Kompetenzen im Immobiliensektor. Unser Ziel ist, Sie mit professionellen Dienstleistungen von zeitraubenden Verwaltungsarbeiten zu entlasten.',
  servicesList: [
    { id: '1', icon: 'Building2', title: 'Bewirtschaftung', description: 'Wir bewirtschaften Mietobjekte professionell und zuverlässig.' },
    { id: '2', icon: 'Briefcase', title: 'Geschäftsführung', description: 'Wir übernehmen die Geschäftsführung von Immobiliengesellschaften.' },
    { id: '3', icon: 'Wrench', title: 'Unterhalt & Reparatur', description: 'Wir betreuen Unterhalts- und Reparaturarbeiten mit dem Ziel der langfristigen Werterhaltung.' },
    { id: '4', icon: 'FileText', title: 'Sanierungsarbeiten', description: 'Wir planen und begleiten Sanierungsarbeiten von der Offerte bis zur Ausführung.' },
    { id: '5', icon: 'Calculator', title: 'Abrechnungen', description: 'Wir rechnen Heiz- und Nebenkosten fachgerecht ab.' },
    { id: '6', icon: 'PiggyBank', title: 'Finanzierung', description: 'Wir beraten in Finanzierungsfragen rund um Ihre Immobilie.' },
  ],

  // Contact
  contactHeroImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  contactTitle: 'Kontakt',
  contactSubtitle: 'Wir freuen uns auf Ihre Kontaktaufnahme.',
  companyName: 'RB Immobilien Treuhand AG',
  address: 'Marktplatz 3',
  addressZip: '8570 Weinfelden',
  addressDescription: 'Der Eingang ist in der Bernerhaus-Passage (Durchgang von Migros zu Marktplatz). Unsere Büros befinden sich in der 1. Etage. Barrierefreier Zugang dank Lift und direktem Zugang aus der Tiefgarage (Felsenparking).',
  phone: '+41 71 626 01 01',
  fax: '+41 71 626 01 02',
  email: 'info@rbimmobilien.ch',
  phoneHoursMoDo: '08.30 - 12.00 / 13.30 - 17.00',
  phoneHoursFr: '08.30 - 12.00 / 13.30 - 16.00',
  schalterDi: '08.30 - 11.30',
  schalterDo: '13.30 - 16.30',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.303272635905!2d9.10842031562858!3d47.56191997918193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479af6a8a0b0b0b1%3A0x6b8b8b8b8b8b8b8b!2sBahnhofstrasse%2020%2C%208570%20Weinfelden!5e0!3m2!1sde!2sch!4v1620000000000!5m2!1sde!2sch',

  // Mietobjekte
  mietHeroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  mietTitle: 'Mietobjekte',
  mietSubtitle: 'Finden Sie Ihr neues Zuhause zur Miete.',

  // Kaufobjekte
  kaufHeroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  kaufTitle: 'Kaufobjekte',
  kaufSubtitle: 'Entdecken Sie attraktive Immobilien zum Kauf.',

  // Properties
  properties: [
    { id: '6056329', title: 'Wohnen in der Stadt und doch im Grünen!', type: 'mieten', category: 'Wohnung', price: "CHF 1'660", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 1'380", extraCosts: 'CHF 280', location: 'Wil SG', address: 'Lettenstrasse 1/1a, 9500 Wil SG', rooms: 4.5, area: 83, floor: '2. OG', available: '16.07.2026', objectNumber: '4409..222', description: 'Helle, heimelige 4½ Zimmerwohnung im 2. OG eines gepflegten MFH mit 2x7 Wohnungen.\n\nKüche mit Glaskeramikherd, Geschirrspüler, Steinabdeckung, Plattenboden. Wohn-/Esszimmer, Zimmer und Korridor mit Parkett. Einbauschränke. Gefliestes Bad mit Badewanne. Balkon mit Windfang. Estrich- und Kellerabteil. Kein Lift. Garagenbox CHF 120/Mt. möglich.', features: ['Glaskeramikherd', 'Geschirrspüler', 'Steinabdeckung', 'Parkettboden', 'Einbauschränke', 'Balkon mit Windfang', 'Estrich- und Kellerabteil', 'Garagenbox möglich'], images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Priska Brülisauer', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/Priska%20Br%C3%BClisauer%20(Website).jpg', phone: '+41 71 626 01 24', email: 'p.bruelisauer@rbimmobilien.ch' } },
    { id: '6054601', title: 'Wohnung zu super Preis-/Leistungsverhältnis in Weinfelden!', type: 'mieten', category: 'Wohnung', price: "CHF 1'204", priceDetail: 'Bruttomiete / Monat', netPrice: 'CHF 904', extraCosts: 'CHF 300', location: 'Weinfelden', address: 'Fichtenstrasse 19, 8570 Weinfelden', rooms: 3.0, area: 70, floor: 'Erdgeschoss', available: '01.05.2026', yearBuilt: 1962, objectNumber: '2383..201', description: 'Helle 3 Zimmerwohnung im EG eines MFH mit 2x7 Einheiten, Nähe Coop-Einkaufszentrum Thurmarkt.\n\nKüche mit 3 Herdplatten, Backofen, Vinylboden. Wohn-/Esszimmer mit Laminat. Bad mit Badewanne. Balkon. Hunde nicht erlaubt. Tiefgaragenplatz CHF 130/Mt. möglich.', features: ['Nähe Einkaufszentrum', 'Vinylboden in Küche', 'Laminat im Wohnzimmer', 'Bad mit Badewanne', 'Balkon', 'Tiefgaragenplatz möglich'], images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Priska Brülisauer', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/Priska%20Br%C3%BClisauer%20(Website).jpg', phone: '+41 71 626 01 24', email: 'p.bruelisauer@rbimmobilien.ch' } },
    { id: '6053861', title: 'Aussenabstellplätze und einen Tiefgaragenplatz zu vermieten', type: 'mieten', category: 'Parkplatz', price: 'CHF 50', priceDetail: 'Bruttomiete / Monat (Aussenplatz)', location: 'Bürglen TG', address: 'Säntisstrasse 45, 8575 Bürglen TG', rooms: null, area: null, floor: 'Aussen / TG', available: '01.04.2026', objectNumber: '1366..805', description: 'Aussenabstellplätze CHF 50 zzgl. MWST sowie Tiefgaragenplatz CHF 120 zzgl. MWST.', features: ['Aussenabstellplatz', 'Tiefgaragenplatz optional', 'Zentrale Lage'], images: ['https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Priska Brülisauer', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/Priska%20Br%C3%BClisauer%20(Website).jpg', phone: '+41 71 626 01 24', email: 'p.bruelisauer@rbimmobilien.ch' } },
    { id: '6053860', title: 'Bastelraum zu vermieten!', type: 'mieten', category: 'Werkstatt / Hobby', price: 'CHF 120', priceDetail: 'Bruttomiete / Monat', location: 'Bürglen TG', address: 'Säntisstrasse 45, 8575 Bürglen TG', rooms: null, area: 14.1, floor: 'Untergeschoss', available: '01.05.2026', yearBuilt: 2008, objectNumber: '1366..601', description: 'Bastelraum ca. 14.10 m² im UG. Stromanschluss und Lavabo vorhanden. Lift im Gebäude.\n\nBesichtigung: Herr Semi Harun 076 455 74 70.', features: ['Stromanschluss', 'Lavabo vorhanden', 'Lift im Gebäude', 'Zentrale Lage'], images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Priska Brülisauer', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/Priska%20Br%C3%BClisauer%20(Website).jpg', phone: '+41 71 626 01 24', email: 'p.bruelisauer@rbimmobilien.ch' } },
    { id: '6043150', title: 'Ruhige Wohnlage am Stadtrand von Arbon', type: 'mieten', category: 'Wohnung', price: "CHF 1'580", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 1'220", extraCosts: 'CHF 360', location: 'Arbon', address: 'Grüntalstrasse 19, 9320 Arbon', rooms: 4.5, area: 98, floor: '1. OG', available: '01.08.2026', yearBuilt: 1984, objectNumber: '4419..112', description: 'Schöne Wohnung in gepflegtem 7-Parteien Haus. Wird komplett neu gestrichen.\n\nOffene Küche mit Glaskeramikherd, Geschirrspüler, Parkettboden. Neuer Vinylboden. 2 Bäder (Badewanne + Dusche). Korridor mit Einbauschrank. Keller, Estrichabteil. Balkon. Kein Lift. TG-Platz CHF 120/Mt. möglich.', features: ['Neu gestrichen', 'Offene Küche', 'Glaskeramikherd', 'Geschirrspüler', '2 Badezimmer', 'Balkon', 'Keller & Estrich', 'TG-Platz möglich'], images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Priska Brülisauer', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/Priska%20Br%C3%BClisauer%20(Website).jpg', phone: '+41 71 626 01 24', email: 'p.bruelisauer@rbimmobilien.ch' } },
    { id: '6039971', title: 'Tiefgaragenplatz zu vermieten', type: 'mieten', category: 'Tiefgarage', price: 'CHF 120', priceDetail: 'Bruttomiete / Monat', location: 'Weinfelden', address: 'Unterthurenstrasse 4, 8570 Weinfelden', rooms: null, area: null, floor: 'Tiefgarage', available: 'per sofort / nach Vereinbarung', objectNumber: '4395..710', description: 'Tiefgaragenplatz in Weinfelden zu vermieten.', features: ['Tiefgarage', 'Zentrale Lage', 'Sicherer Abstellplatz'], images: ['https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Verena Meier', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/team_vm.jpg', phone: '+41 71 626 01 22', email: 'v.meier@rbimmobilien.ch' } },
    { id: '6036171', title: 'Ihr neues Zuhause am Rande von Weinfelden', type: 'mieten', category: 'Wohnung', price: "CHF 1'880", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 1'560", extraCosts: 'CHF 320', location: 'Weinfelden', address: 'Wilerstrasse 35, 8570 Weinfelden', rooms: 4.5, area: 113, floor: '3. OG', available: '01.05.2026', yearBuilt: 1985, objectNumber: '4317..232', description: 'Helle, teilsanierte 4½ Zimmerwohnung im 3. OG. 2 Zimmer mit Laminat, übrige mit neuem Kunststoffdesignbelag.\n\nNeue Küche mit Glaskeramikherd, Backofen, Geschirrspüler, eigenem Waschturm. Saniertes Bad. Separate Gästetoilette. Überdachter Balkon mit Windschutzglas. Kein Lift. TG-Platz CHF 120/Mt. oder Aussenplatz CHF 50/Mt. möglich.', features: ['Teilsaniert', 'Neue Küche', 'Eigener Waschturm', 'Saniertes Bad', 'Gästetoilette', 'Überdachter Balkon', 'Windschutzglas', 'Parkplatz möglich'], images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Verena Meier', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/team_vm.jpg', phone: '+41 71 626 01 22', email: 'v.meier@rbimmobilien.ch' } },
    { id: '6025867', title: 'Charmanter Raum mit vielseitigen Möglichkeiten - für stilles Gewerbe', type: 'mieten', category: 'Gewerberäume', price: 'CHF 780', priceDetail: 'Bruttomiete / Monat', netPrice: 'CHF 640', extraCosts: 'CHF 140', location: 'Weinfelden', address: 'Frauenfelderstrasse 48, 8570 Weinfelden', rooms: null, area: null, floor: 'Erdgeschoss', available: 'nach Vereinbarung', yearBuilt: 1700, objectNumber: '4371..101', description: 'Zentrale Lage im alten Stadtkern. Attraktiver, vielseitig nutzbarer Raum (aktuell Theorielokal).\n\nHistorisches Gebäude, eigener Zugang. Geeignet für stilles Gewerbe: Massage-/Kosmetikstudio, Therapieraum, Atelier, Büro. Küchenzeile vorhanden.', features: ['Zentrale Lage', 'Historisches Gebäude', 'Eigener Zugang', 'Vielseitig nutzbar', 'Küchenzeile', 'Stilles Gewerbe'], images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Verena Meier', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/team_vm.jpg', phone: '+41 71 626 01 22', email: 'v.meier@rbimmobilien.ch' } },
    { id: '6024700', title: 'Erstvermietung im Grünen - Ihre neue Wohlfühloase mit Stil', type: 'mieten', category: 'Wohnung (Neubau)', price: "CHF 2'530", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 2'250", extraCosts: 'CHF 280', location: 'Bürglen TG', address: 'Kanalstrasse 14a/b, 8575 Bürglen TG', rooms: 4.5, area: 131.8, floor: 'Dachgeschoss', available: '01.11.2026', yearBuilt: 2026, objectNumber: 'C2-2-31', description: 'Quartier Blumenau an der Thur. Gebäude C2 mit 14 Mietwohnungen (2.5-, 3.5-, 4.5-Zi). Zeitgemässes Wohnen in naturnaher Umgebung.', features: ['Erstvermietung', 'Neubau', 'Dachgeschoss', 'Naturnahe Umgebung', 'Zeitgemässes Wohnen', 'Hoher Ausbaustandard'], images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Mara Schönholzer', role: 'Inhaberin | Geschäftsführerin', image: 'https://rbimmobilien.ch/userfiles/Mara_Schoenholzer.jpg', phone: '+41 71 626 01 23', email: 'm.schoenholzer@rbimmobilien.ch' } },
    { id: '6024644', title: 'Erstvermietung im Grünen - Ihre neue Wohlfühloase mit Stil (2. OG)', type: 'mieten', category: 'Wohnung (Neubau)', price: "CHF 1'820", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 1'600", extraCosts: 'CHF 220', location: 'Bürglen TG', address: 'Kanalstrasse 14a/b, 8575 Bürglen TG', rooms: 3.5, area: 100.3, floor: '2. OG', available: '01.11.2026', yearBuilt: 2026, objectNumber: 'C2-1-21', description: 'Quartier Blumenau, Gebäude C2, Neubau.', features: ['Erstvermietung', 'Neubau', 'Naturnahe Umgebung', 'Zeitgemässes Wohnen'], images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Mara Schönholzer', role: 'Inhaberin | Geschäftsführerin', image: 'https://rbimmobilien.ch/userfiles/Mara_Schoenholzer.jpg', phone: '+41 71 626 01 23', email: 'm.schoenholzer@rbimmobilien.ch' } },
    { id: '6024632', title: 'Erstvermietung im Grünen - Ihre neue Wohlfühloase mit Stil (EG)', type: 'mieten', category: 'Wohnung (Neubau)', price: "CHF 2'210", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 1'850", extraCosts: 'CHF 360', location: 'Bürglen TG', address: 'Kanalstrasse 14a/b, 8575 Bürglen TG', rooms: 4.5, area: 106.9, floor: 'Erdgeschoss', available: '01.11.2026', yearBuilt: 2026, objectNumber: 'C2-1-02', description: 'Quartier Blumenau, Gebäude C2, Neubau.', features: ['Erstvermietung', 'Neubau', 'Gartenanteil', 'Naturnahe Umgebung'], images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Mara Schönholzer', role: 'Inhaberin | Geschäftsführerin', image: 'https://rbimmobilien.ch/userfiles/Mara_Schoenholzer.jpg', phone: '+41 71 626 01 23', email: 'm.schoenholzer@rbimmobilien.ch' } },
    { id: '6022228', title: 'Erstvermietung im Grünen - Ihre neue Wohlfühloase mit Stil (2.5 Zi)', type: 'mieten', category: 'Wohnung (Neubau)', price: "CHF 1'360", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 1'200", extraCosts: 'CHF 160', location: 'Bürglen TG', address: 'Kanalstrasse 14a/b, 8575 Bürglen TG', rooms: 2.5, area: 56.8, floor: '2. OG', available: '01.11.2026', yearBuilt: 2026, objectNumber: 'C2-2-22', description: 'Quartier Blumenau, Gebäude C2, Neubau.', features: ['Erstvermietung', 'Neubau', 'Ideal für Singles', 'Naturnahe Umgebung'], images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Mara Schönholzer', role: 'Inhaberin | Geschäftsführerin', image: 'https://rbimmobilien.ch/userfiles/Mara_Schoenholzer.jpg', phone: '+41 71 626 01 23', email: 'm.schoenholzer@rbimmobilien.ch' } },
    { id: '6003679', title: 'Attraktive Wohnung mit schöner Aussicht ins Grüne!', type: 'mieten', category: 'Wohnung', price: "CHF 1'530", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 1'280", extraCosts: 'CHF 250', location: 'Arbon', address: 'Grüntalstrasse 36, 9320 Arbon', rooms: 3.5, area: 86, floor: '2. OG', available: '01.04.2026', yearBuilt: 1990, objectNumber: '4396..121', description: 'Familienfreundliche Wohnung an ruhiger Lage. Offene Küche mit Glaskeramik, Geschirrspüler. Laminat-/Parkettboden. Bad mit Badewanne + separates Gäste-WC. Balkon mit Abendsonne.\n\nKatzen erlaubt, Hunde nicht. TG-Platz CHF 120/Mt. möglich.\n\nBesichtigung: Herr Stoss Valon, +41 76 441 60 71', features: ['Ruhige Lage', 'Aussicht ins Grüne', 'Offene Küche', 'Glaskeramik', 'Gäste-WC', 'Balkon', 'Abendsonne', 'Katzen erlaubt'], images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Priska Brülisauer', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/Priska%20Br%C3%BClisauer%20(Website).jpg', phone: '+41 71 626 01 24', email: 'p.bruelisauer@rbimmobilien.ch' } },
    { id: '5990573', title: 'Im Herzen von Frauenfeld - historisch und modern', type: 'mieten', category: 'Wohnung', price: "CHF 1'880", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 1'680", extraCosts: 'CHF 200', location: 'Frauenfeld', address: 'Bankgasse 6, 8500 Frauenfeld', rooms: 2.5, area: 83, floor: '2. OG', available: 'nach Vereinbarung', objectNumber: '2486..121', description: 'Grosszügige, aufwendig renovierte Wohnung in historischem Gebäude im Stadtzentrum. Alter Charme + neues Design. Grosse, helle Räume. Offene Küche mit Geschirrspüler, Bora-Dunstabzug. Schlafzimmer mit antikem Parkett. Modernes Bad. Keine Hunde.', features: ['Zentrale Lage', 'Historisches Gebäude', 'Aufwendig renoviert', 'Bora-Dunstabzug', 'Antikes Parkett', 'Modernes Design', 'Helle Räume'], images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Priska Brülisauer', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/Priska%20Br%C3%BClisauer%20(Website).jpg', phone: '+41 71 626 01 24', email: 'p.bruelisauer@rbimmobilien.ch' } },
    { id: '5982169', title: 'modernes Wohnen an zentraler Lage und viel Platz zum Wohlfühlen', type: 'mieten', category: 'Wohnung', price: "CHF 2'280", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 2'100", extraCosts: 'CHF 180', location: 'Weinfelden', address: 'Frauenfelderstrasse 70, 8570 Weinfelden', rooms: 4.5, area: 105, floor: '2. OG', available: 'nach Vereinbarung', description: 'Grosszügige 4.5-Zimmer-Wohnung im Eigentumsstandard. 2 Nasszellen (Bad mit Badewanne + Dusche). Eigener Waschturm + Tumbler. Riesige Küche mit viel Stauraum. Einbauschränke. Neue Vinylböden. Grosszügiger Keller. Gedeckter Balkon. Lift. Garagenplatz CHF 160/Mt. möglich.', features: ['Eigentumsstandard', '2 Nasszellen', 'Eigener Waschturm', 'Riesige Küche', 'Einbauschränke', 'Gedeckter Balkon', 'Lift', 'Garagenplatz möglich'], images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Mara Schönholzer', role: 'Inhaberin | Geschäftsführerin', image: 'https://rbimmobilien.ch/userfiles/Mara_Schoenholzer.jpg', phone: '+41 71 626 01 23', email: 'm.schoenholzer@rbimmobilien.ch' } },
    { id: '5957650', title: 'Ihre neue Wohlfühloase!', type: 'mieten', category: 'Wohnung', price: "CHF 2'330", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 1'970", extraCosts: 'CHF 360', location: 'Weinfelden', address: 'Walkestrasse 12, 8570 Weinfelden', rooms: 4.5, area: 117, floor: '2. OG', available: 'nach Vereinbarung', yearBuilt: 2011, objectNumber: '1323..122', description: 'Attraktive, lichtdurchflutete 4½ Zi-Wohnung im 2. Stock, gepflegtes MFH mit 5 Einheiten. Hohe Räume, automatische Raumlüftung.\n\nGrosszügiger Essbereich/Küche mit Glaskeramikherd, Geschirrspüler. Parkett. Reduit beim Wohnzimmer. Bad mit Dusche/Badewanne/Doppellavabo. Separate Dusche/WC. Eigener Waschturm. Überdachter Balkon. Innenparkplatz CHF 150/Mt.', features: ['Lichtdurchflutet', 'Hohe Räume', 'Raumlüftung', 'Parkett', 'Reduit', 'Doppellavabo', 'Eigener Waschturm', 'Überdachter Balkon'], images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Verena Meier', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/team_vm.jpg', phone: '+41 71 626 01 22', email: 'v.meier@rbimmobilien.ch' } },
    { id: '5944349', title: 'Ihre Ideen brauchen Platz? Wir haben ihn!', type: 'mieten', category: 'Gewerberäume (Halle)', price: 'CHF 80 / m² / J', priceDetail: "ca. CHF 9'333 / Monat", location: 'Weinfelden', address: 'Bürglenstrasse 33, 8570 Weinfelden', rooms: null, area: 1400, floor: 'Erdgeschoss', available: 'per sofort', description: 'Grosszügige, ebenerdige Halle am Rande von Weinfelden. Optimale Anbindung an Umfahrungsstrasse.\n\n3 Sektoren (2 Haupthallen + Vorhalle). Geeignet für Lager, Handwerksbetrieb, Logistik. Bisher für Lagerung und Kommissionierarbeiten genutzt.', features: ['Ebenerdig', 'Gute Anbindung', '3 Sektoren', 'Lager / Logistik', 'Viel Platz', 'Zentrale Lage'], images: ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Mara Schönholzer', role: 'Inhaberin | Geschäftsführerin', image: 'https://rbimmobilien.ch/userfiles/Mara_Schoenholzer.jpg', phone: '+41 71 626 01 23', email: 'm.schoenholzer@rbimmobilien.ch' } },
    { id: '5866131', title: 'Büro/Gewerberaum zu vermieten', type: 'mieten', category: 'Büro', price: "CHF 1'329", priceDetail: 'Bruttomiete inkl. MwSt', netPrice: "CHF 1'050", extraCosts: 'CHF 180', location: 'Mauren TG', address: 'Gewerbepark Industriestrasse 4, 8576 Mauren TG', rooms: null, area: 87, floor: '1. OG', available: 'nach Vereinbarung', yearBuilt: 2013, objectNumber: '4392..912', description: 'Lichtdurchfluteter Raum mit Betonboden. Vielseitig nutzbar. Personenlift. WC zur Mitbenützung.\n\nParkplätze CHF 40/Mt. oder Garagenplatz CHF 120/Mt. möglich (zzgl. MwSt).', features: ['Lichtdurchflutet', 'Betonboden', 'Personenlift', 'WC Mitbenützung', 'Gewerbepark', 'Parkplatz möglich'], images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Priska Brülisauer', role: 'Administration', image: 'https://rbimmobilien.ch/userfiles/Priska%20Br%C3%BClisauer%20(Website).jpg', phone: '+41 71 626 01 24', email: 'p.bruelisauer@rbimmobilien.ch' } },
    { id: '5804605', title: '3½ Zimmer-Erdgeschosswohnung mit grossem Sitzplatz', type: 'mieten', category: 'Wohnung', price: "CHF 1'665", priceDetail: 'Bruttomiete / Monat', netPrice: "CHF 1'430", extraCosts: 'CHF 235', location: 'Bürglen TG', address: 'Bahnhofstrasse 15, 8575 Bürglen TG', rooms: 3.5, area: 75.6, floor: 'Erdgeschoss', available: 'nach Vereinbarung', objectNumber: '002', description: 'Attraktive EG-Wohnung. Küche/Wohnzimmer/Korridor mit Plattenböden, übrige Zimmer mit Designbelag. Offene Küche mit Glaskeramikherd, Geschirrspüler.\n\nGrosszügiger, überdachter Sitzplatz (Süd-/Westseite) mit Geräteraum. Nasszelle mit Dusche. Eigener Waschturm. Kellerabteil, Lift. TG-Platz CHF 125/Mt. oder Aussenplatz CHF 70/Mt. möglich.', features: ['Erdgeschoss', 'Grosser Sitzplatz', 'Plattenböden', 'Offene Küche', 'Eigener Waschturm', 'Lift', 'Kellerabteil', 'TG-Platz möglich'], images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'], agent: { name: 'Immobilien Altwegg AG', role: 'Partner / Herr Jörg Altwegg', image: 'https://ui-avatars.com/api/?name=Joerg+Altwegg&background=f4f4f4&color=d70034&size=512', phone: '+41 71 657 22 29', email: 'info@rbimmobilien.ch' } },
  ],

  // Impressum
  impressumHeroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  impressumCompanyName: 'RB Immobilien Treuhand AG',
  impressumAddress: 'Marktplatz 3',
  impressumZip: '8570 Weinfelden',
  impressumCountry: 'Schweiz',
  impressumEmail: 'info@rbimmobilien.ch',
  impressumPerson: 'Mara Schönholzer',
  impressumUID: 'CHE-109.896.591',
  impressumUIDLink: 'https://www.uid.admin.ch/Detail.aspx?uid_id=CHE-109.896.591',

  // Datenschutz
  datenschutzHeroImage: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  datenschutzIntro: 'Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
  datenschutzUsage: 'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.',
  datenschutzSecurity: 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
  datenschutzContact: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
  datenschutzRights: 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',

  // Footer
  footerDescription: 'Ihr vertrauensvoller Partner für Immobilienbewirtschaftung und Liegenschaftsverwaltung in den Kantonen Thurgau und St. Gallen.',
  footerPhone: '+41 71 626 01 01',
  footerFax: '+41 71 626 01 02',
  footerEmail: 'info@rbimmobilien.ch',
};

export async function getContent(): Promise<SiteContent> {
  try {
    const res = await fetch('/api/content');
    if (res.ok) {
      const data = await res.json();
      if (data) {
        return { ...defaultContent, ...data };
      }
    }
  } catch (e) {
    console.error('Failed to fetch content from API, falling back to local/default', e);
  }

  const stored = localStorage.getItem('cms_site_content');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return { ...defaultContent, ...parsed };
    } catch (e) {
      console.error('Failed to parse stored content, using defaults', e);
    }
  }
  return defaultContent;
}

export async function saveContent(content: SiteContent) {
  localStorage.setItem('cms_site_content', JSON.stringify(content));
  const token = localStorage.getItem('cms_admin_token');
  if (token) {
    try {
      await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(content)
      });
    } catch (e) {
      console.error('Failed to save content to API', e);
    }
  }
}
