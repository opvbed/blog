import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-12">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">My Blog</h3>
            <p className="text-gray-600">
              Berbagi pengetahuan dan pengalaman dalam dunia teknologi
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-600">
          <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
