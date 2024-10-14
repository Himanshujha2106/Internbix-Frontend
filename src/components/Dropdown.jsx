import React, { useState } from 'react';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="text-gray-800 hover:text-gray-900 font-semibold focus:outline-none relative z-10 transition-colors duration-300"
      >
        {title}
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full mt-[-4px] w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-20 transition-all duration-300 ease-in-out transform scale-100">
          {items.map((item) => (
            <li key={item.label} className="hover:bg-primary hover:bg-opacity-10">
              <a
                href={item.href}
                className="block py-2 text-gray-700 text-center transition duration-200 ease-in-out"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
