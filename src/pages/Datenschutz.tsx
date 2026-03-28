import { motion } from 'motion/react';
import { useContent } from '../lib/contentContext';
import { EditableText, EditableImage } from '../components/Editable';

const sections = [
  {
    title: 'Datenschutzerklärung der RB Immobilien Treuhand AG',
    content: `Mit dieser Datenschutzerklärung informieren wir, die RB Immobilien Treuhand AG (RBI, wir oder uns), wie wir Personendaten erheben und sonst bearbeiten. Das ist keine abschliessende Beschreibung; allenfalls regeln andere Datenschutzerklärungen oder allgemeine Geschäftsbedingungen, Teilnahmebedingungen und ähnliche Dokumente spezifische Sachverhalte.\n\nUnter Personendaten werden alle Angaben verstanden, die sich auf eine bestimmte oder bestimmbare Person beziehen.\n\nWenn Sie uns Personendaten anderer Personen (z.B. Familienmitglieder, Daten von Arbeitskollegen) zur Verfügung stellen, stellen Sie bitte sicher, dass diese Personen die vorliegende Datenschutzerklärung kennen und teilen Sie uns deren Personendaten nur mit, wenn Sie dies dürfen und wenn diese Personendaten korrekt sind.\n\nDiese Datenschutzerklärung ist auf die EU-Datenschutz-Grundverordnung (DSGVO), das Schweizer Datenschutzgesetz (DSG) und das revidierte Schweizer Datenschutzgesetz (revDSG) ausgelegt. Ob und inwieweit diese Gesetze anwendbar sind, hängt jedoch vom Einzelfall ab.`,
  },
  {
    title: '1. Verantwortlicher / Datenschutzbeauftragter / Vertreter',
    content: `Verantwortlich für die Datenbearbeitungen, die wir hier beschreiben, ist die RB Immobilien Treuhand AG. Wenn Sie datenschutzrechtliche Anliegen haben, können Sie uns diese an folgende Kontaktadresse mitteilen:\n\ndatenschutz@rbimmobilien.ch\nRB Immobilien Treuhand AG\nMarktplatz 3\n8570 Weinfelden\nSchweiz`,
  },
  {
    title: '2. Erhebung und Bearbeitung von Personendaten',
    content: `Wir bearbeiten in erster Linie die Personendaten, die wir im Rahmen unserer Geschäftsbeziehung mit unseren Kunden und anderen Geschäftspartnern von diesen und weiteren daran beteiligten Personen erhalten oder die wir beim Betrieb unserer Websites, Apps und weiteren Anwendungen von deren Nutzern erheben.\n\nSoweit dies erlaubt ist, entnehmen wir auch öffentlich zugänglichen Quellen (z.B. Betreibungsregister, Grundbücher, Handelsregister, Presse, Internet) gewisse Daten oder erhalten solche von Behörden und sonstigen Dritten (wie z.B. Kreditauskunfteien, Adresshändler, Verbände, Geschäftspartner, Konzerngesellschaften der RBI-Gruppe).`,
  },
  {
    title: '3. Zwecke der Datenbearbeitung und Rechtsgrundlagen',
    content: `Wir verwenden die von uns erhobenen Personendaten in erster Linie, um unsere Verträge mit unseren Kunden und Geschäftspartnern abzuschliessen und abzuwickeln, so insbesondere im Rahmen der Immobilienbewirtschaftung und der Beschaffung von Produkten und Dienstleistungen von unseren Lieferanten und Subunternehmern, sowie um unseren gesetzlichen Pflichten im In- und Ausland nachzukommen.\n\nDarüber hinaus bearbeiten wir Personendaten von Ihnen und weiteren Personen, soweit erlaubt und es uns als angezeigt erscheint, auch für folgende Zwecke, an denen wir (und zuweilen auch Dritte) ein berechtigtes Interesse haben:\n\n• Weiterentwicklung und Verbesserung unserer Dienstleistungen und Webseite\n• Kommunikation mit Dritten und Bearbeitung derer Anfragen\n• Werbung und Marketing (einschliesslich Durchführung von Anlässen), soweit Sie der Nutzung Ihrer Daten nicht widersprochen haben\n• Geltendmachung rechtlicher Ansprüche und Verteidigung in Zusammenhang mit rechtlichen Streitigkeiten und behördlichen Verfahren\n• Verhinderung und Aufklärung von Straftaten und sonstigem Fehlverhalten\n• Betrieb, Gewährleistung der Sicherheit unserer IT\n• Massnahmen zur Geschäftssteuerung\n\nWenn Sie in eine bestimmte Bearbeitung Ihrer Personendaten eingewilligt haben, bearbeiten wir Ihre Personendaten im Rahmen und gestützt auf diese Einwilligung. Eine erteilte Einwilligung kann jederzeit widerrufen werden, was jedoch keine Auswirkung auf bereits erfolgte Datenbearbeitungen hat.`,
  },
  {
    title: '4. Cookies / Tracking und andere Technologien',
    content: `Wir setzen auf unseren Websites typischerweise «Cookies» und vergleichbare Techniken ein, mit denen Ihr Browser oder Ihr Gerät identifiziert werden kann. Ein Cookie ist eine kleine Datei, die an Ihren Computer gesendet bzw. vom verwendeten Webbrowser automatisch auf Ihrem Computer oder mobilen Gerät gespeichert wird, wenn Sie unsere Website besuchen.\n\nWir setzen Cookies ein, damit wir unsere Website nutzerfreundlich ausgestalten können, sowie für Zwecke der Analyse und der Werbung. Es können auch Cookies von Drittanbietern zum Einsatz kommen. Das Blockieren von Cookies kann dazu führen, dass gewisse Funktionalitäten nicht mehr zur Verfügung stehen.\n\nWir setzen auf unserer Website Google Analytics ein, einen Webanalysedienst der Google LLC. Die IP-Adressen der Besucher werden von Google in Europa vor einer Weiterleitung in die USA gekürzt.`,
  },
  {
    title: '5. Datenweitergabe und Datenübermittlung ins Ausland',
    content: `Wir geben im Rahmen unserer geschäftlichen Aktivitäten und der Zwecke gemäss Ziffer 3, soweit erlaubt und es uns als angezeigt erscheint, auch Dritten bekannt, sei es, weil sie diese für uns bearbeiten, sei es, weil sie sie für ihre eigenen Zwecke verwenden wollen. Dabei handelt es sich insbesondere um:\n\n• Dienstleister von uns (innerhalb der Schweiz und im Ausland), einschliesslich Auftragsbearbeitern\n• Händler, Lieferanten, Subunternehmer und sonstige Geschäftspartner\n• Kunden\n• In- und ausländische Behörden, Amtsstellen oder Gerichte\n• Medien\n• Öffentlichkeit, einschliesslich Besucher von Websites und sozialen Medien\n• Konzerngesellschaften der RBI-Gruppe\n\nDiese Empfänger sind teilweise im Inland, können aber irgendwo auf der Welt sein. Sie müssen insbesondere mit der Übermittlung Ihrer Daten in alle Länder rechnen, in denen Konzerngesellschaften der RBI-Gruppe vertreten sind, sowie in andere europäische Länder und die USA.`,
  },
  {
    title: '6. Dauer der Aufbewahrung von Personendaten',
    content: `Wir verarbeiten und speichern Ihre Personendaten, solange es für die Erfüllung unserer vertraglichen und gesetzlichen Pflichten oder sonst die mit der Bearbeitung verfolgten Zwecke erforderlich ist, d.h. also zum Beispiel für die Dauer der gesamten Geschäftsbeziehung (von der Anbahnung, Abwicklung bis hin zur Beendigung eines Vertrags) sowie darüber hinaus gemäss den gesetzlichen Aufbewahrungs- und Dokumentationspflichten.\n\nDabei ist es möglich, dass Personendaten für die Zeit aufbewahrt werden, in der Ansprüche gegen unser Unternehmen geltend gemacht werden können und soweit wir anderweitig gesetzlich dazu verpflichtet sind oder berechtigte Geschäftsinteressen dies erfordern.\n\nSobald Ihre Personendaten für die oben genannten Zwecke nicht mehr erforderlich sind, werden sie grundsätzlich und soweit möglich gelöscht oder anonymisiert.`,
  },
  {
    title: '7. Datensicherheit',
    content: `Wir treffen angemessene technische und organisatorische Sicherheitsvorkehrungen zum Schutz Ihrer Personendaten vor unberechtigtem Zugriff und Missbrauch, wie etwa:\n\n• Erlassen von Weisungen und Schulungen\n• IT- und Netzwerksicherheitslösungen\n• Zugangs- und Zugriffsbeschränkungen\n• Verschlüsselung von Datenträgern und Übermittlungen\n• Pseudonymisierung\n• Kontrollen`,
  },
  {
    title: '8. Pflicht zur Bereitstellung von Personendaten',
    content: `Im Rahmen unserer Geschäftsbeziehung müssen Sie diejenigen Personendaten bereitstellen, die für die Aufnahme und Durchführung einer Geschäftsbeziehung und die Erfüllung der damit verbundenen vertraglichen Pflichten erforderlich sind. Ohne diese Daten werden wir in der Regel nicht in der Lage sein, einen Vertrag mit Ihnen abzuschliessen oder diesen durchzuführen.\n\nAuch die Website kann grundsätzlich nicht genutzt werden, wenn gewisse Angaben zur Sicherstellung des Datenverkehrs (wie z.B. IP-Adresse) nicht offengelegt werden.`,
  },
  {
    title: '9. Profiling und automatisierte Entscheidfindung',
    content: `Wir verarbeiten Ihre Personendaten teilweise automatisiert mit dem Ziel, bestimmte persönliche Aspekte zu bewerten (Profiling). Wir setzen Profiling insbesondere ein, um Sie zielgerichtet über Produkte informieren und beraten zu können. Dabei setzen wir Auswertungsinstrumente ein, die uns eine bedarfsgerechte Kommunikation und Werbung einschliesslich Markt- und Meinungsforschung ermöglichen.`,
  },
  {
    title: '10. Rechte der betroffenen Person',
    content: `Sie haben im Rahmen des auf Sie anwendbaren Datenschutzrechts und soweit darin vorgesehen (wie etwa im Falle der DSGVO) das Recht auf:\n\n• Auskunft über Ihre gespeicherten Personendaten\n• Berichtigung unrichtiger Daten\n• Löschung Ihrer Daten\n• Einschränkung der Datenbearbeitung\n• Widerspruch gegen die Bearbeitung (insbesondere Direktwerbung und Profiling)\n• Datenportabilität\n\nBitte beachten Sie aber, dass wir uns vorbehalten, unsererseits die gesetzlich vorgesehenen Einschränkungen geltend zu machen, etwa wenn wir zur Aufbewahrung oder Bearbeitung gewisser Daten verpflichtet sind, daran ein überwiegendes Interesse haben oder sie für die Geltendmachung von Ansprüchen benötigen.\n\nBeachten Sie, dass die Ausübung dieser Rechte im Konflikt zu vertraglichen Abmachungen stehen kann und dies Folgen wie z.B. die vorzeitige Vertragsauflösung oder Kostenfolgen haben kann.\n\nJede betroffene Person hat das Recht, ihre Ansprüche gerichtlich durchzusetzen oder bei der zuständigen Datenschutzbehörde eine Beschwerde einzureichen. Die zuständige Datenschutzbehörde der Schweiz ist der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (http://www.edoeb.admin.ch).`,
  },
  {
    title: '11. Änderungen',
    content: `Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung. Soweit die Datenschutzerklärung Teil einer Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer Aktualisierung über die Änderung per E-Mail oder auf andere geeignete Weise informieren.`,
  },
];

