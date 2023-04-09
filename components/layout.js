import Head from 'next/head'

import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zahnarztpraxis Horner',
  description: 'Herzlich Willkommen bei der Zahnarztpraxis Horner in Velburg! Wir bieten Ihnen moderne Zahnmedizin auf höchstem Niveau. Unser erfahrener Zahnarzt und das freundliche Team sorgen für eine entspannte und angenehme Atmosphäre. Vereinbaren Sie noch heute einen Termin für Ihre Zahngesundheit!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
