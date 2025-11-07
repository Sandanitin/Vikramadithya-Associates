import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import categories from '../data/categories';
import testimonials from '../data/testimonials';
import SEO from '../components/SEO';

const Home = () => {
  // Get top 6 categories for featured services
  const featuredCategories = categories.slice(0, 6);

  // Get first 3 testimonials
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div>
      <SEO 
        title="Home"
        description="Vikramadithya Associates - Your one-stop destination for financial, loan, insurance, and online services in Guntur, Andhra Pradesh. Trusted by 1000+ clients."
        keywords="financial services, loan services, insurance services, online services, business registration, GST, income tax, PAN card, passport services"
        url="/"
      />
      
      {/* Hero Section */}
      <HeroSection
        title="Your One-Stop Destination for Financial & Online Services"
        subtitle="From loans and insurance to business registration and compliance — we simplify it all, so you can focus on what matters most."
        buttonText="Explore Services"
        buttonLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Featured Services */}
      <section className="py-20 bg-gradient-to-b from-[#FAF8F1] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0B2545] sm:text-5xl">
              Our Featured Services
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-[#222222]">
              Comprehensive solutions for all your business and personal needs
            </p>
            <div className="mt-8 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E2E8F0]"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#0B2545] to-[#134B70] text-3xl text-white shadow-lg transform transition-all duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B2545] mb-4 text-center">{category.name}</h3>
                  <p className="text-[#222222] mb-6 text-lg text-center flex-grow">{category.description}</p>
                  <div className="text-center mt-auto">
                    <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0B2545] to-[#134B70] text-white font-bold rounded-lg hover:from-[#134B70] hover:to-[#0B2545] transition-all duration-300 transform hover:scale-105 shadow-md">
                      View Details
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-[#0B2545] hover:bg-[#134B70] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Services
              <svg className="ml-3 -mr-1 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-white to-[#F5E6CA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0B2545] sm:text-5xl">
              Why Choose Us
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-[#222222]">
              Trusted by hundreds of clients for our expertise and reliability
            </p>
            <div className="mt-8 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-[#E2E8F0] flex flex-col h-full">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#0B2545] to-[#134B70] text-white group-hover:from-[#134B70] group-hover:to-[#0B2545] transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0B2545]">Experienced Experts</h3>
              <p className="mt-4 text-[#222222] text-lg flex-grow">
                Our team consists of seasoned professionals with years of industry experience.
              </p>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-[#F5E6CA] text-[#0B2545] rounded-full text-sm font-bold">
                  Trusted Expertise
                </span>
              </div>
            </div>

            <div className="text-center group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-[#E2E8F0] flex flex-col h-full">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#0B2545] to-[#134B70] text-white group-hover:from-[#134B70] group-hover:to-[#0B2545] transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0B2545]">On-Time Delivery</h3>
              <p className="mt-4 text-[#222222] text-lg flex-grow">
                We value your time and ensure all services are delivered within promised timelines.
              </p>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-[#F5E6CA] text-[#0B2545] rounded-full text-sm font-bold">
                  Punctual Service
                </span>
              </div>
            </div>

            <div className="text-center group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-[#E2E8F0] flex flex-col h-full">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#0B2545] to-[#134B70] text-white group-hover:from-[#134B70] group-hover:to-[#0B2545] transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0B2545]">Affordable Pricing</h3>
              <p className="mt-4 text-[#222222] text-lg flex-grow">
                Competitive pricing without compromising on quality or service excellence.
              </p>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-[#F5E6CA] text-[#0B2545] rounded-full text-sm font-bold">
                  Value for Money
                </span>
              </div>
            </div>

            <div className="text-center group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-[#E2E8F0] flex flex-col h-full">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#0B2545] to-[#134B70] text-white group-hover:from-[#134B70] group-hover:to-[#0B2545] transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                  </svg>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0B2545]">Client Satisfaction</h3>
              <p className="mt-4 text-[#222222] text-lg flex-grow">
                Our commitment to excellence has earned us a high client satisfaction rate.
              </p>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-[#F5E6CA] text-[#0B2545] rounded-full text-sm font-bold">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5E6CA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0B2545] sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-[#222222]">
              Don't just take our word for it - hear from our satisfied customers
            </p>
            <div className="mt-8 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0B2545] to-[#134B70]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Ready to start your next project?
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-[#F5E6CA]">
              Contact us today and let our experts help you achieve your goals
            </p>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-4 border border-transparent text-xl font-bold rounded-lg text-[#0B2545] bg-[#D4AF37] hover:bg-[#F5E6CA] transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Contact Us
                <svg className="ml-3 -mr-1 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;