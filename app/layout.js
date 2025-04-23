import './globals.css'

export const metadata = {
  title: 'Daplie – Ihre Lösung für Linkbuilding, Software und KI',
  description: 'Daplie ist Ihre zentrale Anlaufstelle für innovative Lösungen in den Bereichen Linkbuilding, Softwareentwicklung und Künstliche Intelligenz.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className="font-sans bg-gray-100">{children}</body>
    </html>
  )
} 