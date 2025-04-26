import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-blue-600 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <Image
                src="/images/daplie-logo.svg"
                alt="Daplie Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white text-2xl font-bold">Daplie</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-blue-100 transition duration-200">
              Home
            </Link>
            <Link href="/angebot" className="text-white hover:text-blue-100 transition duration-200">
              Angebot
            </Link>
            <Link href="/software" className="text-white hover:text-blue-100 transition duration-200">
              Software
            </Link>
            <Link href="/ki" className="text-white hover:text-blue-100 transition duration-200">
              KI
            </Link>
            <Link href="/ueber-uns" className="text-white hover:text-blue-100 transition duration-200">
              Über uns
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 