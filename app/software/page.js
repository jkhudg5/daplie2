import Link from 'next/link';

export default function Software() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Softwareentwicklung mit Daplie – Maßgeschneiderte Lösungen für Ihr Unternehmen
          </h1>
          <p className="text-xl mb-8">
            Willkommen bei Daplie, Ihrem zuverlässigen Partner für innovative und maßgeschneiderte Softwareentwicklung. In einer zunehmend digitalisierten Welt ist hochwertige Software essenziell, um Ihr Unternehmen effizienter, wettbewerbsfähiger und zukunftssicher zu gestalten.
          </p>
          <Link 
            href="/angebot" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Angebot entdecken
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Why Custom Software Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Warum maßgeschneiderte Softwareentwicklung?</h2>
          <p className="text-lg mb-8">
            Standardsoftware mag für allgemeine Zwecke ausreichen, doch sie erreicht oft ihre Grenzen, wenn es um spezifische Anforderungen geht. Maßgeschneiderte Software bietet Ihnen die Möglichkeit, Prozesse zu optimieren, Kosten zu senken und Ihren Kunden ein einzigartiges Erlebnis zu bieten.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Prozessautomatisierung</h3>
              <p>Zeitaufwendige manuelle Aufgaben werden eliminiert. Unsere Softwarelösungen automatisieren Arbeitsabläufe, sodass sich Ihr Team auf strategische Aufgaben konzentrieren kann.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Skalierbarkeit</h3>
              <p>Ihr Unternehmen entwickelt sich weiter, und Ihre Software sollte dies ebenfalls tun. Wir entwickeln Lösungen, die flexibel an wachsende Anforderungen angepasst werden können.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Wettbewerbsvorteile</h3>
              <p>Eine maßgeschneiderte Software hebt Sie von Ihren Mitbewerbern ab, indem sie präzise die Funktionen bietet, die Ihre Kunden oder Ihr Team benötigen.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Nahtlose Integration</h3>
              <p>Unsere Software lässt sich problemlos in Ihre bestehende IT-Infrastruktur integrieren, sei es durch APIs, Datenbanken oder Drittanbieter-Tools.</p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Unser Ansatz: Softwareentwicklung mit Fokus auf Qualität und Zusammenarbeit</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1. Bedarfsanalyse und Beratung</h3>
              <p className="text-lg">
                Der Prozess beginnt mit einer umfassenden Analyse Ihrer Anforderungen. In persönlichen Gesprächen erfassen wir Ihre Ziele, Herausforderungen und spezifischen Bedürfnisse. Wir prüfen Ihre bestehenden Systeme, identifizieren Optimierungspotenziale und definieren gemeinsam die Anforderungen für Ihre Software.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">2. Konzeption und Planung</h3>
              <p className="text-lg">
                Auf Basis der Analyse erstellen wir ein detailliertes Konzept, das die Architektur, Technologien und den Zeitplan Ihres Projekts umfasst. Mithilfe von Wireframes und Prototypen vermitteln wir Ihnen frühzeitig einen Eindruck von der Lösung.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">3. Entwicklung mit modernsten Technologien</h3>
              <p className="text-lg">
                Unsere Entwicklerinnen und Entwickler sind Experten in zahlreichen Programmiersprachen und Frameworks, darunter Python, JavaScript, React, Node.js und weitere. Wir wählen die Technologien, die optimal zu Ihrem Projekt passen.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">4. Testing und Qualitätssicherung</h3>
              <p className="text-lg">
                Qualität steht bei uns an erster Stelle. Vor der Freigabe durchläuft Ihre Software umfassende Tests, darunter Funktionalitätstests, Performance-Tests und Sicherheitsprüfungen.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">5. Deployment und fortlaufender Support</h3>
              <p className="text-lg">
                Nach der Entwicklung kümmern wir uns um die reibungslose Implementierung Ihrer Software in Ihre IT-Umgebung. Auch nach dem Launch bieten wir Ihnen umfassenden Support.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Unsere Dienstleistungen im Überblick</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Webentwicklung</h3>
              <p>Wir erstellen benutzerfreundliche, responsive Web-Anwendungen, die auf allen Geräten überzeugen – von E-Commerce-Plattformen bis hin zu internen Dashboards.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
              <p>Wir entwickeln native und plattformübergreifende Apps für iOS und Android, die durch intuitive Bedienbarkeit und ansprechendes Design überzeugen.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Backend-Entwicklung</h3>
              <p>Unsere Backend-Lösungen bieten eine sichere, skalierbare Basis für Ihre Software, mit Integration von Datenbanken, APIs und Cloud-Diensten.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Künstliche Intelligenz und Machine Learning</h3>
              <p>Wir integrieren KI-Technologien, wie Chatbots oder prädiktive Analysen, um Ihre Software intelligenter und effizienter zu machen.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihre Softwarelösung?</h2>
          <p className="text-lg mb-8">
            Die richtige Software kann Ihr Unternehmen transformieren – und Daplie ist Ihr Partner, um diesen Wandel zu realisieren. Ob Sie ein Startup mit einer innovativen App-Idee oder ein etabliertes Unternehmen mit komplexen Digitalisierungsprojekten sind: Wir bieten Ihnen die passende Lösung.
          </p>
          <Link 
            href="/angebot" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Jetzt Angebot anfordern
          </Link>
        </section>
      </main>
    </div>
  );
} 