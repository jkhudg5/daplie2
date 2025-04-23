import Link from 'next/link'

export default function Linkbuilding() {
  return (
    <main>
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Linkbuilding mit Daplie</h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Stärken Sie Ihre Online-Präsenz mit strategischem Linkbuilding von Daplie. Unsere Experten helfen Ihnen, hochwertige Backlinks aufzubauen, die Ihre Domain-Autorität steigern und Ihre Rankings verbessern.
        </p>
        <Link href="/angebot" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transform hover:scale-105 transition duration-300 shadow-lg">
          Jetzt Angebot anfordern <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </header>

      {/* Content Sections */}
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Strategy Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Unsere Strategie</h2>
            <p className="text-gray-600 leading-relaxed">
              Bei Daplie entwickeln wir maßgeschneiderte Linkbuilding-Strategien, die auf Ihre spezifischen Bedürfnisse und Ziele zugeschnitten sind. Wir analysieren Ihre aktuelle Linkstruktur, identifizieren Chancen und setzen gezielte Maßnahmen um, die langfristige Ergebnisse liefern.
            </p>
          </div>

          {/* Services Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Unsere Dienstleistungen</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Hochwertige Backlink-Aufbau</li>
              <li>Content-Marketing und Gastbeiträge</li>
              <li>Link-Audit und toxische Link-Bereinigung</li>
              <li>Strategische Partnerschaften</li>
              <li>Regelmäßige Berichterstattung und Analysen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit, Ihre Online-Sichtbarkeit zu steigern?</h2>
          <Link href="/angebot" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 shadow-lg">
            Kostenlose Beratung anfordern
          </Link>
        </div>
      </section>
    </main>
  )
} 