import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import categories from '../data/categories';
import services from '../data/services';
import emailjs from '@emailjs/browser';

const Services = () => {
  // Get all categories without filtering
  const allCategories = categories;

  // Get financial services
  const financialServices = services.filter(service => 
    service.categoryId === 'financial-services'
  );

  // Function to get icon for financial services
  const getFinancialServiceIcon = (serviceName) => {
    const iconMap = {
      'Business Reconstruction': '🏢',
      'Funding': '💰',
      'GST': '📋',
      'Income Tax': '💵',
      'Intellectual Property (IP)': '🧠',
      'ISO': '🏅',
      'Startup': '🚀',
      'Special Services': '🧮',
      'Registration': '📝',
      'Other Compliance': '📑',
      'MCA (Ministry of Corporate Affairs)': '⚖️',
      'Legal Documentation': '📜'
    };
    
    return iconMap[serviceName] || '💼';
  };

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [isContactLoading, setIsContactLoading] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsContactLoading(true);
    
    // Validate form fields
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert('Please fill in all required fields.');
      setIsContactLoading(false);
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      alert('Please enter a valid email address.');
      setIsContactLoading(false);
      return;
    }
    
    // Prepare form data to match Contact.jsx exactly
    const formData = {
      name: contactForm.name,
      email: contactForm.email,
      message: contactForm.message
    };
    
    // If service is selected, append it to the message
    if (contactForm.service) {
      formData.message = `Service of Interest: ${contactForm.service}\n\n${contactForm.message}`;
    }
    
    // Log the data being sent for debugging
    console.log('Sending email with data:', formData);
    
    // Send email using EmailJS with the same parameters as Contact.jsx
    emailjs.send('service_j1it8n7', 'template_uvnmczx', formData)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        console.log('Full result:', result);
        setIsContactSubmitted(true);
        
        // Reset form after submission
        setContactForm({
          name: '',
          email: '',
          service: '',
          message: ''
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsContactSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        console.error('Error details:', {
          formData,
          errorText: error.text,
          errorStatus: error.status,
          errorMessage: error.message,
          errorResponse: error.response
        });
        
        // More detailed error message for the user
        let errorMessage = 'Failed to send message. Please try again later.';
        if (error.status === 400) {
          errorMessage = 'There was an issue with the form data. Please check your input and try again.';
        } else if (error.status === 401) {
          errorMessage = 'Authentication failed. Please contact the site administrator.';
        } else if (error.status === 403) {
          errorMessage = 'Access denied. Please contact the site administrator.';
        } else if (error.status === 422) {
          errorMessage = 'Invalid data provided. Please check your input and try again.';
        } else if (error.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        }
        
        alert(errorMessage);
      })
      .finally(() => {
        setIsContactLoading(false);
      });
  };

  return (
    <div>
      {/* Categories Overview */}
      <section className="py-16 bg-[#FAF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
              Service Categories
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-[#222222]">
              Explore our wide range of professional services
            </p>
          </div>

          <div className="mt-12">
            {/* Main Categories */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16">
              {allCategories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4 text-[#0B2545]">{category.icon}</div>
                    <h3 className="text-xl font-bold text-[#0B2545] mb-2">{category.name}</h3>
                    <p className="text-[#222222] mb-4">{category.description}</p>
                    <span className="inline-flex items-center text-[#134B70] hover:text-[#D4AF37] font-medium">
                      View Details
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Financial Services Details */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
                  Financial Services
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-[#222222]">
                  Detailed financial solutions for your business needs
                </p>
              </div>

              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {financialServices.map((service) => (
                  <Link 
                    key={service.id}
                    to={`/category/${service.categoryId}/${service.id}`}
                    className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-4 text-[#0B2545]">{getFinancialServiceIcon(service.name)}</div>
                      <h3 className="text-xl font-bold text-[#0B2545] mb-2">{service.name}</h3>
                      <p className="text-[#222222] mb-4">{service.description}</p>
                      <span className="inline-flex items-center text-[#134B70] hover:text-[#D4AF37] font-medium">
                        View Details
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#FAF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-[#222222]">
              Interested in our services? Contact us for more information.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            {isContactSubmitted ? (
              <div className="rounded-md bg-green-50 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      Message Sent Successfully!
                    </h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>
                        Thank you for contacting us. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0B2545]">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={contactForm.name}
                      onChange={handleContactChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0B2545]">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={contactForm.email}
                      onChange={handleContactChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#0B2545]">
                  Service of Interest
                </label>
                <div className="mt-1">
                  <select
                    id="service"
                    name="service"
                    value={contactForm.service}
                    onChange={handleContactChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                  >
                    <option value="">Select a service</option>
                    {allCategories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0B2545]">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={handleContactChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isContactLoading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#134B70] ${
                    isContactLoading 
                      ? 'bg-[#134B70] cursor-not-allowed' 
                      : 'bg-[#0B2545] hover:bg-[#134B70]'
                  }`}
                >
                  {isContactLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Work With Us
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center bg-[#134B70] p-6 rounded-lg shadow-lg">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#D4AF37] text-[#0B2545]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Customized Solutions</h3>
              <p className="mt-2 text-[#F5E6CA]">
                Tailored services to meet your specific requirements and goals.
              </p>
            </div>

            <div className="text-center bg-[#134B70] p-6 rounded-lg shadow-lg">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#D4AF37] text-[#0B2545]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Affordable Pricing</h3>
              <p className="mt-2 text-[#F5E6CA]">
                Competitive rates without compromising on quality or service.
              </p>
            </div>

            <div className="text-center bg-[#134B70] p-6 rounded-lg shadow-lg">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#D4AF37] text-[#0B2545]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Quick Delivery</h3>
              <p className="mt-2 text-[#F5E6CA]">
                Efficient processes to ensure timely completion of all services.
              </p>
            </div>

            <div className="text-center bg-[#134B70] p-6 rounded-lg shadow-lg">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#D4AF37] text-[#0B2545]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Dedicated Support</h3>
              <p className="mt-2 text-[#F5E6CA]">
                Personalized assistance throughout your service journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#134B70] to-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-[#F5E6CA]">
              Contact us today for a personalized quote
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#0B2545] bg-[#D4AF37] hover:bg-[#F5E6CA] transition-colors duration-300"
              >
                Get a Quote
                <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;