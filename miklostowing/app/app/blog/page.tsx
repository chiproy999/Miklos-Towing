
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Towing Tips & Industry Insights Blog',
  description: 'Expert towing advice, safety tips, and industry insights from Miklos Towing professionals in Tulsa, Oklahoma. Stay informed about emergency towing, RV services, and roadside assistance.',
  keywords: 'towing tips, emergency towing advice, RV towing guide, roadside assistance, Tulsa towing blog, vehicle recovery tips, winter driving safety, Oklahoma towing laws',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Towing Tips & Industry Insights Blog | Miklos Towing',
    description: 'Expert towing advice, safety tips, and industry insights from Miklos Towing professionals in Tulsa, Oklahoma.',
    url: 'https://miklostowing.com/blog',
  },
}

const blogPosts = [
  {
    slug: 'winter-towing-safety-tips',
    title: 'Winter Towing Safety Tips for Oklahoma Drivers',
    excerpt: 'Essential safety tips for winter driving in Oklahoma and what to do if you need emergency towing during severe weather conditions.',
    publishDate: '2024-01-15',
    readTime: '5 min read',
    author: 'Miklos Towing Team',
    category: 'Safety Tips'
  },
  {
    slug: 'rv-towing-guide',
    title: 'Complete Guide to RV Towing Services',
    excerpt: 'Everything you need to know about professional RV towing, from preparation to choosing the right service provider in Tulsa.',
    publishDate: '2024-01-10',
    readTime: '8 min read',
    author: 'Miklos Towing Team',
    category: 'RV Services'
  },
  {
    slug: 'roadside-assistance-vs-towing',
    title: 'Roadside Assistance vs. Towing: When to Call',
    excerpt: 'Learn the difference between roadside assistance and towing services, and when each service is most appropriate for your situation.',
    publishDate: '2024-01-05',
    readTime: '6 min read',
    author: 'Miklos Towing Team',
    category: 'Service Guide'
  },
  {
    slug: 'water-recovery-services-explained',
    title: 'Water Recovery Services: What You Need to Know',
    excerpt: 'Understanding specialized water recovery operations and what to expect when your vehicle ends up in a lake, river, or pond.',
    publishDate: '2023-12-28',
    readTime: '7 min read',
    author: 'Miklos Towing Team',
    category: 'Specialized Services'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Schema for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Miklos Towing Blog",
            "description": "Expert towing advice, safety tips, and industry insights from Miklos Towing professionals in Tulsa, Oklahoma.",
            "url": "https://miklostowing.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Miklos Towing",
              "url": "https://miklostowing.com"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://miklostowing.com/blog/${post.slug}`,
              "datePublished": post.publishDate,
              "author": {
                "@type": "Organization",
                "name": post.author
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Towing Tips & Industry Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice from Tulsa's most trusted towing professionals. Stay informed about emergency towing, 
            safety tips, and industry best practices.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-8">
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
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Towing Services?</h2>
          <p className="text-xl mb-8 text-red-100">
            Don't wait - contact Miklos Towing now for fast, professional service in Tulsa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9188300773" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center"
            >
              📞 Call (918) 830-0773
            </a>
            <a 
              href="mailto:dispatch@miklostow.com" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30 inline-flex items-center gap-2 justify-center"
            >
              📧 Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
