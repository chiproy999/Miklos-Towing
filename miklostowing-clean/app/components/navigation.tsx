
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Facebook, Instagram, Youtube, Mail } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-red-600">
            Miklos Towing
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#services" className="text-gray-700 hover:text-red-600 transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600 transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </Link>
            <Link href="/impound-policy" className="text-gray-700 hover:text-red-600 transition-colors">
              Impound Policy
            </Link>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:dispatch@miklostow.com" 
                className="text-gray-600 hover:text-red-600 transition-colors flex items-center gap-1"
                aria-label="Email Miklos Towing"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">dispatch@miklostow.com</span>
              </a>
              
              <a 
                href="tel:9188300773" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (918) 830-0773
              </a>
            </div>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/#services" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Services
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Blog
              </Link>
              <Link href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Contact
              </Link>
              <Link href="/impound-policy" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Impound Policy
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="px-3 py-2 border-t border-gray-200">
                <a 
                  href="mailto:dispatch@miklostow.com" 
                  className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  📧 dispatch@miklostow.com
                </a>
                <a 
                  href="tel:9188300773" 
                  className="block py-2 bg-red-600 text-white rounded-lg text-center mt-2"
                >
                  📞 Call (918) 830-0773
                </a>
              </div>
              
              {/* Mobile Social Media Links */}
              <div className="flex justify-center space-x-6 py-3 border-t border-gray-200">
                <a 
                  href="https://www.facebook.com/MiklosTowingofTulsa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  aria-label="Follow Miklos Towing on Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/miklostowing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  aria-label="Follow Miklos Towing on Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.youtube.com/@MIKLOSTOWINGINTULSA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  aria-label="Subscribe to Miklos Towing on YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.tiktok.com/@tulsatowing?is_from_webapp=1&sender_device=pc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  aria-label="Follow Miklos Towing on TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.349-2.019-1.349-3.243C16.392.563 16.955 0 17.586 0h2.078c.631 0 1.194.563 1.194 1.095 0 1.224-.5 2.394-1.349 3.243a6.228 6.228 0 01-1.137.966c-.15.1-.295.19-.443.258zm-7.735 9.562a3.47 3.47 0 01-3.47-3.47 3.47 3.47 0 013.47-3.47 3.47 3.47 0 013.47 3.47 3.47 3.47 0 01-3.47 3.47zm0-5.47a2 2 0 100 4 2 2 0 000-4z"/>
                    <path d="M9.586 15.124a3.47 3.47 0 003.47-3.47V0h1.47v11.654a5 5 0 01-5 5V15.124z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
