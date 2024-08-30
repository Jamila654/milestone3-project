"use client";
import { useState } from "react";
import DropDown from "./dropdown";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <main className="w-full h-14 sm:h-20 flex items-center justify-around px-4">
        <div className="title text-nowrap text-xl sm:text-2xl md:text-4xl">Jam's Closet</div>
        <div className="search hidden sm:flex gap-2 flex-grow max-w-xl">
          <input
            type="text"
            className="w-full min-w-[150px] rounded-2xl px-2 border-2 border-black flex-grow"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <img src="/search-icon.png" alt="search" className="w-16 h-10" />
          </button>
        </div>
        <div className="categories">
          <button>
            <img src="/ham.png" alt="categories" className="w-16 h-10" onClick={toggleDropdown} />
          </button>
        </div>
      </main>
      {isDropdownOpen && <DropDown />}
    </>
  );
};

export default Navbar;





  
