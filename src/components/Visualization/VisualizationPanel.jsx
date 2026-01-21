"use client"

import { useState } from "react"

const initialBoard = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
]

const pieceSymbols = {
  r: "♜", n: "♞", b: "♝", q: "♛", k: "♚", p: "♟",
  R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔", P: "♙",
}

export default function VisualizationPanel({
  fileName = "No file selected",
  gameCount = 0,
  moveCount = 0,
  progress = 0,
  status = "Initializing...",
  legalMoves = 0,
  maxBitsPerMove = 0,
  bitsEncoded = "0 / 0",
  binaryData = "",
  moves = [],
}) {
  const [board] = useState(initialBoard)

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Column - Chess Board */}
          <div className="flex-1 bg-card border border-border rounded-xl p-5">
            <h2 className="text-lg font-semibold text-cyan-400 mb-4">Chess Board</h2>
            
            {/* Chess Board */}
            <div className="flex justify-center mb-5">
              <div className="flex">
                {/* Row Labels */}
                <div className="flex flex-col justify-around pr-1">
                  {[8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
                    <span key={num} className="text-xs text-muted-foreground h-8 md:h-10 flex items-center">
                      {num}
                    </span>
                  ))}
                </div>
                
                {/* Board */}
                <div>
                  <div className="grid grid-cols-8 border border-border rounded overflow-hidden">
                    {board.map((row, rowIndex) =>
                      row.map((piece, colIndex) => (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-xl md:text-2xl
                            ${(rowIndex + colIndex) % 2 === 0 ? "bg-amber-200" : "bg-amber-700"}
                            hover:brightness-110 transition-all cursor-pointer`}
                        >
                          <span className={(rowIndex + colIndex) % 2 === 0 ? "text-slate-800" : "text-slate-100"}>
                            {piece && pieceSymbols[piece]}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                  
                  {/* Column Labels */}
                  <div className="flex justify-around pt-1">
                    {["a", "b", "c", "d", "e", "f", "g", "h"].map((col) => (
                      <span key={col} className="text-xs text-muted-foreground w-8 md:w-10 text-center">
                        {col}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              <div className="bg-muted/50 rounded-lg p-3 text-center border border-border">
                <div className="text-xs text-muted-foreground mb-1">Game</div>
                <div className="text-lg font-semibold text-foreground">{gameCount}</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center border border-border">
                <div className="text-xs text-muted-foreground mb-1">Move</div>
                <div className="text-lg font-semibold text-foreground">{moveCount}</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center border border-border">
                <div className="text-xs text-muted-foreground mb-1">Progress</div>
                <div className="text-lg font-semibold text-cyan-400">{progress}%</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center border border-border">
                <div className="text-xs text-muted-foreground mb-1">Status</div>
                <div className="text-sm font-medium text-pink-500 truncate">{status}</div>
              </div>
            </div>

            {/* Latest Moves */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Latest Moves</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-4 min-h-[120px] max-h-[200px] overflow-y-auto">
                {moves.length > 0 ? (
                  <div className="space-y-2">
                    {moves.map((move, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm py-1 border-b border-border/50 last:border-0"
                      >
                        <span className="text-muted-foreground w-8">{index + 1}.</span>
                        <span className="text-foreground font-mono">{move}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm italic">
                    No moves yet. Start visualization to see moves.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Encoding Information */}
          <div className="flex-1 bg-card border border-border rounded-xl p-5">
            <h2 className="text-lg font-semibold text-pink-500 mb-4">Encoding Information</h2>

            {/* File Information */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-foreground mb-2">File Information</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground truncate">{fileName}</p>
              </div>
            </div>

            {/* Current Encoding Step */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-foreground mb-2">Current Encoding Step</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Legal moves:</span>
                  <span className="text-sm font-medium text-foreground">{legalMoves}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Max bits per move:</span>
                  <span className="text-sm font-medium text-foreground">{maxBitsPerMove}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Bits encoded:</span>
                  <span className="text-sm font-medium text-foreground">{bitsEncoded}</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-cyan-400 italic">Waiting to start...</p>
                </div>
              </div>
            </div>

            {/* Binary View */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">Binary View</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-4 min-h-[150px] max-h-[250px] overflow-y-auto font-mono">
                {binaryData ? (
                  <p className="text-sm text-foreground break-all leading-relaxed">
                    {binaryData.split("").map((bit, index) => (
                      <span
                        key={index}
                        className={bit === "1" ? "text-pink-500" : "text-cyan-400"}
                      >
                        {bit}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    Binary data will appear here
                  </p>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">
                Highlighted bits are currently being encoded
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
