import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#45007A] p-4 bg-opacity-60">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="https://cdn.discordapp.com/attachments/945783583413514293/1203446280450474095/image.png?ex=65d11fb0&is=65beaab0&hm=9352606d5561dc48c8d4c4091b1696a6c462681d8494a9dabf195096e641dcb0&" alt="Logo" className="h-8" />
        </div>

        {/* User Avatar and Name */}
        <div className="flex items-center text-white cursor-pointer">
          <div className="mr-2">Gayan Kodithuwakku</div>
          <div className="relative">
            <img
              src="https://cdn.discordapp.com/attachments/945783583413514293/1203444032592937020/DCux96qWmol2U0PA7ddkfrP8AELeBvwZOOcwAAAAASUVORK5CYII.png?ex=65d11d98&is=65bea898&hm=83d0f85227038f1271cb232392ae141fd96a7201cdc183325ca35edd2847ebf2&"
              alt="User Avatar"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={toggleMenu}
            />

            {/* User Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white p-2 shadow rounded">
                <button className="block px-4 py-2 text-gray-800">
                  View Profile
                </button>
                <button className="block px-4 py-2 text-gray-800">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
