import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="p-8">
        <div className="text-5xl mb-6 text-[#0B2545]">{icon}</div>
        <h3 className="text-2xl font-bold text-[#0B2545] mb-4">{title}</h3>
        <p className="text-[#222222] mb-6 text-lg">{description}</p>
        {link && (
          <Link 
            to={link} 
            className="inline-flex items-center text-[#134B70] hover:text-[#D4AF37] font-bold text-lg"
          >
            Learn more
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;