// IntroHero.jsx
import React from "react";

const IntroHero = ({
  name = "Rishu",
  title = "Full‑Stack Developer & ML Enthusiast",
  intro = "This project encrypts personal data by encoding it into legal chess moves and storing it as a PGN file, making the data indistinguishable from a normal chess game.",
  projectIntro = "This project demonstrates a novel approach to data encryption by embedding personal data into a sequence of legal chess moves and storing them in PGN (Portable Game Notation) format",
  projectTitle = "Pawns Protect Your Privacy",
  projectFeatures = [
    "the system converts data into binary form and encodes it through chess gameplay, where each move represents a portion of the hidden information",
    "To an external observer, the encrypted data appears as an ordinary chess game, making detection and analysis extremely difficult.",
    "By combining cryptography with game logic, this project offers a unique and highly secure method for covert data storage and transmission."
  ],
  videoUrl = "https://www.youtube.com/embed/4xLszrpnGkE",
  primaryCtaLabel = "Watch Full Intro",
  primaryCtaLink = "#contact",
}) => {
  return (
    <section className="w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:py-24">
        {/* Top Row: Name Section + Text Intro Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: Name & Personal Intro */}
          <div className="space-y-6 lg:max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              Introduction
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-sky-400">{name}</span>.
              <br />
              <span className="block text-2xl font-normal text-slate-300 md:hidden lg:inline">
                {title}
              </span>
            </h1>
            <h2 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
              {title}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-slate-300 md:text-base">
              {intro}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={primaryCtaLink}
                className="inline-flex items-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 md:px-8 md:py-3.5"
              >
                {primaryCtaLabel}
              </a>
            </div>
          </div>

          {/* Right: Project Text Introduction */}
          <div className="space-y-6 rounded-2xl bg-slate-900/30 p-8 backdrop-blur-sm border border-slate-800 md:p-10 lg:max-w-lg">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Project Overview
              </p>
              <h3 className="text-2xl font-bold md:text-3xl">{projectTitle}</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              {projectIntro}
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {projectFeatures.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400">
                    <span className="text-sm font-bold">0{index + 1}</span>
                  </div>
                  <span className="text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section - Full Width Below */}
        <div className="mt-20 w-full">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg font-semibold text-slate-300 md:text-xl">
              Watch me explain the project
            </p>
            <div className="relative w-full overflow-hidden rounded-3xl border-4 border-slate-800/50 bg-slate-900/60 shadow-2xl">
              <div className="relative h-0 w-full pb-[56.25%]">
                <iframe
                  src={videoUrl}
                  title="Project demo video"
                  className="absolute left-0 top-0 h-full w-full rounded-3xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroHero;
