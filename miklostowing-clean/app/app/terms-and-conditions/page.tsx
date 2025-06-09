
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Service Agreement & Policies',
  description: 'Terms and conditions for Miklos Towing services in Tulsa, Oklahoma. Service agreements, liability, payment terms, and customer responsibilities.',
  keywords: 'terms and conditions, service agreement, towing contract, liability, Tulsa towing terms, customer agreement',
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | Miklos Towing',
    description: 'Terms and conditions for Miklos Towing services in Tulsa, Oklahoma.',
    url: 'https://miklostowing.com/terms-and-conditions',
  },
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-xl text-gray-600">
              Service agreement and policies for Miklos Towing services
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By requesting services from Miklos Towing, you agree to be bound by these Terms and Conditions. 
              These terms constitute a legal agreement between you and Miklos Towing.
            </p>

            <h2>2. Services Provided</h2>
            <p>Miklos Towing provides the following services:</p>
            <ul>
              <li>Emergency towing services</li>
              <li>Roadside assistance</li>
              <li>Vehicle recovery services</li>
              <li>RV and large vehicle towing</li>
              <li>Water recovery services</li>
              <li>Vehicle storage and impound services</li>
            </ul>

            <h2>3. Service Availability</h2>
            <p>
              We strive to provide 24/7 emergency services throughout the Tulsa metropolitan area. 
              However, service availability may be limited during severe weather conditions or other 
              circumstances beyond our control.
            </p>

            <h2>4. Pricing and Payment</h2>
            <h3>4.1 Service Fees</h3>
            <p>
              Service fees are based on the type of service required, distance, time of day, and other factors. 
              Estimates may be provided, but final charges may vary based on actual service requirements.
            </p>

            <h3>4.2 Payment Terms</h3>
            <ul>
              <li>Payment is due upon completion of services</li>
              <li>We accept cash, Cash App, and Zelle</li>
              <li>Additional fees may apply for after-hours services</li>
              <li>Storage fees accrue daily for impounded vehicles</li>
            </ul>

            <h2>5. Customer Responsibilities</h2>
            <p>Customers are responsible for:</p>
            <ul>
              <li>Providing accurate location and contact information</li>
              <li>Removing personal property from vehicles before towing</li>
              <li>Providing proper identification and proof of ownership</li>
              <li>Payment of all applicable fees</li>
              <li>Compliance with safety instructions from our operators</li>
            </ul>

            <h2>6. Liability and Insurance</h2>
            <h3>6.1 Our Liability</h3>
            <p>
              Miklos Towing maintains appropriate insurance coverage and takes reasonable care in providing services. 
              Our liability is limited to the actual damage caused by our negligence, up to the limits of our insurance coverage.
            </p>

            <h3>6.2 Customer Property</h3>
            <p>
              We are not responsible for personal property left in vehicles. Customers should remove all 
              personal items before towing services are performed.
            </p>

            <h3>6.3 Pre-existing Damage</h3>
            <p>
              We are not liable for pre-existing damage to vehicles or damage that occurs due to the 
              condition of the vehicle being towed.
            </p>

            <h2>7. Cancellation Policy</h2>
            <p>
              Services may be cancelled before our operator arrives on scene. Cancellation fees may apply 
              if our operator has already been dispatched or has arrived at the location.
            </p>

            <h2>8. Dispute Resolution</h2>
            <p>
              Any disputes arising from our services will be resolved through good faith negotiation. 
              If resolution cannot be reached, disputes will be subject to the laws of the State of Oklahoma.
            </p>

            <h2>9. Force Majeure</h2>
            <p>
              Miklos Towing is not liable for delays or inability to perform services due to circumstances 
              beyond our control, including but not limited to severe weather, natural disasters, or government actions.
            </p>

            <h2>10. Privacy and Data Protection</h2>
            <p>
              We respect your privacy and handle personal information in accordance with our Privacy Policy. 
              Information collected is used solely for providing services and maintaining business records.
            </p>

            <h2>11. Modifications to Terms</h2>
            <p>
              These terms may be updated from time to time. Continued use of our services constitutes 
              acceptance of any modifications to these terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of the State of Oklahoma. Any legal 
              proceedings will be conducted in the appropriate courts of Tulsa County, Oklahoma.
            </p>

            <h2>13. Contact Information</h2>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100 not-prose">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions About Our Terms?</h3>
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
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              <strong>Last Updated:</strong> January 2024<br />
              These terms are subject to change. Please review periodically for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
