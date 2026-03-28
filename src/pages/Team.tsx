import { motion } from 'motion/react';
import { Mail, Phone, Smartphone } from 'lucide-react';
import { useContent } from '../lib/contentContext';
import { EditableText, EditableImage } from '../components/Editable';
import { useAuth } from '../lib/auth';
import type { TeamMember } from '../lib/content';

export default function Team() {
  const { content, handleSave } = useContent();
  const { isAdmin } = useAuth();
  if (!content) return null;

  const updateMember = (id: string, field: keyof TeamMember, value: any) => {
    const updated = content.teamMembers.map((m) =>
      m.id === id ? { ...m, [field]: value } : m
    );
    handleSave('teamMembers', updated);
  };

  const updateMemberQualification = (id: string, index: number, value: string) => {
    const updated = content.teamMembers.map((m) => {
      if (m.id !== id) return m;
      const newQuals = [...m.qualifications];
      newQuals[index] = value;
      return { ...m, qualifications: newQuals };
    });
    handleSave('teamMembers', updated);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-24">
        <div className="absolute inset-0 w-full h-full">
          <EditableImage
            src={content.teamHeroImage}
            onSave={(url) => handleSave('teamHeroImage', url)}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            alt="Team Hero"
          />
        </div>
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <EditableText
              value={content.teamTitle}
              onSave={(v) => handleSave('teamTitle', v)}
              as="h1"
              className="font-display text-5xl md:text-6xl font-bold text-white"
            />
            <EditableText
              value={content.teamSubtitle}
              onSave={(v) => handleSave('teamSubtitle', v)}
              as="p"
              className="mt-4 text-xl text-white/80"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-brand-light -mt-8 rounded-t-[2.5rem] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {content.teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full"
              >
                {/* Member Image */}
                <div className="relative overflow-hidden">
                  <EditableImage
                    src={member.image}
                    onSave={(url) => updateMember(member.id, 'image', url)}
                    className="aspect-[3/4] w-full"
                    imgClassName="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    alt={member.name}
                  />
                </div>

                {/* Member Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <EditableText
                    value={member.name}
                    onSave={(v) => updateMember(member.id, 'name', v)}
                    as="h3"
                    className="font-display text-xl font-bold text-brand-dark"
                  />
                  <EditableText
                    value={member.role}
                    onSave={(v) => updateMember(member.id, 'role', v)}
                    as="p"
                    className="text-brand-red font-medium mt-1"
                  />

                  {(() => {
                    // In admin mode: always show 2 qualification slots
                    // In public mode: only show filled qualifications
                    const maxSlots = 2;
                    const quals = isAdmin
                      ? [...member.qualifications, ...Array(Math.max(0, maxSlots - member.qualifications.length)).fill('')]
                      : member.qualifications.filter(q => q.trim() !== '');
                    return quals.length > 0 ? (
                      <ul className="mt-3 space-y-1 min-h-[3rem]">
                        {quals.map((qual, qi) => (
                          <li key={qi} className="text-sm text-brand-gray">
                            <EditableText
                              value={qual}
                              onSave={(v) => {
                                const newQuals = [...member.qualifications];
                                while (newQuals.length <= qi) newQuals.push('');
                                newQuals[qi] = v;
                                updateMember(member.id, 'qualifications', newQuals.filter((q, i) => q.trim() !== '' || i < qi));
                              }}
                              as="span"
                            />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="min-h-[3rem]" />
                    );
                  })()}

                  {/* Contact */}
                  <div className="mt-auto pt-5 border-t border-gray-100 space-y-2">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-3 text-sm text-brand-red hover:text-brand-red/80 transition-colors"
                    >
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <EditableText
                        value={member.phone}
                        onSave={(v) => updateMember(member.id, 'phone', v)}
                        className="text-brand-red"
                      />
                    </a>
                    {(member.mobile || isAdmin) && (
                      <a
                        href={`tel:${member.mobile || ''}`}
                        className="flex items-center gap-3 text-sm text-brand-red hover:text-brand-red/80 transition-colors"
                      >
                        <Smartphone className="w-4 h-4 flex-shrink-0" />
                        <EditableText
                          value={member.mobile || ''}
                          onSave={(v) => updateMember(member.id, 'mobile', v)}
                          className="text-brand-red"
                        />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 text-sm text-brand-red hover:text-brand-red/80 transition-colors"
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <EditableText
                        value={member.email}
                        onSave={(v) => updateMember(member.id, 'email', v)}
                        className="text-brand-red"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