export default function Datenschutz() {
  const { content, handleSave } = useContent();
  if (!content) return null;

  // Use saved sections from DB, fallback to hardcoded defaults
  const activeSections = content.datenschutzSections && content.datenschutzSections.length > 0
    ? content.datenschutzSections
    : sections;

  const updateSection = (index: number, field: 'title' | 'content', value: string) => {
    const current = [...activeSections];
    current[index] = { ...current[index], [field]: value };
    handleSave('datenschutzSections', current);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-24">
        <div className="absolute inset-0 w-full h-full">
          <EditableImage
            src={content.datenschutzHeroImage}
            onSave={(url) => handleSave('datenschutzHeroImage', url)}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            alt="Datenschutz"
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
              value={content.datenschutzPageTitle}
              onSave={(v) => handleSave('datenschutzPageTitle', v)}
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
            {activeSections.map((section, index) => (
              <div key={index} className={index < activeSections.length - 1 ? 'mb-10' : ''}>
                <EditableText
                  value={section.title}
                  onSave={(v) => updateSection(index, 'title', v)}
                  as="h2"
                  className="text-xl md:text-2xl font-display font-bold text-brand-dark pb-4 border-b border-gray-200 mb-6"
                />
                <EditableText
                  value={section.content}
                  onSave={(v) => updateSection(index, 'content', v)}
                  as="div"
                  multiline
                  className="text-brand-gray leading-relaxed text-[15px]"
                />
              </div>
            ))}

            {/* Source */}
            <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-brand-gray/60">
              <EditableText
                value={content.datenschutzSourceText}
                onSave={(v) => handleSave('datenschutzSourceText', v)}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
