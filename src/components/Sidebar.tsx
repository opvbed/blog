import Image from 'next/image';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Sidebar = () => {
  const categories = [
    'Teknologi',
    'Programming',
    'Web Development',
    'Tutorial',
    'Lifestyle'
  ];

  return (
    <div className="space-y-8">
      <div className="card text-center">
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src="/obed1.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">Obed Pakpahan</h2>
        <p className="text-gray-600 mb-4">
          Web Developer | Crypto Investor | Tech Enthusiast
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com/opvbed" className="text-gray-600 hover:text-blue-500">
            <FaFacebook size={20} />
          </a>
          <a href="https://github.com/opvbed" className="text-gray-600 hover:text-blue-500">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/opvbed" className="text-gray-600 hover:text-blue-500">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Kategori</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition duration-200"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
