export default function UeberUns() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Über Daplie</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Lernen Sie das Team und die Geschichte hinter Daplie kennen – Ihr Partner für digitale Innovation und nachhaltige Technologielösungen.
          </p>
        </div>
      </section>

      {/* Geschichte und Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="flex items-center mb-6">
                <i className="fas fa-history text-blue-600 text-4xl mr-4"></i>
                <h2 className="text-3xl font-semibold">Unsere Geschichte</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Die Geschichte von Daplie begann 2020, als eine Gruppe von Technologie-Enthusiasten sich zusammenschloss, um Unternehmen bei ihrer digitalen Transformation zu unterstützen. Was als kleines Beratungsunternehmen begann, hat sich zu einem führenden Anbieter für digitale Lösungen entwickelt.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In den vergangenen Jahren haben wir kontinuierlich in Innovation investiert, unser Team erweitert und unsere Dienstleistungen verfeinert. Heute sind wir stolz darauf, Unternehmen jeder Größe dabei zu helfen, ihr volles digitales Potenzial zu entfalten.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="flex items-center mb-6">
                <i className="fas fa-lightbulb text-blue-600 text-4xl mr-4"></i>
                <h2 className="text-3xl font-semibold">Unsere Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Wir streben danach, der vertrauenswürdigste Partner für digitale Transformation zu sein. Unsere Vision ist es, Technologie nicht nur zugänglich, sondern auch nachhaltig und ethisch zu gestalten. Wir glauben an eine Zukunft, in der jedes Unternehmen das volle Potenzial der digitalen Welt ausschöpfen kann, ohne dabei Kompromisse bei Qualität oder Ethik eingehen zu müssen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Werte */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Unsere Kernwerte</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <i className="fas fa-handshake text-blue-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Partnerschaft</h3>
                <p className="text-gray-600">
                  Wir sehen uns als langfristigen Partner unserer Kunden und arbeiten gemeinsam an ihrem Erfolg.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <i className="fas fa-shield-alt text-blue-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrität</h3>
                <p className="text-gray-600">
                  Transparenz und ethisches Handeln sind die Grundpfeiler unserer Arbeit.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <i className="fas fa-chart-line text-blue-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Wir bleiben am Puls der Zeit und entwickeln zukunftsweisende Lösungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Unser Team</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 leading-relaxed text-center mb-8">
                Unser Team besteht aus erfahrenen Experten in den Bereichen Linkbuilding, Softwareentwicklung und Künstliche Intelligenz. Jedes Teammitglied bringt einzigartige Fähigkeiten und Perspektiven ein, die es uns ermöglichen, innovative und effektive Lösungen für unsere Kunden zu entwickeln.
              </p>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="fas fa-user text-gray-400 text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold">Tobias Schulz</h3>
                  <p className="text-gray-600">Geschäftsführer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Werden Sie Teil unserer Geschichte</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam an Ihrer digitalen Zukunft arbeiten. Kontaktieren Sie uns für ein unverbindliches Gespräch.
          </p>
          <a
            href="/angebot"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            Jetzt Kontakt aufnehmen <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </main>
  );
} 