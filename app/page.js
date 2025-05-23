import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Willkommen bei Daplie</h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Daplie ist Ihre zentrale Anlaufstelle für innovative Lösungen in den Bereichen Linkbuilding, Softwareentwicklung und Künstliche Intelligenz. Unsere Mission ist es, Unternehmen dabei zu unterstützen, ihre digitale Präsenz zu stärken, effiziente Softwarelösungen zu entwickeln und die Möglichkeiten der KI voll auszuschöpfen. Mit einem Team aus Experten und einer Leidenschaft für Technologie bieten wir Ihnen maßgeschneiderte Strategien, die Ihre Ziele in der digitalen Welt verwirklichen. Entdecken Sie, wie Daplie Ihre Projekte auf das nächste Level bringt!
        </p>
        <Link href="/angebot" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transform hover:scale-105 transition duration-300 shadow-lg">
          Unser Angebot entdecken <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </header>

      {/* Themenabschnitte */}
      <section className="container mx-auto py-16" id="learn-more">
        <div className="space-y-16">
          {/* Linkbuilding */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <i className="fas fa-link text-blue-600 text-4xl mr-4"></i>
              <h2 className="text-3xl font-semibold">Linkbuilding mit Daplie</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Linkbuilding ist ein zentraler Bestandteil jeder erfolgreichen SEO-Strategie, und bei Daplie verstehen wir, wie wichtig hochwertige Backlinks für die Sichtbarkeit Ihrer Website sind. Unser Ansatz kombiniert bewährte Techniken mit innovativen Methoden, um Ihre Website in den Suchmaschinen nach vorne zu bringen. Wir analysieren zunächst Ihre bestehende Linkstruktur, identifizieren Schwachstellen und entwickeln eine maßgeschneiderte Strategie, die auf Ihre Branche und Zielgruppe zugeschnitten ist.
              <br /><br />
              Unser Team arbeitet mit einem Netzwerk aus vertrauenswürdigen Partnern, um qualitativ hochwertige Links von autoritativen Websites zu sichern. Dabei legen wir besonderen Wert auf Relevanz und Nachhaltigkeit, um langfristige Ergebnisse zu gewährleisten. Von Gastbeiträgen über Content-Marketing bis hin zu strategischen Partnerschaften – Daplie bietet ein umfassendes Spektrum an Linkbuilding-Dienstleistungen, die Ihre Domain-Autorität stärken und organischen Traffic steigern.
              <br /><br />
              Ein weiterer Schwerpunkt liegt auf der Vermeidung riskanter Praktiken, wie sie häufig bei minderwertigen Linkbuilding-Angeboten zu finden sind. Wir halten uns strikt an die Richtlinien von Suchmaschinen wie Google, um sicherzustellen, dass Ihre Website vor Abstrafungen geschützt ist. Darüber hinaus bieten wir detaillierte Analysen und Berichte, die Ihnen zeigen, wie sich unsere Bemühungen auf Ihre Rankings auswirken. Mit Daplie erhalten Sie nicht nur Links, sondern eine strategische Partnerschaft, die Ihr Unternehmen wachsen lässt.
              <br /><br />
              Ob Sie ein kleines Unternehmen sind, das seine lokale Präsenz stärken möchte, oder ein internationaler Konzern, der globale Märkte erobern will – Daplie passt seine Strategien an Ihre Bedürfnisse an. Unsere Experten bleiben stets auf dem neuesten Stand der SEO-Trends, um Ihnen einen Wettbewerbsvorteil zu verschaffen. Lassen Sie uns gemeinsam Ihre Website zur Autorität in Ihrer Branche machen!
            </p>
            <Link href="/linkbuilding" className="text-blue-600 hover:underline mt-4 inline-block">Mehr über Linkbuilding</Link>
          </div>

          {/* Software */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <i className="fas fa-code text-blue-600 text-4xl mr-4"></i>
              <h2 className="text-3xl font-semibold">Softwarelösungen von Daplie</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Software ist das Rückgrat moderner Unternehmen, und bei Daplie entwickeln wir Lösungen, die Ihre Geschäftsprozesse optimieren und Innovationen vorantreiben. Von maßgeschneiderten Anwendungen bis hin zu skalierbaren Plattformen – unser Team aus erfahrenen Entwicklern nutzt die neuesten Technologien, um Software zu erstellen, die Ihren Anforderungen entspricht. Unser Entwicklungsprozess beginnt mit einer gründlichen Analyse Ihrer Bedürfnisse, gefolgt von einer agilen Umsetzung, die Flexibilität und Qualität gewährleistet.
              <br /><br />
              Wir bieten ein breites Spektrum an Softwarelösungen, darunter Webanwendungen, mobile Apps, CRM-Systeme und Automatisierungstools. Unsere Entwickler sind Experten in Programmiersprachen wie Python, JavaScript und Java sowie in Frameworks wie React, Django und Node.js. Dabei legen wir großen Wert auf Benutzerfreundlichkeit, Sicherheit und Skalierbarkeit, damit Ihre Software nicht nur heute, sondern auch in Zukunft performt.
              <br /><br />
              Ein besonderes Augenmerk liegt auf der Integration von Software in bestehende Systeme. Wir verstehen, dass viele Unternehmen mit einem Flickenteppich aus Legacy-Systemen arbeiten, und entwickeln Lösungen, die nahtlos in Ihre Infrastruktur passen. Unsere Software ist darauf ausgelegt, Prozesse zu automatisieren, Daten effizient zu verwalten und die Zusammenarbeit im Team zu verbessern. So sparen Sie Zeit, reduzieren Kosten und steigern die Produktivität.
              <br /><br />
              Darüber hinaus bieten wir fortlaufende Wartung und Support, um sicherzustellen, dass Ihre Software stets auf dem neuesten Stand bleibt. Ob es um die Behebung von Bugs, die Implementierung neuer Funktionen oder die Anpassung an sich ändernde Geschäftsanforderungen geht – Daplie ist Ihr zuverlässiger Partner. Mit unserer Software können Sie sich auf Ihr Kerngeschäft konzentrieren, während wir die Technologie für Sie arbeiten lassen.
            </p>
            <Link href="/software" className="text-blue-600 hover:underline mt-4 inline-block">Mehr über Software</Link>
          </div>

          {/* KI */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <i className="fas fa-brain text-blue-600 text-4xl mr-4"></i>
              <h2 className="text-3xl font-semibold">Künstliche Intelligenz mit Daplie</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Künstliche Intelligenz (KI) revolutioniert die Art und Weise, wie Unternehmen arbeiten, und bei Daplie nutzen wir diese Technologie, um intelligente, datengesteuerte Lösungen zu entwickeln. Von maschinellem Lernen über natürliche Sprachverarbeitung bis hin zu prädiktiver Analytik – unsere KI-Lösungen helfen Ihnen, fundierte Entscheidungen zu treffen, Prozesse zu automatisieren und Kundeninteraktionen zu personalisieren.
              <br /><br />
              Unser Ansatz beginnt mit einer tiefgehenden Analyse Ihrer Daten und Geschäftsziele. Wir entwickeln maßgeschneiderte KI-Modelle, die auf Ihre spezifischen Anforderungen zugeschnitten sind, sei es für die Optimierung von Lieferketten, die Verbesserung des Kundenservices oder die Vorhersage von Markttrends. Unsere Experten sind versiert in Frameworks wie TensorFlow, PyTorch und Scikit-learn und setzen modernste Algorithmen ein, um maximale Ergebnisse zu erzielen.
              <br /><br />
              Ein Schwerpunkt unserer Arbeit liegt auf der ethischen Nutzung von KI. Wir stellen sicher, dass unsere Modelle transparent, fair und sicher sind, um das Vertrauen Ihrer Kunden und Stakeholder zu gewinnen. Darüber hinaus bieten wir Schulungen und Beratung an, damit Ihr Team die Möglichkeiten der KI voll ausschöpfen kann. Ob Sie KI für die Analyse großer Datenmengen, die Automatisierung repetitiver Aufgaben oder die Entwicklung innovativer Produkte nutzen möchten – Daplie ist Ihr Partner.
              <br /><br />
              Unsere KI-Lösungen sind skalierbar und flexibel, sodass sie mit Ihrem Unternehmen wachsen können. Von kleinen Pilotprojekten bis hin zu unternehmensweiten Implementierungen – wir begleiten Sie auf jedem Schritt Ihrer KI-Reise. Lassen Sie Daplie Ihnen helfen, die Macht der Künstlichen Intelligenz zu nutzen, um Ihre Wettbewerbsfähigkeit zu steigern und neue Möglichkeiten zu erschließen.
            </p>
            <Link href="/ki" className="text-blue-600 hover:underline mt-4 inline-block">Mehr über KI</Link>
          </div>
        </div>
      </section>

      {/* Mission und Werte */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <i className="fas fa-handshake text-blue-600 text-5xl"></i>
            </div>
            <h2 className="text-3xl font-bold mb-6">Unsere Mission und Werte</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Seit unserer Gründung im Jahr 2020 steht Daplie für Innovation, Qualität und nachhaltige Partnerschaften. Unsere Mission ist es, Unternehmen durch modernste Technologielösungen zu stärken und dabei stets ethische Grundsätze zu wahren. Wir glauben an die Kraft der Technologie, wenn sie verantwortungsvoll und zielgerichtet eingesetzt wird.
              </p>
              <p className="mb-6">
                Unsere Kernwerte prägen jeden Aspekt unserer Arbeit: Transparenz in der Kommunikation, Exzellenz in der Ausführung und ein unermüdliches Streben nach Innovation. Wir setzen auf nachhaltige Linkbuilding-Strategien, die langfristigen Erfolg garantieren, entwickeln sichere und skalierbare Softwarelösungen und implementieren KI-Systeme unter Berücksichtigung ethischer Richtlinien. Wir arbeiten mit <a href="https://www.tunesoft.de/backlinks-kaufen/" className="text-blue-600 hover:underline">vertrauenswürdigen Partnern</a> zusammen, um optimale Ergebnisse zu erzielen.
              </p>
              <p>
                Als Ihr Partner begleiten wir Sie auf dem Weg der digitalen Transformation – mit Expertise, Leidenschaft und dem Versprechen, stets das Beste für Ihr Unternehmen zu erreichen. Gemeinsam gestalten wir die digitale Zukunft.
              </p>
            </div>
            <Link 
              href="/ueber-uns" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg mt-8 hover:bg-blue-700 transform hover:scale-105 transition duration-300 shadow-lg"
            >
              Erfahren Sie mehr über uns <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 