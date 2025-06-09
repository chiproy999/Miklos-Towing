
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy - Website Cookies & Tracking Information',
  description: 'Miklos Towing cookie policy explaining how we use cookies and tracking technologies on our website for improved user experience.',
  keywords: 'cookie policy, website cookies, tracking, web analytics, user experience, Tulsa towing cookies',
  alternates: {
    canonical: '/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | Miklos Towing',
    description: 'Miklos Towing cookie policy explaining website cookies and tracking technologies.',
    url: 'https://miklostowing.com/cookie-policy',
  },
}

export default function CookiePolicy() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-600">
              How Miklos Towing uses cookies and tracking technologies on our website
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better browsing experience by remembering your preferences 
              and improving website functionality.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            <h3>2.1 Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly:</p>
            <ul>
              <li>Session management cookies</li>
              <li>Security cookies</li>
              <li>Load balancing cookies</li>
              <li>Accessibility cookies</li>
            </ul>

            <h3>2.2 Performance Cookies</h3>
            <p>These cookies help us understand how visitors use our website:</p>
            <ul>
              <li>Google Analytics cookies</li>
              <li>Page load time measurement</li>
              <li>Error tracking and reporting</li>
              <li>Website performance monitoring</li>
            </ul>

            <h3>2.3 Functional Cookies</h3>
            <p>These cookies enhance your browsing experience:</p>
            <ul>
              <li>Language preference cookies</li>
              <li>Location-based service cookies</li>
              <li>User interface preference cookies</li>
              <li>Form completion assistance</li>
            </ul>

            <h2>3. Third-Party Cookies</h2>
            <p>We may use third-party services that set their own cookies:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website traffic analysis</li>
              <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
              <li><strong>Maps Services:</strong> For location and directions</li>
              <li><strong>Communication Tools:</strong> For chat and contact features</li>
            </ul>

            <h2>4. How We Use Cookie Information</h2>
            <p>Cookie information helps us:</p>
            <ul>
              <li>Improve website performance and user experience</li>
              <li>Understand visitor behavior and preferences</li>
              <li>Provide personalized content and services</li>
              <li>Ensure website security and prevent fraud</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Troubleshoot technical issues</li>
            </ul>

            <h2>5. Managing Your Cookie Preferences</h2>
            <h3>5.1 Browser Settings</h3>
            <p>You can control cookies through your browser settings:</p>
            <ul>
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete existing cookies</li>
              <li>Receive notifications when cookies are set</li>
            </ul>

            <h3>5.2 Opt-Out Options</h3>
            <p>For specific services, you can opt out directly:</p>
            <ul>
              <li><strong>Google Analytics:</strong> Use Google's opt-out browser add-on</li>
              <li><strong>Social Media:</strong> Adjust privacy settings on respective platforms</li>
              <li><strong>Advertising:</strong> Use industry opt-out tools</li>
            </ul>

            <h2>6. Impact of Disabling Cookies</h2>
            <p>Disabling cookies may affect website functionality:</p>
            <ul>
              <li>Some features may not work properly</li>
              <li>User preferences may not be saved</li>
              <li>Website performance may be reduced</li>
              <li>Personalized content may not be available</li>
            </ul>

            <h2>7. Cookie Retention</h2>
            <h3>7.1 Session Cookies</h3>
            <p>
              Session cookies are temporary and are deleted when you close your browser.
            </p>

            <h3>7.2 Persistent Cookies</h3>
            <p>
              Persistent cookies remain on your device for a specified period or until manually deleted. 
              Retention periods vary based on the cookie's purpose.
            </p>

            <h2>8. Updates to Cookie Usage</h2>
            <p>
              We may update our cookie usage from time to time to improve services or comply with 
              regulations. Changes will be reflected in this policy with an updated effective date.
            </p>

            <h2>9. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Know what cookies are being used</li>
              <li>Control cookie settings</li>
              <li>Delete cookies from your device</li>
              <li>Opt out of non-essential cookies</li>
              <li>Request information about our cookie practices</li>
            </ul>

            <h2>10. Contact Information</h2>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100 not-prose">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions About Our Cookie Policy?</h3>
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

            <h2>11. Compliance</h2>
            <p>
              This cookie policy is designed to comply with applicable privacy and data protection laws. 
              We are committed to transparent and responsible use of cookies and tracking technologies.
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
