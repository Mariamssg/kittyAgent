import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center justify-center space-y-1 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
      >
        <span className="block w-6 h-0.5 bg-white rounded-full"></span>
        <span className="block w-6 h-0.5 bg-white rounded-full"></span>
        <span className="block w-6 h-0.5 bg-white rounded-full"></span>
      </button>

      {/* Menu Content */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-48 bg-white/5 backdrop-blur-lg rounded-lg p-4 space-y-4">
          <div className="flex flex-col space-y-2">
            {/* Twitter */}
            <a 
              href="https://x.com/BsfKitty56867" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Twitter
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/kittythe_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
