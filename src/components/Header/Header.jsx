import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Encrypt/Decrypt', path: '/encrypt' },
    
    { name: 'Visualizer', path: '/visualizer' },
    
  ];

  return (
    <nav className="py-4 fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-xl z-50 shadow-2xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo with Your Image */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Your Cloudinary Logo Image */}
              <img
                src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1768915338/Screenshot_2026-01-20_185112_cerxcq.png"
                alt="Chess Crypt Logo"
                className="w-12 h-12 object-contain rounded-2xl shadow-lg group-hover:shadow-sky-500/30 group-hover:scale-110 transition-all duration-300 border border-slate-600 hover:border-sky-400/50 bg-slate-800/50 p-2"
                loading="eager"
              />
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            </div>
            
            {/* Brand Name */}
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent tracking-tight">
              Chess Crypt
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`group relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden ${
                    item.name === 'Live Preview'
                      ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30 hover:from-pink-600/30 hover:to-purple-600/30 hover:text-pink-200 hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 hover:border-slate-600/50 hover:shadow-md hover:shadow-slate-500/20 hover:scale-[1.02] border border-transparent'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group relative inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <div className={`transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16"
                  />
                  <path 
                    className={`transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 12h16"
                  />
                  <path 
                    className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 18h16"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu - Full screen overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-2xl border-t border-slate-800 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <div className="max-w-4xl mx-auto px-6">
              <div className="grid grid-cols-2 gap-4 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group relative flex items-center gap-3 p-4 rounded-2xl text-base font-semibold transition-all duration-300 overflow-hidden ${
                      item.name === 'Live Preview'
                        ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border-2 border-pink-500/30 hover:from-pink-600/30 hover:shadow-lg hover:shadow-pink-500/25'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70 hover:border-slate-700 hover:shadow-xl hover:shadow-slate-500/20 hover:scale-105 border border-transparent'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-800/50 group-hover:bg-slate-700/70 flex items-center justify-center transition-all">
                      {item.name === 'Live Preview' ? '🎬' : '→'}
                    </div>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
