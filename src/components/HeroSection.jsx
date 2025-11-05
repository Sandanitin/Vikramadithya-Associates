const HeroSection = ({ title, subtitle, buttonText, buttonLink, bgColor = 'bg-[#0B2545]', backgroundImage }) => {
  // Determine text color based on background
  const textColor = backgroundImage ? 'text-[#0B2545]' : 'text-white';
  const subtitleColor = backgroundImage ? 'text-[#222222]' : 'text-[#F5E6CA]';
  
  return (
    <div className={`relative ${bgColor} text-white overflow-hidden`}>
      {backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] to-[#134B70]"></div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight mb-6 ${textColor}`}>
            <span className="block">{title}</span>
          </h1>
          <p className={`mt-4 max-w-2xl mx-auto text-xl md:text-2xl sm:text-lg md:mt-6 md:max-w-3xl ${subtitleColor}`}>
            {subtitle}
          </p>
          {buttonText && (
            <div className="mt-12 flex justify-center">
              <div className="rounded-md shadow-lg transform transition-all duration-300 hover:scale-105">
                <a
                  href={buttonLink || '#'}
                  className="w-full flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-md text-[#0B2545] bg-[#D4AF37] hover:bg-[#F5E6CA] md:py-5 md:text-xl md:px-12 transition-all duration-300 shadow-lg"
                >
                  {buttonText}
                  <svg className="ml-3 -mr-1 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;