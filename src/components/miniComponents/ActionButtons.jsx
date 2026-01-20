// ActionButtons.jsx
import React from "react";
import { Link } from "react-router";

const ActionButtons = () => {
  return (
    <section className="w-full bg-gradient-to-b from-slate-950/90 via-slate-900 to-slate-950/80 backdrop-blur-xl border-b border-slate-800/30">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-semibold text-sky-400 ring-1 ring-sky-400/20 backdrop-blur-sm">
            🎯 Quick Actions
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get Started in Seconds
          </h2>
          <p className="mt-4 text-lg text-slate-300 sm:text-xl">
            Choose your preferred workflow
          </p>
        </div>

        {/* Professional Button Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Try Now */}
          <Link
            to="/encrypt"
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500/95 to-sky-600 p-1 shadow-2xl shadow-sky-500/20 ring-1 ring-sky-500/20 hover:shadow-sky-500/40 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-sky-500/50"
          >
            <div className="flex h-64 flex-col items-center justify-center rounded-3xl bg-slate-950/80 p-8 text-center backdrop-blur-xl transition-all duration-300 group-hover:bg-slate-900/90">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-2xl text-sky-300 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                🚀
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-sky-50 tracking-tight">
                Try Now
              </h3>
              <p className="mb-6 text-sm text-slate-300 group-hover:text-slate-200 max-w-xs leading-relaxed">
                Experience the demo with sample data instantly
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-sky-300 group-hover:text-sky-100">
                Get Started
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Upload File */}
          <Link
            to="/encrypt"
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/95 to-emerald-600 p-1 shadow-2xl shadow-emerald-500/20 ring-1 ring-emerald-500/20 hover:shadow-emerald-500/40 hover:ring-emerald-500/30 transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
          >
            <div className="flex h-64 flex-col items-center justify-center rounded-3xl bg-slate-950/80 p-8 text-center backdrop-blur-xl transition-all duration-300 group-hover:bg-slate-900/90">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-2xl text-emerald-300 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                📁
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-emerald-50 tracking-tight">
                Upload File
              </h3>
              <p className="mb-6 text-sm text-slate-300 group-hover:text-slate-200 max-w-xs leading-relaxed">
                Process your own data files securely
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300 group-hover:text-emerald-100">
                Upload Now
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Visualize Encryption */}
          <Link
            to="/visualizer"
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/95 to-purple-600 p-1 shadow-2xl shadow-purple-500/20 ring-1 ring-purple-500/20 hover:shadow-purple-500/40 hover:ring-purple-500/30 transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            <div className="flex h-64 flex-col items-center justify-center rounded-3xl bg-slate-950/80 p-8 text-center backdrop-blur-xl transition-all duration-300 group-hover:bg-slate-900/90">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-2xl text-purple-300 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                🔒
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-purple-50 tracking-tight">
                Visualize
              </h3>
              <p className="mb-6 text-sm text-slate-300 group-hover:text-slate-200 max-w-xs leading-relaxed">
                Watch encryption process step-by-step
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-300 group-hover:text-purple-100">
                View Demo
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActionButtons;
