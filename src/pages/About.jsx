import React from 'react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div>
      <SEO 
        title="About Us"
        description="Learn about Vikramadithya Associates - Your trusted partner for loans, insurance, and financial solutions in Guntur, Andhra Pradesh. Discover our mission, values, and credentials."
        keywords="about us, company information, mission, values, credentials, financial services, loan services, insurance services"
        url="/about"
      />
    
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h1 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
              About Vikramadithya Associates
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-[#222222] lg:mx-0">
              "Your Trusted Partner for Loans, Insurance, and Financial Solutions."
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="about.jpg"
                alt="Our service center team"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-[#222222]">
              <div className="prose max-w-none">
                <p className="mb-4">
                  At Vikramadithya Associates, we are committed to delivering comprehensive financial, loan, insurance, and online services with integrity, transparency, and personalized support.
                </p>

                <p className="mb-4">
                  Founded with a vision to simplify financial and government-related processes for individuals and businesses, our team ensures reliable, fast, and customer-centric solutions — all under one roof.
                </p>

                <p className="mb-4">
                  With years of experience and a strong network of trusted partners, we specialize in:
                </p>

                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li><strong>Loan Services</strong> – Personal, Business, Housing, and Vehicle loans tailored to your goals.</li>
                  <li><strong>Insurance Services</strong> – Life and General insurance solutions to safeguard your future.</li>
                  <li><strong>Financial & Compliance Services</strong> – GST, Income Tax, Legal Documentation, MCA, and more.</li>
                  <li><strong>Online & AEPS Services</strong> – Quick access to government forms, bill payments, and digital transactions.</li>
                  <li><strong>RTO & Student Services</strong> – Hassle-free driving license, renewals, and student document assistance.</li>
                </ul>

                <p className="mb-4">
                  Our mission is simple — to make every service accessible, affordable, and trustworthy, empowering individuals, entrepreneurs, and organizations alike.
                </p>

                <p>
                  At Vikramadithya Associates, your growth and peace of mind are our top priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Certificates */}
      <section className="py-16 bg-[#F5E6CA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
              Owner Credentials
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-[#222222]">
              Certified professionals and recognitions that back our expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Certificate 1 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 flex flex-col items-center">
                <figure className="w-full flex justify-center mb-4">
                  <img
                    src="certificate1.jpg"
                    alt="Professional Certification issued by Chartered Institute"
                    loading="lazy"
                    className="max-w-full h-auto max-h-52 object-contain rounded-md border"
                  />
                </figure>

                <h3 className="text-xl font-bold text-center text-[#0B2545] mb-1">Professional Certification</h3>
                <p className="text-center text-[#222222] mb-4">
                  Chartered Institute — Advanced Practice (Year: 2021)
                </p>

                <div className="w-full border-t border-gray-200 pt-4 text-left">
                  <h4 className="font-semibold text-[#134B70]">A. D. Bhargav</h4>
                  <p className="text-[#222222]">Founder & Principal Consultant</p>
                  <p className="mt-1 text-sm text-gray-600">Specialized in taxation, compliance and government liaison services.</p>
                </div>
              </div>
            </article>

            {/* Certificate 2 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 flex flex-col items-center">
                <figure className="w-full flex justify-center mb-4">
                  <img
                    src="certificate2.jpg"
                    alt="Industry recognition plaque for service excellence"
                    loading="lazy"
                    className="max-w-full h-auto max-h-52 object-contain rounded-md border"
                  />
                </figure>

                <h3 className="text-xl font-bold text-center text-[#0B2545] mb-1">Industry Recognition</h3>
                <p className="text-center text-[#222222] mb-4">
                  Excellence in Client Service — Regional Business Awards (Year: 2023)
                </p>

                <div className="w-full border-t border-gray-200 pt-4 text-left">
                  <h4 className="font-semibold text-[#134B70]">A. D. Bhargav</h4>
                  <p className="text-[#222222]">Founder & Principal Consultant</p>
                  <p className="mt-1 text-sm text-gray-600">Recognized for consistent client satisfaction and operational excellence.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-[#FAF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">Mission & Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#222222]">
              Guiding principles that shape our work and relationships
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#0B2545] mb-4">Our Mission</h3>
              <p className="text-[#222222] text-lg">
                To empower individuals and organisations by delivering reliable, accessible and professional services that simplify
                financial, legal and government processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#0B2545] mb-4">Core Values</h3>
              <ul className="space-y-3 text-[#222222] text-lg">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#D4AF37] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div><strong>Innovation:</strong> Continuously improving our services and processes.</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#D4AF37] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div><strong>Integrity:</strong> Transparent advice and ethical practice.</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#D4AF37] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div><strong>Collaboration:</strong> Partnering with clients for practical, long-term results.</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#D4AF37] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div><strong>Quality:</strong> Delivering accurate, timely and dependable service.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">Our Achievements</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-[#222222] lg:mx-0">
              A few milestones that reflect our commitment
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-[#F5E6CA] rounded-lg shadow-lg">
              <div className="text-5xl font-extrabold text-[#0B2545]">1,000+</div>
              <div className="mt-2 text-xl font-medium text-[#0B2545]">Clients Supported</div>
            </div>

            <div className="text-center p-6 bg-[#F5E6CA] rounded-lg shadow-lg">
              <div className="text-5xl font-extrabold text-[#0B2545]">500+</div>
              <div className="mt-2 text-xl font-medium text-[#0B2545]">Successful Cases</div>
            </div>

            <div className="text-center p-6 bg-[#F5E6CA] rounded-lg shadow-lg">
              <div className="text-5xl font-extrabold text-[#0B2545]">8+</div>
              <div className="mt-2 text-xl font-medium text-[#0B2545]">Years Experience</div>
            </div>

            <div className="text-center p-6 bg-[#F5E6CA] rounded-lg shadow-lg">
              <div className="text-5xl font-extrabold text-[#0B2545]">50+</div>
              <div className="mt-2 text-xl font-medium text-[#0B2545]">Service Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Doorstep Service */}
      <section className="py-16 bg-[#134B70] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Doorstep Service Available</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#F5E6CA]">
            Complimentary doorstep pickup and delivery within Brodipet and Arundalpet (2 km radius). Available by appointment.
          </p>

          <div className="mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#D4AF37] text-[#0B2545] rounded-full font-medium" role="status" aria-label="Service area">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Brodipet & Arundalpet
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-[#0B2545] rounded-md font-semibold shadow hover:bg-gray-50"
            >
              Request Doorstep Service
            </a>
          </div>
        </div>
      </section>

      {/* Bulk Order Special Offer */}
      <section className="py-16 bg-[#FAF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
              Special Offer for Bulk Orders
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="public/paper.jpg"
                alt="Bulk order Xerox service"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-[#222222]">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-[#0B2545] mb-4">Double-Sided Xerox at Unbeatable Rates</h3>
                <p className="mb-4 text-xl">
                  On bulk orders, we offer double-sided Xerox copies for just ₹1 per page.
                </p>
                <div className="mt-6 p-4 bg-[#F5E6CA] rounded-lg">
                  <p className="text-lg font-semibold text-[#0B2545]">
                    <svg className="h-5 w-5 inline mr-2 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"></path>
                    </svg>
                    Free Doorstep Service
                  </p>
                  <p className="mt-2">
                    For customers in Brodipet and Arundalpet areas (within a 2 km radius), doorstep service is provided free of charge.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-[#0B2545] text-white rounded-md font-semibold shadow hover:bg-[#134B70] transition-colors duration-300"
                  >
                    Contact Us for Bulk Orders
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;