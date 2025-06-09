
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://miklostowing.com'),
  title: {
    default: 'Miklos Towing - 24/7 Emergency Towing Services in Tulsa, OK | Fast & Reliable',
    template: '%s | Miklos Towing'
  },
  description: 'Professional 24/7 emergency towing and roadside assistance in Tulsa, Oklahoma and surrounding areas. Fast, reliable service with military discounts. Licensed and insured. Call (918) 830-0773 or email dispatch@miklostow.com.',
  keywords: 'towing service, emergency towing, roadside assistance, Tulsa Oklahoma, vehicle recovery, 24/7 towing, impound service, abandoned vehicle removal, military discount, first responder discount, Oklahoma Title 47, RV towing, water recovery, Broken Arrow, Owasso, Bixby, Jenks',
  authors: [{ name: 'Miklos Towing', url: 'https://miklostowing.com' }],
  creator: 'Miklos Towing',
  publisher: 'Miklos Towing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://miklostowing.com',
    siteName: 'Miklos Towing',
    title: 'Miklos Towing - 24/7 Emergency Towing Services in Tulsa, OK',
    description: 'Professional 24/7 emergency towing and roadside assistance in Tulsa, Oklahoma and surrounding areas. Licensed and insured.',
    images: [
      {
        url: '/images/tulsa_hero_2560.webp',
        width: 2560,
        height: 1440,
        alt: 'Tulsa skyline at sunset - Miklos Towing serves all of Tulsa, Oklahoma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miklos Towing - 24/7 Emergency Towing Services in Tulsa, OK',
    description: 'Professional 24/7 emergency towing and roadside assistance in Tulsa, Oklahoma and surrounding areas.',
    images: ['/images/tulsa_hero_2560.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'US-OK',
    'geo.placename': 'Tulsa',
    'geo.position': '36.0766;-95.9928',
    'ICBM': '36.0766, -95.9928',
    'business.contact_data.street_address': 'Tulsa, OK',
    'business.contact_data.locality': 'Tulsa',
    'business.contact_data.region': 'OK',
    'business.contact_data.postal_code': '74101',
    'business.contact_data.country_name': 'United States',
    'business.contact_data.phone_number': '+19188300773',
    'business.contact_data.email': 'dispatch@miklostow.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#DC2626" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for social media domains */}
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="dns-prefetch" href="//www.tiktok.com" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Miklos Towing",
              "url": "https://miklostowing.com",
              "logo": "https://thumbs.dreamstime.com/b/illustration-vector-graphic-towing-truck-service-logo-design-suitable-automotive-company-recovery-342575010.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-918-830-0773",
                "contactType": "emergency",
                "availableLanguage": "English",
                "areaServed": "US-OK"
              },
              "sameAs": [
                "https://www.facebook.com/MiklosTowingofTulsa",
                "https://www.instagram.com/miklostowing",
                "https://www.youtube.com/@MIKLOSTOWINGINTULSA",
                "https://www.tiktok.com/@tulsatowing"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
