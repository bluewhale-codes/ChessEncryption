"use client"

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function IntroBanner({ onTryNow }) {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className={`inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100 animate-pulse-slow' : 'translate-y-4 opacity-0'}`}>
          Chess Steganography
        </div>

        {/* Main Title */}
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight transform transition-all duration-800 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Hide Your Secrets in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Chess Games
          </span>
        </h1>

        {/* Description */}
        <p className={`text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 transform transition-all duration-700 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          A powerful steganography tool that encrypts your data into chess game moves. 
          Your files are encoded as legal chess positions, making your hidden messages 
          completely undetectable.
        </p>

        {/* Feature Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          {/* Encryption Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 text-left hover:border-emerald-500/30 transition-all duration-300 group hover:scale-105">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Encryption</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Convert any file into a series of chess moves using advanced bit encoding algorithms.
            </p>
          </div>

          {/* Decryption Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 text-left hover:border-cyan-500/30 transition-all duration-300 group hover:scale-105">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-all duration-300">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Decryption</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Extract hidden data from chess game files by reversing the encoding process.
            </p>
          </div>

          {/* Visualization Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 text-left hover:border-purple-500/30 transition-all duration-300 group hover:scale-105">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition-all duration-300">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Visualization</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Watch the encoding process in real-time with an interactive chess board display.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className={`bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-10 text-left transform transition-all duration-800 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
          <h2 className="text-white font-semibold text-lg mb-4 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3 animate-bounce-slow">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
              <span className="text-slate-300 text-sm">Upload your file</span>
            </div>
            <svg className="hidden md:block w-6 h-6 text-slate-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="flex items-center gap-3 animate-bounce-slow [animation-delay:0.2s]">
              <span className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
              <span className="text-slate-300 text-sm">Convert to chess moves</span>
            </div>
            <svg className="hidden md:block w-6 h-6 text-slate-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="flex items-center gap-3 animate-bounce-slow [animation-delay:0.4s]">
              <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
              <span className="text-slate-300 text-sm">Share securely</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={()=>navigate("/encrypt/try")}
          className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transform transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 ${isVisible ? 'translate-y-0 opacity-100 delay-800' : 'translate-y-4 opacity-0'}`}
        >
          Try Now
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <p className={`text-slate-500 text-sm mt-4 transform transition-all duration-500 ease-out delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
          No registration required. Your data never leaves your browser.
        </p>
      </div>
    </section>
  )
}
