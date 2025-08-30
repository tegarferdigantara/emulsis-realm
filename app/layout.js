import './globals.css'

export const metadata = {
  title: 'Emulsis Reborn - Rohan Online',
  description: 'Enter the world of Rohan Online, the ultimate MMORPG experience with epic battles, guild wars, and legendary adventures.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Orbitron:wght@400;500;700;900&family=Exo+2:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}