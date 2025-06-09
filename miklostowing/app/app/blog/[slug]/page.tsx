
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Phone, Mail } from 'lucide-react'
import type { Metadata } from 'next'

interface BlogPost {
  slug: string
  title: string
  content: string
  excerpt: string
  publishDate: string
  readTime: string
  author: string
  category: string
}

const blogPosts: Record<string, BlogPost> = {
  'winter-towing-safety-tips': {
    slug: 'winter-towing-safety-tips',
    title: 'Winter Towing Safety Tips for Oklahoma Drivers',
    excerpt: 'Essential safety tips for winter driving in Oklahoma and what to do if you need emergency towing during severe weather conditions.',
    publishDate: '2024-01-15',
    readTime: '5 min read',
    author: 'Miklos Towing Team',
    category: 'Safety Tips',
    content: `
      <p>Winter weather in Oklahoma can be unpredictable and dangerous for drivers. From ice storms to snow, severe weather conditions can leave you stranded and in need of emergency towing services. Here's what you need to know to stay safe and prepared.</p>

      <h2>Before You Drive: Winter Preparation</h2>
      <p>Preparation is your first line of defense against winter weather emergencies:</p>
      <ul>
        <li><strong>Check your vehicle:</strong> Ensure your battery, tires, brakes, and heating system are in good condition</li>
        <li><strong>Emergency kit:</strong> Keep blankets, water, snacks, flashlight, and phone charger in your car</li>
        <li><strong>Fuel up:</strong> Keep your gas tank at least half full to prevent fuel line freeze-up</li>
        <li><strong>Plan your route:</strong> Check weather conditions and road reports before traveling</li>
      </ul>

      <h2>Driving in Winter Conditions</h2>
      <p>When you must drive in winter weather, follow these safety guidelines:</p>
      <ul>
        <li>Reduce speed and increase following distance</li>
        <li>Accelerate and brake slowly to avoid skidding</li>
        <li>Don't use cruise control on icy roads</li>
        <li>Keep your headlights on for better visibility</li>
        <li>If you start to skid, steer in the direction you want to go</li>
      </ul>

      <h2>When to Call for Emergency Towing</h2>
      <p>Don't hesitate to call Miklos Towing if you experience:</p>
      <ul>
        <li>Your vehicle is stuck in snow or ice</li>
        <li>Accident or collision due to weather conditions</li>
        <li>Vehicle breakdown in dangerous weather</li>
        <li>You're stranded and conditions are deteriorating</li>
      </ul>

      <h2>What to Do While Waiting for Help</h2>
      <p>If you're stranded and waiting for a tow truck:</p>
      <ul>
        <li>Stay with your vehicle unless you can see a safe shelter nearby</li>
        <li>Run the engine periodically for heat, but crack a window for ventilation</li>
        <li>Make yourself visible with hazard lights or bright clothing</li>
        <li>Conserve phone battery for emergency calls</li>
        <li>Stay calm and patient - help is on the way</li>
      </ul>

      <h2>Why Choose Professional Winter Towing</h2>
      <p>Miklos Towing has the experience and equipment to safely handle winter emergencies:</p>
      <ul>
        <li>24/7 availability during severe weather</li>
        <li>Specialized equipment for ice and snow conditions</li>
        <li>Experienced operators familiar with Oklahoma weather</li>
        <li>Fast response times even in challenging conditions</li>
      </ul>

      <p>Remember, no trip is so important that it's worth risking your safety. When in doubt, stay home. But if you do find yourself in need of emergency towing during winter weather, Miklos Towing is here to help 24/7.</p>
    `
  },
  'rv-towing-guide': {
    slug: 'rv-towing-guide',
    title: 'Complete Guide to RV Towing Services',
    excerpt: 'Everything you need to know about professional RV towing, from preparation to choosing the right service provider in Tulsa.',
    publishDate: '2024-01-10',
    readTime: '8 min read',
    author: 'Miklos Towing Team',
    category: 'RV Services',
    content: `
      <p>RV towing requires specialized knowledge, equipment, and experience. Whether you're dealing with a breakdown, accident, or need to transport your RV, understanding the process can help ensure your valuable investment is handled safely and professionally.</p>

      <h2>Types of RVs and Towing Requirements</h2>
      <p>Different RV types require different towing approaches:</p>
      
      <h3>Class A Motorhomes</h3>
      <ul>
        <li>Largest and heaviest RVs (30-45 feet long)</li>
        <li>Require heavy-duty tow trucks and specialized equipment</li>
        <li>May need permits for transport on certain roads</li>
        <li>Often require professional drivers with commercial licenses</li>
      </ul>

      <h3>Class B Motorhomes (Van Conversions)</h3>
      <ul>
        <li>Smaller and more manageable (17-24 feet)</li>
        <li>Can often be towed with standard heavy-duty equipment</li>
        <li>Easier to maneuver in tight spaces</li>
      </ul>

      <h3>Class C Motorhomes</h3>
      <ul>
        <li>Medium-sized RVs (20-35 feet)</li>
        <li>Built on truck chassis with cab-over design</li>
        <li>Require medium to heavy-duty towing equipment</li>
      </ul>

      <h3>Travel Trailers and Fifth Wheels</h3>
      <ul>
        <li>Towable RVs that require special handling when disabled</li>
        <li>May need to be separated from tow vehicle</li>
        <li>Require proper weight distribution during transport</li>
      </ul>

      <h2>Common RV Towing Scenarios</h2>
      
      <h3>Mechanical Breakdowns</h3>
      <p>Engine problems, transmission issues, or other mechanical failures can leave your RV stranded. Professional towing ensures your RV reaches a qualified repair facility safely.</p>

      <h3>Accident Recovery</h3>
      <p>RV accidents require specialized recovery techniques due to size, weight, and potential for extensive damage. Professional operators know how to minimize further damage during recovery.</p>

      <h3>Flat Tires</h3>
      <p>RV tires are expensive and can be difficult to change roadside. Professional services can often provide on-site tire changes or safe transport to tire services.</p>

      <h3>Fuel Issues</h3>
      <p>Running out of fuel or fuel contamination can strand your RV. Towing services can provide fuel delivery or transport to appropriate facilities.</p>

      <h2>Choosing the Right RV Towing Service</h2>
      <p>Not all towing companies can handle RVs properly. Look for:</p>
      
      <h3>Specialized Equipment</h3>
      <ul>
        <li>Heavy-duty tow trucks rated for your RV's weight</li>
        <li>Proper tie-down equipment and safety chains</li>
        <li>Air brake connections for larger RVs</li>
        <li>Wheel lift or flatbed capabilities</li>
      </ul>

      <h3>Experience and Training</h3>
      <ul>
        <li>Operators trained in RV handling procedures</li>
        <li>Knowledge of RV systems and potential damage points</li>
        <li>Experience with different RV types and manufacturers</li>
        <li>Understanding of weight distribution and balance</li>
      </ul>

      <h3>Insurance and Licensing</h3>
      <ul>
        <li>Proper commercial licensing for heavy vehicle transport</li>
        <li>Adequate insurance coverage for high-value RVs</li>
        <li>Bonding and liability protection</li>
      </ul>

      <h2>Preparing Your RV for Towing</h2>
      <p>If possible, take these steps before the tow truck arrives:</p>
      <ul>
        <li>Secure all loose items inside the RV</li>
        <li>Retract awnings and stabilizer jacks</li>
        <li>Close and lock all windows and vents</li>
        <li>Turn off propane and electrical systems</li>
        <li>Remove or secure external accessories</li>
        <li>Take photos for insurance purposes if accident-related</li>
      </ul>

      <h2>Cost Considerations</h2>
      <p>RV towing costs more than standard vehicle towing due to:</p>
      <ul>
        <li>Specialized equipment requirements</li>
        <li>Additional time and labor needed</li>
        <li>Higher insurance and liability costs</li>
        <li>Potential need for permits or escorts</li>
        <li>Distance to appropriate facilities</li>
      </ul>

      <h2>Why Choose Miklos Towing for RV Services</h2>
      <p>Miklos Towing specializes in RV towing throughout the Tulsa area:</p>
      <ul>
        <li>Heavy-duty equipment capable of handling all RV types</li>
        <li>Experienced operators trained in RV handling</li>
        <li>24/7 availability for emergency situations</li>
        <li>Fully licensed and insured for your protection</li>
        <li>Knowledge of local RV dealers and service centers</li>
        <li>Competitive pricing for professional service</li>
      </ul>

      <p>Your RV represents a significant investment in your lifestyle and adventures. When you need towing services, trust the professionals at Miklos Towing to handle your RV with the care and expertise it deserves.</p>
    `
  },
  'roadside-assistance-vs-towing': {
    slug: 'roadside-assistance-vs-towing',
    title: 'Roadside Assistance vs. Towing: When to Call',
    excerpt: 'Learn the difference between roadside assistance and towing services, and when each service is most appropriate for your situation.',
    publishDate: '2024-01-05',
    readTime: '6 min read',
    author: 'Miklos Towing Team',
    category: 'Service Guide',
    content: `
      <p>When your vehicle breaks down, knowing whether you need roadside assistance or full towing services can save you time, money, and frustration. Understanding the difference between these services helps you make the right call in stressful situations.</p>

      <h2>What is Roadside Assistance?</h2>
      <p>Roadside assistance involves on-site services designed to get your vehicle running again without towing. These services are typically faster and less expensive than towing, making them the preferred option when possible.</p>

      <h3>Common Roadside Assistance Services</h3>
      <ul>
        <li><strong>Jump Start Service:</strong> For dead batteries that can be recharged</li>
        <li><strong>Tire Changes:</strong> Replacing flat tires with your spare</li>
        <li><strong>Lockout Service:</strong> Gaining access to locked vehicles</li>
        <li><strong>Fuel Delivery:</strong> Bringing gas to vehicles that have run out</li>
        <li><strong>Minor Mechanical Fixes:</strong> Simple repairs that can be done roadside</li>
        <li><strong>Winch Services:</strong> Pulling vehicles out of ditches or snow</li>
      </ul>

      <h2>When to Choose Roadside Assistance</h2>
      <p>Roadside assistance is appropriate when:</p>
      <ul>
        <li>Your battery is dead but the vehicle is otherwise functional</li>
        <li>You have a flat tire and a good spare</li>
        <li>You're locked out of your vehicle</li>
        <li>You've run out of gas</li>
        <li>Your vehicle is stuck but not damaged</li>
        <li>You have a minor issue that might be fixable on-site</li>
        <li>Your vehicle is in a safe location for service</li>
      </ul>

      <h2>What is Towing Service?</h2>
      <p>Towing involves transporting your vehicle to another location, typically a repair shop, your home, or a safe storage area. This service is necessary when your vehicle cannot be safely driven.</p>

      <h3>Types of Towing Services</h3>
      <ul>
        <li><strong>Flatbed Towing:</strong> Vehicle loaded onto a flat platform</li>
        <li><strong>Wheel Lift Towing:</strong> Front or rear wheels lifted off the ground</li>
        <li><strong>Hook and Chain:</strong> Older method, rarely used for modern vehicles</li>
        <li><strong>Heavy Duty Towing:</strong> For large vehicles, RVs, and commercial trucks</li>
      </ul>

      <h2>When to Choose Towing</h2>
      <p>Towing is necessary when:</p>
      <ul>
        <li>Your engine won't start and jump starting doesn't work</li>
        <li>You have transmission problems</li>
        <li>Your vehicle has been in an accident</li>
        <li>You have multiple flat tires or no spare</li>
        <li>There are signs of serious mechanical failure</li>
        <li>Your vehicle is unsafe to drive</li>
        <li>You're in a dangerous location and need to move quickly</li>
        <li>Roadside assistance attempts have failed</li>
      </ul>

      <h2>Safety Considerations</h2>
      
      <h3>When Roadside Assistance May Not Be Safe</h3>
      <ul>
        <li>Heavy traffic areas with no safe work space</li>
        <li>Severe weather conditions</li>
        <li>Nighttime on busy highways</li>
        <li>Unstable vehicle positioning</li>
      </ul>

      <h3>When Towing is the Safer Option</h3>
      <ul>
        <li>Vehicle is blocking traffic</li>
        <li>Location is dangerous for extended service</li>
        <li>Weather conditions are deteriorating</li>
        <li>Multiple attempts at roadside assistance have failed</li>
      </ul>

      <h2>Cost Comparison</h2>
      
      <h3>Roadside Assistance Costs</h3>
      <ul>
        <li>Generally less expensive than towing</li>
        <li>Fixed rates for common services</li>
        <li>May be covered by insurance or membership programs</li>
        <li>No additional transport or storage fees</li>
      </ul>

      <h3>Towing Costs</h3>
      <ul>
        <li>Higher base cost due to equipment and time</li>
        <li>Distance-based pricing for transport</li>
        <li>Potential storage fees at destination</li>
        <li>May require additional services at repair facility</li>
      </ul>

      <h2>Making the Right Decision</h2>
      <p>Consider these factors when deciding between roadside assistance and towing:</p>
      
      <h3>Assess the Problem</h3>
      <ul>
        <li>Is the issue likely to be fixable on-site?</li>
        <li>Do you have the necessary spare parts (tire, etc.)?</li>
        <li>Are there signs of serious mechanical problems?</li>
      </ul>

      <h3>Evaluate Safety</h3>
      <ul>
        <li>Is your location safe for extended service?</li>
        <li>Are weather conditions appropriate for roadside work?</li>
        <li>Is there adequate lighting and space?</li>
      </ul>

      <h3>Consider Time Factors</h3>
      <ul>
        <li>How urgent is your situation?</li>
        <li>Do you have time to wait for roadside service?</li>
        <li>Will the repair shop be open when you arrive?</li>
      </ul>

      <h2>Miklos Towing: Both Services Available</h2>
      <p>Miklos Towing provides both roadside assistance and full towing services:</p>
      <ul>
        <li>Experienced technicians can assess your situation</li>
        <li>We'll recommend the most appropriate service</li>
        <li>If roadside assistance doesn't work, we can immediately provide towing</li>
        <li>24/7 availability for both services</li>
        <li>Transparent pricing with no hidden fees</li>
        <li>Professional equipment for safe, efficient service</li>
      </ul>

      <p>When you're stranded, don't guess about what service you need. Call Miklos Towing at (918) 830-0773, and our experienced team will help determine the best solution for your specific situation. We're here to get you back on the road safely and efficiently.</p>
    `
  },
  'water-recovery-services-explained': {
    slug: 'water-recovery-services-explained',
    title: 'Water Recovery Services: What You Need to Know',
    excerpt: 'Understanding specialized water recovery operations and what to expect when your vehicle ends up in a lake, river, or pond.',
    publishDate: '2023-12-28',
    readTime: '7 min read',
    author: 'Miklos Towing Team',
    category: 'Specialized Services',
    content: `
      <p>Vehicle water recovery is one of the most challenging and specialized services in the towing industry. When a vehicle ends up in a lake, river, pond, or other body of water, it requires immediate professional attention to minimize damage and ensure safe recovery.</p>

      <h2>Common Water Recovery Scenarios</h2>
      
      <h3>Accidental Submersion</h3>
      <ul>
        <li>Sliding off icy roads into water bodies</li>
        <li>Losing control during severe weather</li>
        <li>Brake failure near water</li>
        <li>Medical emergencies causing loss of vehicle control</li>
      </ul>

      <h3>Boat Ramp Incidents</h3>
      <ul>
        <li>Vehicles sliding down boat ramps</li>
        <li>Trailer disconnection issues</li>
        <li>Brake failure while launching boats</li>
        <li>Inexperience with boat ramp procedures</li>
      </ul>

      <h3>Flooding Situations</h3>
      <ul>
        <li>Flash flood entrapment</li>
        <li>Rising water levels</li>
        <li>Storm-related flooding</li>
        <li>Dam or levee failures</li>
      </ul>

      <h2>Immediate Safety Concerns</h2>
      <p>Water recovery operations involve significant safety risks:</p>
      
      <h3>Human Safety First</h3>
      <ul>
        <li>Ensure all occupants are safely out of the vehicle</li>
        <li>Call emergency services if anyone is injured</li>
        <li>Never attempt self-recovery in water</li>
        <li>Stay away from unstable vehicles in water</li>
      </ul>

      <h3>Environmental Hazards</h3>
      <ul>
        <li>Fluid leaks contaminating water</li>
        <li>Unstable vehicle positioning</li>
        <li>Current and water depth considerations</li>
        <li>Weather and visibility conditions</li>
      </ul>

      <h2>The Water Recovery Process</h2>
      
      <h3>Initial Assessment</h3>
      <p>Professional water recovery begins with careful assessment:</p>
      <ul>
        <li>Evaluating water depth and current</li>
        <li>Determining vehicle position and stability</li>
        <li>Assessing environmental impact</li>
        <li>Planning the safest recovery approach</li>
      </ul>

      <h3>Equipment Requirements</h3>
      <p>Water recovery requires specialized equipment:</p>
      <ul>
        <li>Heavy-duty winches with extended cable reach</li>
        <li>Waterproof recovery straps and chains</li>
        <li>Flotation devices for equipment</li>
        <li>Diving equipment for underwater attachment</li>
        <li>Environmental protection materials</li>
      </ul>

      <h3>Recovery Techniques</h3>
      <ul>
        <li><strong>Winch Recovery:</strong> Using powerful winches to pull vehicles from water</li>
        <li><strong>Crane Operations:</strong> For completely submerged or heavy vehicles</li>
        <li><strong>Flotation Assistance:</strong> Using air bags to help lift submerged vehicles</li>
        <li><strong>Staged Recovery:</strong> Multiple-step process for complex situations</li>
      </ul>

      <h2>Factors Affecting Recovery</h2>
      
      <h3>Water Conditions</h3>
      <ul>
        <li>Depth of submersion</li>
        <li>Current strength and direction</li>
        <li>Water temperature</li>
        <li>Visibility underwater</li>
        <li>Bottom composition (mud, rock, sand)</li>
      </ul>

      <h3>Vehicle Factors</h3>
      <ul>
        <li>Size and weight of the vehicle</li>
        <li>How long it's been submerged</li>
        <li>Position and angle in the water</li>
        <li>Structural damage from impact</li>
        <li>Accessibility for recovery equipment</li>
      </ul>

      <h3>Environmental Considerations</h3>
      <ul>
        <li>Protected waterways and wildlife areas</li>
        <li>Contamination prevention requirements</li>
        <li>Permit requirements for recovery operations</li>
        <li>Weather and seasonal restrictions</li>
      </ul>

      <h2>Post-Recovery Procedures</h2>
      
      <h3>Immediate Vehicle Care</h3>
      <ul>
        <li>Draining water from all systems</li>
        <li>Disconnecting the battery</li>
        <li>Removing fluids to prevent further contamination</li>
        <li>Documenting damage for insurance purposes</li>
      </ul>

      <h3>Environmental Cleanup</h3>
      <ul>
        <li>Containing and cleaning any fluid spills</li>
        <li>Removing debris from the water</li>
        <li>Restoring the recovery site</li>
        <li>Reporting to environmental authorities if required</li>
      </ul>

      <h2>Insurance and Legal Considerations</h2>
      
      <h3>Insurance Coverage</h3>
      <ul>
        <li>Comprehensive coverage typically covers water damage</li>
        <li>Recovery costs may be covered depending on policy</li>
        <li>Environmental cleanup costs vary by policy</li>
        <li>Document everything for claims processing</li>
      </ul>

      <h3>Legal Requirements</h3>
      <ul>
        <li>Reporting requirements for environmental incidents</li>
        <li>Permits for recovery in protected waters</li>
        <li>Liability for environmental damage</li>
        <li>Cooperation with authorities</li>
      </ul>

      <h2>Prevention Tips</h2>
      <p>While accidents happen, you can reduce the risk:</p>
      <ul>
        <li>Exercise extra caution near water, especially in winter</li>
        <li>Maintain safe speeds on roads near water bodies</li>
        <li>Learn proper boat ramp procedures before using them</li>
        <li>Never drive through flooded areas</li>
        <li>Keep emergency contact numbers readily available</li>
      </ul>

      <h2>Why Choose Professional Water Recovery</h2>
      <p>Water recovery is not a DIY operation. Professional services provide:</p>
      <ul>
        <li>Specialized equipment and expertise</li>
        <li>Safety protocols to protect people and environment</li>
        <li>Insurance and bonding for protection</li>
        <li>Knowledge of legal and environmental requirements</li>
        <li>Coordination with emergency services</li>
        <li>Proper disposal of contaminated materials</li>
      </ul>

      <h2>Miklos Towing Water Recovery Services</h2>
      <p>Miklos Towing provides professional water recovery services throughout the Tulsa area:</p>
      <ul>
        <li>24/7 emergency response for water recovery situations</li>
        <li>Specialized equipment for various water conditions</li>
        <li>Experienced operators trained in water recovery techniques</li>
        <li>Environmental protection protocols</li>
        <li>Coordination with local authorities and environmental agencies</li>
        <li>Complete documentation for insurance claims</li>
      </ul>

      <p>If your vehicle ends up in water, don't attempt recovery yourself. Call Miklos Towing immediately at (918) 830-0773. Our experienced team will respond quickly with the specialized equipment and expertise needed to safely recover your vehicle while protecting the environment.</p>
    `
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, towing tips, Tulsa towing, emergency towing, ${post.title.toLowerCase()}`,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Miklos Towing Blog`,
      description: post.excerpt,
      url: `https://miklostowing.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishDate,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Schema for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "url": `https://miklostowing.com/blog/${post.slug}`,
            "datePublished": post.publishDate,
            "dateModified": post.publishDate,
            "author": {
              "@type": "Organization",
              "name": post.author,
              "url": "https://miklostowing.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Miklos Towing",
              "url": "https://miklostowing.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thumbs.dreamstime.com/b/illustration-vector-graphic-towing-truck-service-logo-design-suitable-automotive-company-268670886.jpg?w=360"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://miklostowing.com/blog/${post.slug}`
            }
          })
        }}
      />

      {/* Article Header */}
      <article className="bg-white">
        <div className="container mx-auto px-4 max-w-4xl py-16">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:mb-1 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-red-50 rounded-lg border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Emergency Towing Services?</h3>
            <p className="text-gray-700 mb-6">
              Don't wait when you need professional towing services in Tulsa. Contact Miklos Towing for fast, reliable assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:9188300773" 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call (918) 830-0773
              </a>
              <a 
                href="mailto:dispatch@miklostow.com" 
                className="bg-white text-red-600 border border-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 justify-center"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
