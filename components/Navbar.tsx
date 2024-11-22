import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-3xl font-bold">MyApp</div>
        <div className="hidden md:flex space-x-4 text-xl">
          <a href="/" className="">Home</a>
          <a href="/Link" className="">Linkedin</a>
          <a href="/EOM" className="">EOM</a>
          <a href="/feed/1" className="">Feed</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
