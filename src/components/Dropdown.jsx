import React, { useState } from 'react';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown trigger */}
      <button
        className="text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={handleClick}
      >
        {title}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 bg-white border border-gray-300 rounded-lg shadow-lg  overflow-y-auto">
          {items.map((item) => (
            <li key={item.label} className=" hover:bg-gray-100">
              <a
                href={item.href}
                className="block px-1 py-1 text-gray-700 hover:text-gray-900"
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
