
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impound Policy - Vehicle Storage & Release Procedures',
  description: 'Miklos Towing impound policy for Tulsa, Oklahoma. Learn about vehicle storage procedures, release requirements, fees, and your rights under Oklahoma law.',
  keywords: 'impound policy, vehicle storage, towing fees, Oklahoma impound law, vehicle release, Tulsa towing, impound lot',
  alternates: {
    canonical: '/impound-policy',
  },
  openGraph: {
    title: 'Impound Policy | Miklos Towing',
    description: 'Miklos Towing impound policy for Tulsa, Oklahoma. Vehicle storage procedures, release requirements, and fees.',
    url: 'https://miklostowing.com/impound-policy',
  },
}

export default function ImpoundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Impound Policy",
            "description": "Miklos Towing impound policy for vehicle storage and release procedures in Tulsa, Oklahoma",
            "url": "https://miklostowing.com/impound-policy",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Miklos Towing",
              "url": "https://miklostowing.com"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Miklos Towing",
              "telephone": "+19188300773",
              "email": "dispatch@miklostow.com"
            }
          })
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Impound Policy</h1>
            <p className="text-xl text-gray-600">
              Vehicle storage and release procedures for Miklos Towing in Tulsa, Oklahoma
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>Vehicle Impound Procedures</h2>
            <p>
              Miklos Towing operates in accordance with Oklahoma state law and local ordinances regarding vehicle impoundment. 
              Vehicles may be impounded for various reasons including but not limited to:
            </p>
            <ul>
              <li>Abandoned vehicles on public or private property</li>
              <li>Vehicles involved in accidents requiring removal</li>
              <li>Illegally parked vehicles on private property</li>
              <li>Vehicles impounded by law enforcement</li>
              <li>Vehicles creating safety hazards</li>
            </ul>

            <h2>Storage Facility Information</h2>
            <p>
              All impounded vehicles are stored at our secure facility in the Tulsa area. The facility is:
            </p>
            <ul>
              <li>Fully fenced and secured</li>
              <li>Monitored by security cameras</li>
              <li>Accessible during business hours</li>
              <li>Compliant with Oklahoma storage regulations</li>
            </ul>

            <h2>Vehicle Release Requirements</h2>
            <p>To retrieve your impounded vehicle, you must provide:</p>
            <ul>
              <li>Valid government-issued photo identification</li>
              <li>Proof of vehicle ownership (title, registration, or lease agreement)</li>
              <li>Payment of all applicable fees</li>
              <li>Any required documentation from law enforcement (if applicable)</li>
            </ul>

            <h3>Authorized Persons</h3>
            <p>Vehicles may only be released to:</p>
            <ul>
              <li>The registered owner of the vehicle</li>
              <li>A person with written authorization from the owner</li>
              <li>A legal representative with proper documentation</li>
              <li>Insurance company representatives with proper authorization</li>
            </ul>

            <h2>Fees and Charges</h2>
            <p>
              Impound fees are established in accordance with Oklahoma law and local regulations. 
              Fees may include but are not limited to:
            </p>
            <ul>
              <li>Initial towing and impound fee</li>
              <li>Daily storage fees</li>
              <li>Administrative processing fees</li>
              <li>After-hours release fees (if applicable)</li>
            </ul>

            <h3>Payment Methods</h3>
            <p>We accept the following payment methods:</p>
            <ul>
              <li>Cash</li>
              <li>Cash App</li>
              <li>Zelle</li>
            </ul>

            <h2>Business Hours</h2>
            <p>
              Vehicle releases are available during normal business hours. Emergency releases may be 
              available after hours for an additional fee. Contact us for current hours and availability.
            </p>

            <h2>Abandoned Vehicle Procedures</h2>
            <p>
              Vehicles that remain unclaimed for the period specified by Oklahoma law may be considered 
              abandoned and subject to disposal procedures as outlined in Oklahoma Statutes Title 47.
            </p>

            <h2>Liability and Disclaimers</h2>
            <p>
              Miklos Towing takes reasonable care in handling and storing impounded vehicles. However, 
              we are not responsible for:
            </p>
            <ul>
              <li>Pre-existing damage to vehicles</li>
              <li>Personal property left in vehicles</li>
              <li>Damage due to weather or natural causes</li>
              <li>Theft of personal property from vehicles</li>
            </ul>

            <h2>Dispute Resolution</h2>
            <p>
              If you believe your vehicle was improperly towed or have concerns about fees, please contact 
              us immediately. We are committed to resolving disputes fairly and in accordance with applicable law.
            </p>

            <h2>Contact Information</h2>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100 not-prose">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Need to Retrieve Your Vehicle?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <div>
                    <span className="font-medium">Phone:</span>
                    <a href="tel:9188300773" className="text-red-600 hover:text-red-700 ml-2">
                      (918) 830-0773
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <div>
                    <span className="font-medium">Email:</span>
                    <a href="mailto:dispatch@miklostow.com" className="text-red-600 hover:text-red-700 ml-2">
                      dispatch@miklostow.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <div>
                    <span className="font-medium">Service Area:</span>
                    <span className="ml-2">Tulsa, OK & Surrounding Areas</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-600" />
                  <div>
                    <span className="font-medium">Emergency Service:</span>
                    <span className="ml-2">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Legal Compliance</h2>
            <p>
              This impound policy is designed to comply with Oklahoma state law, including but not limited to 
              Oklahoma Statutes Title 47 (Motor Vehicles) and local ordinances. For specific legal questions, 
              please consult with an attorney.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              <strong>Last Updated:</strong> January 2024<br />
              This policy is subject to change in accordance with applicable law and regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
