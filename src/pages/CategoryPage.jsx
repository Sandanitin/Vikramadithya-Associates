import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import categories from '../data/categories';
import services from '../data/services';

const CategoryPage = () => {
  const { categoryId, serviceId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  
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
    service.subcategories.some(sub => 
      sub.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Group services by main category
  const groupServicesByCategory = (servicesList) => {
    const grouped = [];
    let currentMainCategory = null;
    let currentSubCategories = [];
    
    servicesList.forEach((service, index) => {
      if (!service.startsWith('  •')) {
        // If we have a previous main category, save it
        if (currentMainCategory) {
          grouped.push({
            mainCategory: currentMainCategory,
            subCategories: currentSubCategories
          });
        }
        // Start new main category
        currentMainCategory = service;
        currentSubCategories = [];
      } else {
        // Add to subcategories
        currentSubCategories.push(service);
      }
    });
    
    // Don't forget the last category
    if (currentMainCategory) {
      grouped.push({
        mainCategory: currentMainCategory,
        subCategories: currentSubCategories
      });
    }
    
    return grouped;
  };

  // Toggle category expansion
  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // If specific service is requested, show only that service
  if (specificService) {
    return (
      <div className="min-h-screen bg-[#FAF8F1]">
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
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#0B2545] mb-4">Available Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specificService.subcategories.map((sub, index) => (
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
          </div>
        </section>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F1]">
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

          {categoryServices.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#0B2545] mb-4">Services Overview</h3>
                <div className="space-y-4">
                  {groupedServices.map((group, index) => (
                    <div key={index} className="border border-[#E2E8F0] rounded-lg overflow-hidden">
                      <div 
                        className="flex justify-between items-center p-4 bg-[#F5E6CA] cursor-pointer hover:bg-[#F5E6CA]/80 transition-colors duration-200"
                        onClick={() => toggleCategory(group.mainCategory)}
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
                            <div key={subIndex} className="p-3 bg-[#F5E6CA]/50 rounded-lg border-l-4 border-[#D4AF37] hover:shadow-sm transition-shadow duration-300">
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
          ) : (
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
                  <Link 
                    key={service.id}
                    to={`/category/${service.categoryId}/${service.id}`}
                    className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#0B2545] mb-2">{service.name}</h3>
                      <p className="text-[#222222] mb-6">{service.description}</p>
                      
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
                      
                      <div className="mt-6 text-center">
                        <span className="inline-flex items-center text-[#134B70] hover:text-[#D4AF37] font-medium">
                          View Details
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;