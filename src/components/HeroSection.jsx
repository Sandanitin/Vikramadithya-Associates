import { Link } from 'react-router-dom';

const HeroSection = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  backgroundImage 
}) => {
  return (
    <section 
      className="relative w-full min-h-[85vh] flex items-center overflow-hidden"
      style={{ 
        backgroundImage: backgroundImage ? url(${backgroundImage}) : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#D4AF37] mb-6 leading-tight drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={buttonLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-[#0B2545] font-bold text-lg rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {buttonText}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B2545] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/30 p-6 rounded-xl text-center shadow-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold text-black mb-2">1000+</div>
                  <div className="text-black font-medium">Clients Served</div>
                </div>
                <div className="bg-white/30 p-6 rounded-xl text-center shadow-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold text-black mb-2">500+</div>
                  <div className="text-black font-medium">Projects Completed</div>
                </div>
                <div className="bg-white/30 p-6 rounded-xl text-center shadow-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold text-black mb-2">8+</div>
                  <div className="text-black font-medium">Years Experience</div>
                </div>
                <div className="bg-white/30 p-6 rounded-xl text-center shadow-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold text-black mb-2">50+</div>
                  <div className="text-black font-medium">Service Categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;