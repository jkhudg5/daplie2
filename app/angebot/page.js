'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Angebot() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    services: {
      linkbuilding: false,
      software: false,
      ki: false
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          services: {
            linkbuilding: false,
            software: false,
            ki: false
          }
        });
      } else {
        alert('Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Unsere Dienstleistungen</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Entdecken Sie unser umfassendes Angebot an digitalen Lösungen, die Ihr Unternehmen voranbringen.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Linkbuilding Service */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-link text-blue-600 text-4xl mr-4"></i>
                <h2 className="text-2xl font-semibold">Linkbuilding</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Professionelle SEO-Strategien und hochwertige Backlinks für eine verbesserte Sichtbarkeit Ihrer Website in Suchmaschinen.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Analyse der bestehenden Linkstruktur</li>
                <li>Maßgeschneiderte Linkbuilding-Strategien</li>
                <li>Qualitätsbacklinks von autoritativen Websites</li>
                <li>Regelmäßige Berichte und Analysen</li>
              </ul>
            </div>

            {/* Software Service */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-code text-blue-600 text-4xl mr-4"></i>
                <h2 className="text-2xl font-semibold">Softwareentwicklung</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Individuelle Softwarelösungen, die Ihre Geschäftsprozesse optimieren und Innovationen vorantreiben.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Webanwendungen und mobile Apps</li>
                <li>CRM-Systeme und Automatisierungstools</li>
                <li>Integration in bestehende Systeme</li>
                <li>Fortlaufende Wartung und Support</li>
              </ul>
            </div>

            {/* KI Service */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-brain text-blue-600 text-4xl mr-4"></i>
                <h2 className="text-2xl font-semibold">Künstliche Intelligenz</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Intelligente, datengesteuerte Lösungen für optimierte Geschäftsprozesse und bessere Entscheidungsfindung.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Maschinelles Lernen und NLP</li>
                <li>Prädiktive Analytik</li>
                <li>Maßgeschneiderte KI-Modelle</li>
                <li>Ethische KI-Implementierung</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Kontaktieren Sie uns</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">Unternehmen</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Interessierte Dienstleistungen</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="linkbuilding"
                      checked={formData.services.linkbuilding}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Linkbuilding
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      checked={formData.services.software}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Softwareentwicklung
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="ki"
                      checked={formData.services.ki}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Künstliche Intelligenz
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Anfrage senden
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 