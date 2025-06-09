
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Clock, MapPin, Star, Truck, Anchor, Home as HomeIcon, Facebook, Instagram, Youtube, Mail, Shield, Award, Users, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://miklostowing.com/#business",
            "name": "Miklos Towing",
            "alternateName": "Miklos Towing of Tulsa",
            "description": "Professional 24/7 emergency towing and roadside assistance in Tulsa, Oklahoma and surrounding areas. Licensed and insured.",
            "url": "https://miklostowing.com",
            "telephone": "+19188300773",
            "email": "dispatch@miklostow.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tulsa",
              "addressRegion": "OK",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.0766,
              "longitude": -95.9928
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Tulsa",
                "addressRegion": "OK"
              },
              {
                "@type": "City", 
                "name": "Broken Arrow",
                "addressRegion": "OK"
              },
              {
                "@type": "City",
                "name": "Owasso", 
                "addressRegion": "OK"
              },
              {
                "@type": "City",
                "name": "Bixby",
                "addressRegion": "OK"
              },
              {
                "@type": "City",
                "name": "Jenks",
                "addressRegion": "OK"
              }
            ],
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Cash App", "Zelle"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Towing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Towing",
                    "description": "24/7 emergency towing services for all vehicle types"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "RV Towing",
                    "description": "Specialized RV and motorhome towing services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Water Recovery",
                    "description": "Vehicle recovery from water bodies and marine towing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Roadside Assistance", 
                    "description": "Jump starts, tire changes, lockout service"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/MiklosTowingofTulsa",
              "https://www.instagram.com/miklostowing",
              "https://www.youtube.com/@MIKLOSTOWINGINTULSA",
              "https://www.tiktok.com/@tulsatowing"
            ],
            "logo": "https://thumbs.dreamstime.com/b/illustration-graphic-vector-towing-truck-service-logo-design-suitable-automotive-company-illustration-vector-graphic-274916750.jpg",
            "image": "https://i.pinimg.com/originals/05/c9/6e/05c96e8813363db8dbaf1688f94cb10f.jpg"
          })
        }}
      />

      {/* Hero Section with New Tulsa Skyline */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Desktop Hero Image */}
          <Image
            src="/images/tulsa_hero_2560.webp"
            alt="Tulsa skyline at sunset - Miklos Towing serves all of Tulsa, Oklahoma with 24/7 emergency towing services"
            fill
            className="object-cover hidden md:block"
            priority
            sizes="100vw"
          />
          {/* Mobile Hero Image */}
          <Image
            src="/images/tulsa_hero_1280.webp"
            alt="Tulsa skyline at sunset - Miklos Towing serves all of Tulsa, Oklahoma with 24/7 emergency towing services"
            fill
            className="object-cover md:hidden"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Miklos Towing
          </h1>
          <p className="text-lg md:text-2xl mb-4 drop-shadow-md">
            Tulsa's Most Trusted 24/7 Emergency Towing Service
          </p>
          <p className="text-base md:text-xl mb-8 drop-shadow-md text-gray-200">
            Licensed • Insured • Military Discounts • Serving Tulsa & Surrounding Areas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:9188300773" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call (918) 830-0773
            </a>
            <a 
              href="mailto:dispatch@miklostow.com" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg text-xl font-semibold flex items-center gap-2 transition-all duration-300 border border-white/30"
            >
              <Mail className="w-6 h-6" />
              Email Us
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span>Available 24/7/365</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Military Discounts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-red-600 text-white p-4 rounded-full mb-3">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600">Emergency Service</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-600 text-white p-4 rounded-full mb-3">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Licensed</h3>
              <p className="text-gray-600">& Insured</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-600 text-white p-4 rounded-full mb-3">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Tulsa</h3>
              <p className="text-gray-600">Metro Area</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-600 text-white p-4 rounded-full mb-3">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Military</h3>
              <p className="text-gray-600">Discounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with Enhanced SEO */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Towing Services in Tulsa, Oklahoma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency roadside assistance to specialized vehicle recovery, Miklos Towing provides comprehensive towing solutions throughout the Tulsa metropolitan area. Licensed, insured, and available 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
              <Truck className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Emergency Towing</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency towing services for cars, trucks, motorcycles, and commercial vehicles. Fast response times throughout Tulsa and surrounding areas.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Accident recovery</li>
                <li>• Breakdown assistance</li>
                <li>• Flat tire service</li>
                <li>• Jump start service</li>
              </ul>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
              <HomeIcon className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">RV & Large Vehicle Towing</h3>
              <p className="text-gray-600 mb-4">
                Specialized equipment and expertise for RVs, motorhomes, buses, and oversized vehicles. Safe, secure transport with experienced operators.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Class A, B, C motorhomes</li>
                <li>• Travel trailers</li>
                <li>• Commercial vehicles</li>
                <li>• Heavy-duty trucks</li>
              </ul>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
              <Anchor className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Water Recovery Services</h3>
              <p className="text-gray-600 mb-4">
                Specialized water recovery operations for vehicles in lakes, rivers, and ponds. Professional marine towing and underwater recovery services.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Lake recovery</li>
                <li>• River extraction</li>
                <li>• Boat towing</li>
                <li>• Marine assistance</li>
              </ul>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-red-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Service Areas in Oklahoma</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Primary Service Area</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Tulsa</li>
                  <li>Broken Arrow</li>
                  <li>Owasso</li>
                  <li>Bixby</li>
                  <li>Jenks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Extended Coverage</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Sand Springs</li>
                  <li>Sapulpa</li>
                  <li>Glenpool</li>
                  <li>Catoosa</li>
                  <li>Collinsville</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Emergency Coverage</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Skiatook</li>
                  <li>Claremore</li>
                  <li>Pryor</li>
                  <li>Muskogee</li>
                  <li>Okmulgee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for AI Search Optimization */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our towing services in Tulsa</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How quickly can you respond to emergency calls in Tulsa?</h3>
              <p className="text-gray-600">Our average response time is 15-30 minutes within Tulsa city limits. We have strategically positioned trucks throughout the metro area to ensure rapid response to emergency calls 24/7.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept cash, Cash App, and Zelle for your convenience. Payment is typically due upon completion of service, and we provide detailed receipts for insurance claims.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Do you offer military or first responder discounts?</h3>
              <p className="text-gray-600">Yes! We proudly offer discounts to active military, veterans, police officers, firefighters, and EMT personnel. Please mention your service when calling for details.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Can you tow my RV or motorhome?</h3>
              <p className="text-gray-600">Absolutely! We specialize in RV and motorhome towing with proper equipment and experienced operators. We can handle Class A, B, and C motorhomes as well as travel trailers.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Are you licensed and insured in Oklahoma?</h3>
              <p className="text-gray-600">Yes, Miklos Towing is fully licensed and insured to operate in Oklahoma. We comply with all state regulations and maintain comprehensive insurance coverage for your protection.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What should I do while waiting for the tow truck?</h3>
              <p className="text-gray-600">Stay safe by moving to a secure location away from traffic if possible. Turn on hazard lights, and if you have them, place reflective triangles behind your vehicle. We'll call you when we're close to your location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Fleet Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Fleet & Services</h2>
            <p className="text-xl text-gray-600">Modern, well-maintained equipment operated by experienced professionals</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* RV Towing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/images/Miklos_Tow_RV_Tulsa.webp"
                  alt="Miklos Towing professional black truck safely towing large RV in Tulsa - specialized RV and motorhome towing services with experienced operators"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">RV & Motorhome Towing</h3>
                <p className="text-gray-600">Our specialized equipment safely handles RVs, motorhomes, and large recreational vehicles with care and precision. Experienced operators ensure your investment is protected.</p>
              </div>
            </div>

            {/* Water Recovery */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/images/Underwater_Towing.webp"
                  alt="Miklos Towing black RAM truck positioned by water for marine and underwater vehicle recovery services in Tulsa area lakes and rivers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Water Recovery Services</h3>
                <p className="text-gray-600">Specialized water recovery operations for vehicles in lakes, rivers, and other water bodies around Tulsa. Professional marine towing and underwater recovery expertise.</p>
              </div>
            </div>

            {/* General Towing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/images/Miklos_Tow_Truck.webp"
                  alt="Miklos Towing professional black RAM truck in urban Tulsa setting - fast reliable emergency towing services available 24/7"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Emergency Towing</h3>
                <p className="text-gray-600">Fast, reliable emergency towing services throughout Tulsa and surrounding areas, available 24/7. Professional equipment and experienced operators you can trust.</p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Why Choose Miklos Towing?</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span>Licensed & Insured in Oklahoma</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span>24/7 Emergency Service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span>Serving All of Tulsa Metro Area</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span>Modern Professional Equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span>Military & First Responder Discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span>Cash, Cash App, Zelle Accepted</span>
                </li>
              </ul>
              <div className="space-y-3">
                <a 
                  href="tel:9188300773" 
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (918) 830-0773
                </a>
                <a 
                  href="mailto:dispatch@miklostow.com" 
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors inline-flex items-center gap-2 w-full justify-center border border-white/30"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email: dispatch@miklostow.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Towing Tips & Industry Insights</h2>
            <p className="text-xl text-gray-600">Stay informed with expert advice from Tulsa's towing professionals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Link href="/blog/winter-towing-safety-tips" className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Winter Towing Safety Tips for Oklahoma Drivers</h3>
                <p className="text-gray-600 mb-4">Essential safety tips for winter driving in Oklahoma and what to do if you need emergency towing during severe weather conditions.</p>
                <div className="flex items-center text-red-600 font-medium">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link href="/blog/rv-towing-guide" className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Complete Guide to RV Towing Services</h3>
                <p className="text-gray-600 mb-4">Everything you need to know about professional RV towing, from preparation to choosing the right service provider in Tulsa.</p>
                <div className="flex items-center text-red-600 font-medium">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link href="/blog/roadside-assistance-vs-towing" className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Roadside Assistance vs. Towing: When to Call</h3>
                <p className="text-gray-600 mb-4">Learn the difference between roadside assistance and towing services, and when each service is most appropriate for your situation.</p>
                <div className="flex items-center text-red-600 font-medium">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center">
            <Link 
              href="/blog" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Need Emergency Towing in Tulsa?</h2>
          <p className="text-xl mb-8">Don't wait - contact Miklos Towing now for fast, professional service throughout the Tulsa metro area</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Call or Email Us</h3>
              <a 
                href="tel:9188300773" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-semibold flex items-center gap-2 transition-all duration-300 justify-center"
              >
                <Phone className="w-6 h-6" />
                (918) 830-0773
              </a>
              <a 
                href="mailto:dispatch@miklostow.com" 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg text-xl font-semibold flex items-center gap-2 transition-all duration-300 border border-white/30 justify-center"
              >
                <Mail className="w-6 h-6" />
                dispatch@miklostow.com
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Service Information</h3>
              <div className="space-y-3 text-lg">
                <div className="flex items-center gap-2 justify-center">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span>Serving Tulsa, OK & Metro Area</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Clock className="w-5 h-5 text-red-400" />
                  <span>24 Hours a Day, 7 Days a Week</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Shield className="w-5 h-5 text-red-400" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Award className="w-5 h-5 text-red-400" />
                  <span>Military & First Responder Discounts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-semibold mb-4">Follow Us on Social Media</h3>
            <p className="text-gray-300 mb-6">Stay connected for updates, tips, and behind-the-scenes content</p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.facebook.com/MiklosTowingofTulsa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300 group"
                aria-label="Follow Miklos Towing on Facebook"
              >
                <Facebook className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
              
              <a 
                href="https://www.instagram.com/miklostowing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300 group"
                aria-label="Follow Miklos Towing on Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
              
              <a 
                href="https://www.youtube.com/@MIKLOSTOWINGINTULSA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300 group"
                aria-label="Subscribe to Miklos Towing on YouTube"
              >
                <Youtube className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
              
              <a 
                href="https://www.tiktok.com/@tulsatowing?is_from_webapp=1&sender_device=pc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300 group"
                aria-label="Follow Miklos Towing on TikTok"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.349-2.019-1.349-3.243C16.392.563 16.955 0 17.586 0h2.078c.631 0 1.194.563 1.194 1.095 0 1.224-.5 2.394-1.349 3.243a6.228 6.228 0 01-1.137.966c-.15.1-.295.19-.443.258zm-7.735 9.562a3.47 3.47 0 01-3.47-3.47 3.47 3.47 0 013.47-3.47 3.47 3.47 0 013.47 3.47 3.47 3.47 0 01-3.47 3.47zm0-5.47a2 2 0 100 4 2 2 0 000-4z"/>
                  <path d="M9.586 15.124a3.47 3.47 0 003.47-3.47V0h1.47v11.654a5 5 0 01-5 5V15.124z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">Miklos Towing</h3>
              <p className="text-gray-300 mb-4">
                Tulsa's most trusted 24/7 emergency towing and roadside assistance service. 
                Licensed, insured, and ready to help when you need us most.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://www.facebook.com/MiklosTowingofTulsa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/miklostowing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@MIKLOSTOWINGINTULSA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@tulsatowing?is_from_webapp=1&sender_device=pc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.349-2.019-1.349-3.243C16.392.563 16.955 0 17.586 0h2.078c.631 0 1.194.563 1.194 1.095 0 1.224-.5 2.394-1.349 3.243a6.228 6.228 0 01-1.137.966c-.15.1-.295.19-.443.258zm-7.735 9.562a3.47 3.47 0 01-3.47-3.47 3.47 3.47 0 013.47-3.47 3.47 3.47 0 013.47 3.47 3.47 3.47 0 01-3.47 3.47zm0-5.47a2 2 0 100 4 2 2 0 000-4z"/>
                    <path d="M9.586 15.124a3.47 3.47 0 003.47-3.47V0h1.47v11.654a5 5 0 01-5 5V15.124z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  <a href="tel:9188300773" className="hover:text-white transition-colors">
                    (918) 830-0773
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4 text-red-500" />
                  <a href="mailto:dispatch@miklostow.com" className="hover:text-white transition-colors">
                    dispatch@miklostow.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Serving Tulsa, OK & Metro Area</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <div className="space-y-2 text-gray-300">
                <Link href="/#services" className="block hover:text-white transition-colors">
                  Emergency Towing
                </Link>
                <Link href="/#services" className="block hover:text-white transition-colors">
                  RV Towing
                </Link>
                <Link href="/#services" className="block hover:text-white transition-colors">
                  Water Recovery
                </Link>
                <Link href="/#services" className="block hover:text-white transition-colors">
                  Roadside Assistance
                </Link>
                <Link href="/blog" className="block hover:text-white transition-colors">
                  Towing Tips & Guides
                </Link>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Legal & Policies</h3>
              <div className="space-y-2 text-gray-300">
                <Link href="/impound-policy" className="block hover:text-white transition-colors">
                  Impound Policy
                </Link>
                <Link href="/terms-and-conditions" className="block hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/privacy-policy" className="block hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/cookie-policy" className="block hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Miklos Towing. All rights reserved. Licensed and insured towing service in Tulsa, Oklahoma.</p>
            <p className="mt-2 text-sm">Serving Tulsa, Broken Arrow, Owasso, Bixby, Jenks, and surrounding areas since 2010.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
