import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import PortfolioItem from "@/components/portfolio-item"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
              D
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">DigitalEdge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Get Started
            </Button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <MobileNav />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Digital Presence
              </span>
            </h1>
            <p className="text-lg text-gray-600 md:pr-12">
              We help businesses grow through strategic digital marketing solutions tailored to your unique goals and
              audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6 px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8">
                Our Services
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by <span className="font-bold">500+</span> businesses
              </p>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://teamtweaks1-blog.s3.us-east-2.amazonaws.com/blog/wp-content/uploads/2023/09/05133724/Best-Digital-Marketing-Agencies-In-Mumbai.jpg"  // Updated image source
              alt="Digital Marketing Strategy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="h-12 w-32 relative">
              <Image src="/images/brands/logo1.png" alt="Google" fill className="object-contain" />
            </div>
            <div className="h-12 w-32 relative">
              <Image src="/images/brands/logo2.png" alt="Amazon" fill className="object-contain" />
            </div>
            <div className="h-12 w-32 relative">
              <Image src="/images/brands/logo3.png" alt="Netflix" fill className="object-contain" />
            </div>
            <div className="h-12 w-32 relative">
              <Image src="/images/brands/logo4.png" alt="Apple" fill className="object-contain" />
            </div>
            <div className="h-12 w-32 relative">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhThGl61k99Rr-7X0AKDcM6lazURXA053QkQ&s" alt="Microsoft" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              We offer comprehensive digital marketing solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Search Engine Optimization"
              description="Improve your visibility in search results and drive organic traffic to your website."
              icon="Search"
            />
            <ServiceCard
              title="Social Media Marketing"
              description="Engage with your audience and build brand awareness through strategic social media campaigns."
              icon="Share2"
            />
            <ServiceCard
              title="Content Marketing"
              description="Create valuable content that attracts and engages your target audience."
              icon="FileText"
            />
            <ServiceCard
              title="Email Marketing"
              description="Connect with your customers directly through personalized email campaigns."
              icon="Mail"
            />
            <ServiceCard
              title="Pay-Per-Click Advertising"
              description="Drive immediate traffic and conversions with targeted PPC campaigns."
              icon="MousePointer"
            />
            <ServiceCard
              title="Analytics & Reporting"
              description="Track performance and gain insights to optimize your marketing strategies."
              icon="BarChart2"
            />
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-600">Our proven process ensures we deliver results that exceed expectations.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Discovery", description: "We learn about your business, goals, and target audience." },
              {
                step: 2,
                title: "Strategy",
                description: "We develop a customized marketing strategy aligned with your objectives.",
              },
              {
                step: 3,
                title: "Implementation",
                description: "We execute the strategy with precision and attention to detail.",
              },
              {
                step: 4,
                title: "Optimization",
                description: "We continuously monitor and optimize for maximum performance.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-gray-600">
              Take a look at some of our successful projects and the results we've achieved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem
              title="E-commerce Growth Strategy"
              category="SEO & PPC"
              image="/images/portfolio/ecommerce-growth.jpg"
              result="250% increase in organic traffic"
            />
            <PortfolioItem
              title="Brand Awareness Campaign"
              category="Social Media"
              image="/images/portfolio/social-media.jpg"
              result="3M+ impressions in 30 days"
            />
            <PortfolioItem
              title="Lead Generation Website"
              category="Web Design & SEO"
              image="/images/portfolio/web-design.jpg"
              result="180% increase in qualified leads"
            />
            <PortfolioItem
              title="Content Marketing Strategy"
              category="Content & Email"
              image="/images/portfolio/content-marketing.jpg"
              result="45% higher engagement rate"
            />
            <PortfolioItem
              title="Local Business Promotion"
              category="Local SEO"
              image="/images/portfolio/local-seo.jpg"
              result="First page rankings for 50+ keywords"
            />
            <PortfolioItem
              title="App Launch Campaign"
              category="Digital PR & Social"
              image="/images/portfolio/app-launch.jpg"
              result="100K+ downloads in first month"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600">Don't just take our word for it. Here's what our clients have to say.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with DigitalEdge transformed our online presence. Their strategic approach to SEO and content marketing has driven significant growth for our business."
              author="Sarah Johnson"
              company="TechSolutions Inc."
              image="/images/testimonials/person1.jpg"
            />
            <TestimonialCard
              quote="The team at DigitalEdge truly understands digital marketing. Their PPC campaigns delivered an ROI that exceeded our expectations by 300%."
              author="Michael Chen"
              company="Retail Innovations"
              image="/images/testimonials/person2.jpg"
            />
            <TestimonialCard
              quote="Their social media strategy helped us connect with our audience in meaningful ways. We've seen a dramatic increase in engagement and brand loyalty."
              author="Emma Rodriguez"
              company="Lifestyle Brands Co."
              image="/images/testimonials/person3.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create a digital marketing strategy that drives results.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg py-6 px-8">
            Schedule a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions or ready to start your project? Reach out to us and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">123 Marketing Street, Digital City, DC 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">info@digitaledge.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                  D
                </div>
                <span className="font-bold text-xl">DigitalEdge</span>
              </Link>
              <p className="text-gray-400 mb-4">Elevating brands through strategic digital marketing solutions.</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    SEO
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Email Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    PPC Advertising
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest marketing tips and insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 DigitalEdge. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
