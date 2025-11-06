import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import services from '../data/services';
import categories from '../data/categories';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

const CategoryPage = () => {
  const { categoryId, serviceId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get subcategory from URL query params
  const getSubcategoryFromUrl = () => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('sub');
  };
  
  const getMainCategoryFromUrl = () => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('main');
  };
  
  const subcategory = getSubcategoryFromUrl();
  const mainCategoryParam = getMainCategoryFromUrl();
  
  // Find the category
  const category = categories.find(cat => cat.id === categoryId);
  
  // Find services in this category
  const categoryServices = services.filter(service => service.categoryId === categoryId);
  
  // Find specific service if serviceId is provided
  const specificService = serviceId ? services.find(service => service.id === serviceId && service.categoryId === categoryId) : null;
  
  // Filter services based on search term
  const filteredServices = categoryServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (service.subcategories && service.subcategories.some(sub => 
      sub.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  );

  // Group services by category for dropdown functionality
  const groupServicesByCategory = (categoryServices) => {
    if (!category || !category.services) return [];
    
    const grouped = [];
    let currentMainCategory = null;
    
    category.services.forEach(service => {
      if (!service.startsWith('  • ')) {
        // This is a main category
        currentMainCategory = {
          mainCategory: service,
          subCategories: []
        };
        grouped.push(currentMainCategory);
      } else if (currentMainCategory) {
        // This is a sub-category
        currentMainCategory.subCategories.push(service);
      }
    });
    
    return grouped;
  };

  // Toggle category expansion
  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Set the service name in the form data
    const serviceData = {
      ...formData,
      service: specificService ? specificService.name : (subcategory || mainCategoryParam || 'Service Inquiry')
    };
    
    // Send email using EmailJS
    emailjs.send('service_3pivxzk', 'template_7xpv82j', serviceData)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Handle subcategory click - navigate to subcategory form
  const handleSubcategoryClick = (mainCategory, subCategory) => {
    // Navigate to the same page but with subcategory parameter
    const subCategoryName = subCategory.replace('  • ', '');
    const mainCategoryName = mainCategory.replace('  • ', '');
    navigate(`${window.location.pathname}?main=${encodeURIComponent(mainCategoryName)}&sub=${encodeURIComponent(subCategoryName)}`);
  };
  
  // Handle main category click - navigate to main category form
  const handleMainCategoryClick = (mainCategory) => {
    // Navigate to the same page but with main category parameter
    const mainCategoryName = mainCategory.replace('  • ', '');
    navigate(`${window.location.pathname}?main=${encodeURIComponent(mainCategoryName)}`);
  };

  // If specific service is requested, show form for that service
  if (specificService) {
    return (
      <div className="min-h-screen bg-[#FAF8F1]">
        <SEO 
          title={`${specificService.name} Services`}
          description={`Request ${specificService.name} services from Vikramadithya Associates in Guntur, Andhra Pradesh. ${specificService.description}`}
          keywords={`${specificService.name}, financial services, business services, loan services, insurance services`}
          url={`/category/${categoryId}/${serviceId}`}
        />
        
        {/* Hero Section */}
        <div className="relative bg-[#0B2545] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                <span className="block">{specificService.name}</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-xl text-[#F5E6CA] sm:text-lg md:mt-5 md:max-w-3xl">
                {specificService.description}
              </p>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Service Information */}
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-[#0B2545] mb-6">Service Overview</h2>
                  <p className="text-[#222222] mb-6">{specificService.description}</p>
                  
                  <h3 className="text-xl font-bold text-[#0B2545] mb-4">Available Options</h3>
                  <div className="space-y-3">
                    {specificService.subcategories && specificService.subcategories.map((sub, index) => (
                      <div key={index} className="p-4 bg-[#F5E6CA] rounded-lg">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-[#0B2545] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-[#0B2545] font-medium">{sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Email Form Section */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#0B2545] mb-2">Request This Service</h3>
                  <p className="text-[#222222]">Fill out the form below and we'll get back to you shortly</p>
                </div>
                
                {isSubmitted ? (
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
                            Thank you for your inquiry. We'll get back to you as soon as possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#0B2545] mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0B2545] mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0B2545] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#0B2545] mb-1">
                      Service Requested
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="service"
                        id="service"
                        value={specificService.name}
                        readOnly
                        className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-gray-100 font-medium"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0B2545] mb-1">
                      Additional Details
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute top-3 left-3">
                        <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                        </svg>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide any additional details about your service request..."
                        className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-md shadow-lg text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#134B70] transition-all duration-300 transform hover:scale-[1.02] ${
                        isLoading 
                          ? 'bg-[#134B70] cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#0B2545] to-[#134B70] hover:from-[#134B70] hover:to-[#0B2545]'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Your Request...
                        </>
                      ) : (
                        <>
                          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                          </svg>
                          Submit Service Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  // If subcategory is requested, show form for that subcategory
  if (subcategory && category) {
    return (
      <div className="min-h-screen bg-[#FAF8F1]">
        <SEO 
          title={`${subcategory} Services`}
          description={`Request ${subcategory} services from Vikramadithya Associates in Guntur, Andhra Pradesh.`}
          keywords={`${subcategory}, financial services, business services, loan services, insurance services`}
          url={`/category/${categoryId}?sub=${encodeURIComponent(subcategory)}`}
        />
        
        {/* Hero Section */}
        <div className="relative bg-[#0B2545] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                <span className="block">{subcategory}</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-xl text-[#F5E6CA] sm:text-lg md:mt-5 md:max-w-3xl">
                Service Inquiry for {subcategory}
              </p>
            </div>
          </div>
        </div>

        {/* Subcategory Form Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0B2545] mb-2">Request This Service</h3>
                <p className="text-[#222222]">Fill out the form below and we'll get back to you shortly</p>
              </div>
              
              {isSubmitted ? (
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
                          Thank you for your inquiry. We'll get back to you as soon as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0B2545] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0B2545] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0B2545] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#0B2545] mb-1">
                    Service Requested
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="service"
                      id="service"
                      value={`${mainCategoryParam} - ${subcategory}`}
                      readOnly
                      className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-gray-100 font-medium"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0B2545] mb-1">
                    Additional Details
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute top-3 left-3">
                      <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide any additional details about your service request..."
                      className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                    ></textarea>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-md shadow-lg text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#134B70] transition-all duration-300 transform hover:scale-[1.02] ${
                      isLoading 
                        ? 'bg-[#134B70] cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[#0B2545] to-[#134B70] hover:from-[#134B70] hover:to-[#0B2545]'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Your Request...
                      </>
                    ) : (
                      <>
                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        Submit Service Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  // If main category is requested, show form for that main category
  if (mainCategoryParam && category) {
    return (
      <div className="min-h-screen bg-[#FAF8F1]">
        <SEO 
          title={`${mainCategoryParam} Services`}
          description={`Request ${mainCategoryParam} services from Vikramadithya Associates in Guntur, Andhra Pradesh.`}
          keywords={`${mainCategoryParam}, financial services, business services, loan services, insurance services`}
          url={`/category/${categoryId}?main=${encodeURIComponent(mainCategoryParam)}`}
        />
        
        {/* Hero Section */}
        <div className="relative bg-[#0B2545] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                <span className="block">{mainCategoryParam}</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-xl text-[#F5E6CA] sm:text-lg md:mt-5 md:max-w-3xl">
                Service Inquiry for {mainCategoryParam}
              </p>
            </div>
          </div>
        </div>

        {/* Main Category Form Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0B2545] mb-2">Request This Service</h3>
                <p className="text-[#222222]">Fill out the form below and we'll get back to you shortly</p>
              </div>
              
              {isSubmitted ? (
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
                          Thank you for your inquiry. We'll get back to you as soon as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0B2545] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0B2545] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0B2545] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#0B2545] mb-1">
                    Service Requested
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="service"
                      id="service"
                      value={mainCategoryParam}
                      readOnly
                      className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-gray-100 font-medium"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0B2545] mb-1">
                    Additional Details
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute top-3 left-3">
                      <svg className="h-5 w-5 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide any additional details about your service request..."
                      className="py-3 px-4 pl-10 block w-full shadow-sm focus:ring-[#134B70] focus:border-[#134B70] border-[#D4AF37] rounded-md text-[#222222] bg-white"
                    ></textarea>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-md shadow-lg text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#134B70] transition-all duration-300 transform hover:scale-[1.02] ${
                      isLoading 
                        ? 'bg-[#134B70] cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[#0B2545] to-[#134B70] hover:from-[#134B70] hover:to-[#0B2545]'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Your Request...
                      </>
                    ) : (
                      <>
                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        Submit Service Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F1]">
        <SEO 
          title="Category Not Found"
          description="The requested service category could not be found on Vikramadithya Associates website."
          keywords="category not found, service not available"
          url={`/category/${categoryId}`}
        />
        
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h1 className="mt-2 text-2xl font-bold text-[#0B2545]">Category not found</h1>
          <p className="mt-1 text-[#222222]">
            The requested service category could not be found.
          </p>
        </div>
      </div>
    );
  }

  // Group services for dropdown functionality
  const groupedServices = groupServicesByCategory(category.services);

  return (
    <div className="min-h-screen bg-[#FAF8F1]">
      <SEO 
        title={`${category.name} Services`}
        description={`${category.description} Explore our comprehensive range of ${category.name.toLowerCase()} in Guntur, Andhra Pradesh.`}
        keywords={`${category.name}, financial services, loan services, insurance services, business services`}
        url={`/category/${categoryId}`}
      />
      
      {/* Hero Section */}
      <div className="relative bg-[#0B2545] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              <span className="block">{category.icon} {category.name}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-[#F5E6CA] sm:text-lg md:mt-5 md:max-w-3xl">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-[#222222]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-[#222222] rounded-md leading-5 bg-white placeholder-[#222222] focus:outline-none focus:placeholder-[#134B70] focus:ring-1 focus:ring-[#134B70] focus:border-[#134B70] sm:text-sm"
                placeholder="Search services in this category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
              Services in {category.name}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-[#222222]">
              Explore our comprehensive range of {category.name.toLowerCase()}
            </p>
          </div>

          {categoryServices.length > 0 ? (
            <div className="space-y-8">
              {filteredServices.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-lg">
                  <svg className="mx-auto h-12 w-12 text-[#134B70]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="mt-2 text-xl font-medium text-[#0B2545]">No services found</h3>
                  <p className="mt-1 text-[#222222]">
                    Try adjusting your search to find what you're looking for.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => setSearchTerm('')}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#0B2545] hover:bg-[#134B70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#134B70]"
                    >
                      Clear Search
                    </button>
                  </div>
                </div>
              ) : (
                filteredServices.map((service) => (
                  <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#0B2545] mb-2">{service.name}</h3>
                      <p className="text-[#222222] mb-6">{service.description}</p>
                      
                      {service.subcategories && service.subcategories.length > 0 && (
                        <div className="bg-white rounded-lg shadow-lg p-6">
                          <div className="text-center">
                            <h4 className="text-xl font-bold text-[#0B2545] mb-4">Available Services</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {service.subcategories.map((sub, index) => (
                                <div key={index} className="p-3 bg-[#F5E6CA] rounded-lg">
                                  <div className="flex items-center">
                                    <svg className="h-4 w-4 text-[#0B2545] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-[#0B2545] font-medium text-sm">{sub}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-6 text-center">
                        <button
                          onClick={() => navigate(`/category/${service.categoryId}/${service.id}`)}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0B2545] hover:bg-[#134B70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#134B70]"
                        >
                          Request This Service
                          <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#0B2545] mb-4">Services Overview</h3>
                <div className="space-y-4">
                  {groupedServices.map((group, index) => (
                    <div key={index} className="border border-[#E2E8F0] rounded-lg overflow-hidden">
                      <div 
                        className="flex justify-between items-center p-4 bg-[#F5E6CA] cursor-pointer hover:bg-[#F5E6CA]/80 transition-colors duration-200"
                        onClick={() => handleMainCategoryClick(group.mainCategory)}
                      >
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-[#0B2545] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                          <span className="text-[#0B2545] font-bold">{group.mainCategory.replace('  • ', '')}</span>
                        </div>
                        <svg 
                          className={`h-5 w-5 text-[#0B2545] transform transition-transform duration-200 ${expandedCategories[group.mainCategory] ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                      
                      {expandedCategories[group.mainCategory] && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white">
                          {group.subCategories.map((subCategory, subIndex) => (
                            <div 
                              key={subIndex} 
                              className="p-3 bg-[#F5E6CA]/50 rounded-lg border-l-4 border-[#D4AF37] hover:shadow-sm transition-shadow duration-300 cursor-pointer"
                              onClick={() => handleSubcategoryClick(group.mainCategory, subCategory)}
                            >
                              <div className="flex items-center">
                                <svg className="h-4 w-4 text-[#0B2545] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-[#0B2545] font-medium text-sm">{subCategory.replace('  • ', '')}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;