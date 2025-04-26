import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Daplie GmbH. Alle Rechte vorbehalten.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/impressum" className="text-white hover:text-blue-100 transition duration-200">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-white hover:text-blue-100 transition duration-200">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 