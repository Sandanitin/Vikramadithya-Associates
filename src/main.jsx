import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key
emailjs.init('hmOEMpk3EBcfiiXS-')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// HeroSection import removed since we're not using it

const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;
