"use client"

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function VisualizationBanner({ onTryNow }) {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className={`inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100 animate-pulse-slow delay-100' : 'translate-y-4 opacity-0'}`}>
            Live Visualization
          </span>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight transform transition-all duration-900 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Watch Chess{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Encryption
            </span>{" "}
            in Action
          </h1>

          <p className={`text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto transform transition-all duration-700 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            Experience steganography like never before. See how your data transforms into 
            chess moves in real-time, bit by bit, move by move.
          </p>
        </div>

        {/* Visual Process Flow */}
        <div className={`relative mb-16 transform transition-all duration-800 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2 hidden md:block animate-gradient-flow" />
          
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 ${isVisible ? 'animate-stagger-children' : ''}`}>
            {/* Step 1: Input Data */}
            <div className="relative bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-all duration-400 group hover:-translate-y-2 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:rotate-3 transition-all duration-400">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">Input Data</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your file is converted into binary data stream
              </p>
            </div>

            {/* Step 2: Bit Analysis */}
            <div className="relative bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-all duration-400 group hover:-translate-y-2 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:-rotate-3 transition-all duration-400">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">Bit Analysis</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Binary bits are grouped for optimal encoding
              </p>
            </div>

            {/* Step 3: Move Generation */}
            <div className="relative bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-2xl p-6 text-center hover:border-indigo-500/40 transition-all duration-400 group hover:-translate-y-2 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 group-hover:rotate-6 transition-all duration-400">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">Move Generation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Legal chess moves encode your data bits
              </p>
            </div>

            {/* Step 4: Chess Game */}
            <div className="relative bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-400 group hover:-translate-y-2 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 group-hover:rotate-12 transition-all duration-400">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 22H5v-2h14v2M17.16 8.26A4.5 4.5 0 0015.5 4a.5.5 0 00-1 0v.09a4.5 4.5 0 00-5 0V4a.5.5 0 00-1 0 4.5 4.5 0 00-1.66 4.26L5.5 12h13l-1.34-3.74zM5 14v4h14v-4H5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">Chess Game</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A valid chess game containing your secret data
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 transform transition-all duration-800 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          {/* Real-time Board */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 flex gap-6 items-start hover:bg-slate-800/60 group transition-all duration-400 hover:-translate-y-1">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-all duration-400">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">Interactive Chess Board</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Watch pieces move across the board as each bit of your data gets encoded. 
                Highlighted squares show the current move being generated.
              </p>
            </div>
          </div>

          {/* Binary Viewer */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 flex gap-6 items-start hover:bg-slate-800/60 group transition-all duration-400 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-all duration-400">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">Binary Data View</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                See your data in binary format with real-time highlighting as bits 
                are consumed during the encoding process.
              </p>
            </div>
          </div>

          {/* Move History */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 flex gap-6 items-start hover:bg-slate-800/60 group transition-all duration-400 hover:-translate-y-1">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-all duration-400">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">Complete Move History</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Track every chess move generated during encoding. Export as PGN 
                format for use in any chess application.
              </p>
            </div>
          </div>

          {/* Encoding Stats */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 flex gap-6 items-start hover:bg-slate-800/60 group transition-all duration-400 hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-all duration-400">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">Live Encoding Statistics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Monitor legal moves available, bits per move efficiency, 
                total bits encoded, and overall progress in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-900 ease-out delay-900 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'}`}>
          <button
            onClick={()=>navigate("/visualizer/try")}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold text-lg rounded-2xl hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 transform hover:scale-110 active:scale-95 transition-all duration-400 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 group"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Try Now
          </button>

          <p className={`text-slate-500 text-sm mt-6 max-w-md mx-auto transform transition-all duration-600 ease-out delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
            Upload any text or image file and watch the magic happen. 
            All processing runs locally in your browser.
          </p>
        </div>
      </div>
    </section>
  )
}
