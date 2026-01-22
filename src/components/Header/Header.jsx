// Header.jsx
import React from 'react';
import { Link } from 'react-router';  // React Router
import HeroBanner from '../HeroBanner';

const Header = () => {
  return (
    <section className="relative w-full py-10  bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden">
      {/* Background Pattern - Full coverage */}
      
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Top Navigation - Contained */}
      <nav className="relative z-50 py-4 px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo - Link to Home */}
          <Link to="/" className="flex items-center gap-2 hover:no-underline focus:outline-none">
            <div className="w-25 h-15 ">
               <img src='https://res.cloudinary.com/dycjjaxsk/image/upload/v1768915338/Screenshot_2026-01-20_185112_cerxcq.png'/>
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent tracking-tight hover:from-slate-200 hover:to-white transition-all duration-200">
              Chess Crypt
            </span>
          </Link>

          {/* Nav Links - Using Link Component */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: 'Home', path: '/' },
              { label: 'Encrypt/Decrypt', path: '/encrypt' },
              { label: 'Visualize', path: '/visualizer' },
              
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full group-hover:w-full transition-all duration-300 origin-center mt-1 block"></span>
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            
            
            {/* Sign Up Button */}
            <Link
              to="/our-team"
              className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </nav>

     
    </section>
  );
};

export default Header;
