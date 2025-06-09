
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection & Information Handling',
  description: 'Miklos Towing privacy policy for Tulsa, Oklahoma. Learn how we collect, use, and protect your personal information and data.',
  keywords: 'privacy policy, data protection, personal information, Tulsa towing privacy, customer data, information security',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Miklos Towing',
    description: 'Miklos Towing privacy policy for data protection and information handling.',
    url: 'https://miklostowing.com/privacy-policy',
  },
}

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              How Miklos Towing collects, uses, and protects your personal information
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <h3>1.1 Personal Information</h3>
            <p>When you use our services, we may collect:</p>
            <ul>
              <li>Name and contact information (phone number, email address)</li>
              <li>Location information for service delivery</li>
              <li>Vehicle information (make, model, year, license plate)</li>
              <li>Payment information</li>
              <li>Insurance information (when applicable)</li>
            </ul>

            <h3>1.2 Automatically Collected Information</h3>
            <p>We may automatically collect:</p>
            <ul>
              <li>Website usage data and analytics</li>
              <li>IP addresses and browser information</li>
              <li>Device information and operating system</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide towing and roadside assistance services</li>
              <li>Process payments and maintain billing records</li>
              <li>Communicate about services and appointments</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Maintain business records and documentation</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <h3>3.1 Third-Party Service Providers</h3>
            <p>We may share information with:</p>
            <ul>
              <li>Payment processing companies</li>
              <li>Insurance companies (when authorized)</li>
              <li>Law enforcement (when required by law)</li>
              <li>Legal and professional advisors</li>
            </ul>

            <h3>3.2 Legal Requirements</h3>
            <p>
              We may disclose information when required by law, court order, or government regulation, 
              or to protect our rights, property, or safety.
            </p>

            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your information:</p>
            <ul>
              <li>Secure storage of physical and electronic records</li>
              <li>Limited access to personal information</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to provide services and comply 
              with legal requirements. Business records are maintained according to applicable laws 
              and regulations.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of information (subject to legal requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>File complaints about our data practices</li>
            </ul>

            <h2>7. Cookies and Tracking</h2>
            <p>
              Our website uses cookies to improve functionality and user experience. You can control 
              cookie settings through your browser preferences. Some features may not function properly 
              if cookies are disabled.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices of external sites. Please review their privacy policies before providing 
              personal information.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal 
              information from children under 13 years of age.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on our website 
              with the updated effective date. Continued use of our services constitutes acceptance of 
              any changes.
            </p>

            <h2>11. Contact Information</h2>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100 not-prose">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Questions or Concerns?</h3>
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

            <h2>12. Compliance</h2>
            <p>
              This privacy policy is designed to comply with applicable privacy laws and regulations. 
              We are committed to protecting your privacy and handling your information responsibly.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              <strong>Last Updated:</strong> January 2024<br />
              This policy is subject to change. Please review periodically for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
