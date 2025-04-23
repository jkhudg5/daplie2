import Link from 'next/link';

export default function KI() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Künstliche Intelligenz mit Daplie – Intelligente Lösungen für Ihr Unternehmen
          </h1>
          <p className="text-xl mb-8">
            Willkommen bei Daplie, Ihrem Partner für innovative Anwendungen der Künstlichen Intelligenz (KI). In einer Zeit, in der Daten und Automatisierung die Geschäftswelt prägen, bietet KI das Potenzial, Prozesse zu revolutionieren, Entscheidungen zu optimieren und neue Geschäftsmöglichkeiten zu erschließen.
          </p>
          <Link 
            href="/angebot" 
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Angebot entdecken
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Why AI Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Warum Künstliche Intelligenz?</h2>
          <p className="text-lg mb-8">
            Künstliche Intelligenz ist mehr als ein technologischer Trend – sie ist ein strategischer Vorteil, der Unternehmen jeder Größe und Branche transformative Möglichkeiten bietet.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Prozesse automatisieren</h3>
              <p>Routineaufgaben wie Datenanalyse oder Kundensupport werden effizienter, wodurch Ihre Mitarbeitenden sich auf strategische Aufgaben konzentrieren können.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Datenbasierte Entscheidungen treffen</h3>
              <p>KI analysiert große Datenmengen in Echtzeit, um präzise Vorhersagen und fundierte Entscheidungen zu ermöglichen.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Kundenerlebnisse personalisieren</h3>
              <p>Von individualisierten Marketingkampagnen bis hin zu maßgeschneiderten Produktempfehlungen – KI steigert die Kundenzufriedenheit.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovationen vorantreiben</h3>
              <p>KI eröffnet neue Geschäftsmodelle, wie intelligente Produkte oder datengetriebene Dienstleistungen, die Sie von der Konkurrenz abheben.</p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Unser Ansatz: KI-Entwicklung mit Fokus auf Ethik und Effizienz</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1. Strategische Beratung und Bedarfsanalyse</h3>
              <p className="text-lg">
                Der erste Schritt ist das Verständnis Ihrer Geschäftsziele und Herausforderungen. In einer umfassenden Analyse prüfen wir Ihre Datenquellen, bestehenden Systeme und spezifischen Anforderungen.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">2. Modellkonzeption und Datenaufbereitung</h3>
              <p className="text-lg">
                KI lebt von Daten. Wir bereiten Ihre Daten sorgfältig auf, indem wir sie bereinigen, strukturieren und für den Einsatz in KI-Modellen optimieren.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">3. Entwicklung und Training</h3>
              <p className="text-lg">
                Unsere Experten setzen modernste Frameworks wie TensorFlow, PyTorch oder Scikit-learn ein, um KI-Modelle zu entwickeln und zu trainieren.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">4. Integration und Deployment</h3>
              <p className="text-lg">
                Eine erfolgreiche KI-Lösung muss nahtlos in Ihre bestehende Infrastruktur integriert werden. Ob On-Premise, in der Cloud oder als Hybrid-Lösung – wir sorgen für eine reibungslose Implementierung.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">5. Schulung und Support</h3>
              <p className="text-lg">
                KI endet nicht mit der Implementierung. Wir bieten umfassende Schulungen, damit Ihr Team die neuen Systeme effektiv nutzen kann.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Unsere KI-Dienstleistungen im Überblick</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Maschinelles Lernen</h3>
              <p>Wir entwickeln Modelle, die Muster in Daten erkennen, um Vorhersagen zu treffen oder Prozesse zu optimieren, z. B. in der Logistik oder im Finanzwesen.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Natürliche Sprachverarbeitung (NLP)</h3>
              <p>Von Chatbots bis hin zu automatisierten Textanalysen – wir ermöglichen intelligente Interaktionen mit Ihren Kunden.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Prädiktive Analysen</h3>
              <p>Unsere KI-Lösungen prognostizieren Trends, wie Kundenverhalten oder Marktbewegungen, um Ihnen einen strategischen Vorteil zu verschaffen.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Computer Vision</h3>
              <p>Wir nutzen Bilderkennung für Anwendungen wie Qualitätskontrolle, Sicherheitsüberwachung oder medizinische Diagnostik.</p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Erfolgsgeschichten: KI, die Wirkung zeigt</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Prädiktive Analyseplattform</h3>
              <p>Für ein Einzelhandelsunternehmen entwickelten wir eine prädiktive Analyseplattform, die das Kundenverhalten analysierte und personalisierte Marketingkampagnen ermöglichte. Das Ergebnis war eine Umsatzsteigerung um 18 % innerhalb von sechs Monaten.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">KI-gestützter Chatbot</h3>
              <p>In einem anderen Projekt implementierten wir einen KI-gestützten Chatbot für ein Dienstleistungsunternehmen, der die Bearbeitungszeit von Kundenanfragen um 40 % reduzierte und die Kundenzufriedenheit deutlich erhöhte.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-50 p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihre KI-Lösung?</h2>
          <p className="text-lg mb-8">
            Künstliche Intelligenz ist der Schlüssel, um Ihr Unternehmen zukunftssicher zu machen – und Daplie ist Ihr Partner, um dieses Potenzial zu nutzen. Ob Sie Prozesse automatisieren, datenbasierte Entscheidungen treffen oder innovative Produkte entwickeln möchten: Wir bieten Ihnen die passende Lösung.
          </p>
          <Link 
            href="/angebot" 
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Jetzt Angebot anfordern
          </Link>
        </section>
      </main>
    </div>
  );
} 