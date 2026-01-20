import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Chess Crypt
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              A chess-based steganography platform to visualize secure data
              encoding using intelligent move selection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-pink-500 transition">Home</a></li>
              <li><a href="/file_upload" className="hover:text-pink-500 transition">Encrypt / Decrypt</a></li>
              <li><a href="/preview" className="hover:text-pink-500 transition">Live Preview</a></li>
              <li><a href="/visualizer" className="hover:text-pink-500 transition">Visualizer</a></li>
              <li><a href="/about" className="hover:text-pink-500 transition">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer"
                 className="text-gray-400 hover:text-white transition">
                <Github />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
                 className="text-gray-400 hover:text-white transition">
                <Linkedin />
              </a>
              <a href="mailto:your@email.com"
                 className="text-gray-400 hover:text-white transition">
                <Mail />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Chess Crypt. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built with ♟️ & ❤️ by Rishu
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
