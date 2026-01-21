"use client"

import { useState } from "react"

export default function Team() {
  const [fileName, setFileName] = useState("No file chosen")
  const [fileType, setFileType] = useState("Text")
  const [processingSpeed, setProcessingSpeed] = useState(300)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState("Initializing...")
  const [gameCount, setGameCount] = useState(0)
  const [moveCount, setMoveCount] = useState(0)
  const [showOverlay, setShowOverlay] = useState(false)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleStartVisualization = () => {
    setStatus("Running...")
    setShowOverlay(true)
  }

  const handleCloseOverlay = () => {
    setShowOverlay(false)
  }

  const handleReset = () => {
    setFileName("No file chosen")
    setProgress(0)
    setStatus("Initializing...")
    setGameCount(0)
    setMoveCount(0)
  }

  // Chess board initial setup
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
    k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟",
    K: "♔", Q: "♕", R: "♖", B: "♗", N: "♘", P: "♙",
  }

  // Styles
  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#0a0e1a",
    padding: "24px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  }

  const headerStyle = {
    textAlign: "center",
    marginBottom: "24px",
  }

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    background: "linear-gradient(90deg, #e91e8c, #ff6ec7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: 0,
  }

  const cardStyle = {
    backgroundColor: "#111827",
    borderRadius: "12px",
    border: "1px solid #1f2937",
    padding: "20px",
    marginBottom: "20px",
  }

  const sectionTitleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#e91e8c",
    marginBottom: "16px",
    margin: 0,
  }

  const cyanTitleStyle = {
    ...sectionTitleStyle,
    color: "#06b6d4",
  }

  const labelStyle = {
    fontSize: "12px",
    color: "#9ca3af",
    marginBottom: "6px",
    display: "block",
  }

  const inputRowStyle = {
    display: "flex",
    gap: "16px",
    marginBottom: "16px",
    flexWrap: "wrap",
  }

  const fileInputWrapperStyle = {
    flex: "1",
    minWidth: "200px",
  }

  const fileInputContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    backgroundColor: "#1f2937",
    borderRadius: "6px",
    padding: "8px 12px",
    border: "1px solid #374151",
  }

  const chooseFileButtonStyle = {
    backgroundColor: "#e91e8c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "6px 14px",
    fontSize: "12px",
    fontWeight: "500",
    cursor: "pointer",
    whiteSpace: "nowrap",
  }

  const fileNameStyle = {
    color: "#9ca3af",
    fontSize: "13px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }

  const selectWrapperStyle = {
    minWidth: "140px",
  }

  const selectStyle = {
    width: "100%",
    backgroundColor: "#1f2937",
    color: "#fff",
    border: "1px solid #374151",
    borderRadius: "6px",
    padding: "10px 12px",
    fontSize: "13px",
    cursor: "pointer",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    backgroundSize: "16px",
  }

  const sliderRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  }

  const sliderStyle = {
    flex: "1",
    height: "6px",
    borderRadius: "3px",
    appearance: "none",
    background: "#374151",
    cursor: "pointer",
    accentColor: "#06b6d4",
  }

  const sliderValueStyle = {
    color: "#e91e8c",
    fontSize: "13px",
    fontWeight: "500",
    minWidth: "50px",
    textAlign: "right",
  }

  const buttonRowStyle = {
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
  }

  const primaryButtonStyle = {
    backgroundColor: "#e91e8c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s",
  }

  const secondaryButtonStyle = {
    ...primaryButtonStyle,
    backgroundColor: "#7c3aed",
  }

  const progressBarContainerStyle = {
    backgroundColor: "#1f2937",
    borderRadius: "4px",
    height: "8px",
    overflow: "hidden",
    marginBottom: "8px",
  }

  const progressBarStyle = {
    height: "100%",
    backgroundColor: "#06b6d4",
    width: `${progress}%`,
    transition: "width 0.3s ease",
  }

  const progressTextStyle = {
    textAlign: "center",
    color: "#9ca3af",
    fontSize: "12px",
  }

  const mainContentStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  }

  const leftPanelStyle = {
    flex: "1",
    minWidth: "280px",
  }

  const rightPanelStyle = {
    flex: "1",
    minWidth: "280px",
  }

  const chessBoardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px",
  }

  const chessBoardStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    border: "2px solid #374151",
    borderRadius: "4px",
    overflow: "hidden",
    width: "100%",
    maxWidth: "320px",
    aspectRatio: "1",
  }

  const getSquareStyle = (row, col) => ({
    aspectRatio: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "clamp(16px, 4vw, 28px)",
    backgroundColor: (row + col) % 2 === 0 ? "#d4a574" : "#8b5a2b",
    cursor: "pointer",
  })

  const statsRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#1f2937",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "16px",
  }

  const statItemStyle = {
    textAlign: "center",
    flex: "1",
  }

  const statLabelStyle = {
    fontSize: "11px",
    color: "#9ca3af",
    marginBottom: "4px",
  }

  const statValueStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#06b6d4",
  }

  const statusValueStyle = {
    ...statValueStyle,
    color: "#e91e8c",
  }

  const subsectionTitleStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "10px",
  }

  const infoBoxStyle = {
    backgroundColor: "#1f2937",
    borderRadius: "6px",
    padding: "12px",
    marginBottom: "16px",
    border: "1px solid #374151",
  }

  const infoTextStyle = {
    color: "#9ca3af",
    fontSize: "13px",
    margin: 0,
  }

  const infoRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
  }

  const infoLabelStyle = {
    color: "#9ca3af",
    fontSize: "12px",
  }

  const infoValueStyle = {
    color: "#fff",
    fontSize: "12px",
  }

  const waitingTextStyle = {
    color: "#06b6d4",
    fontSize: "12px",
    fontStyle: "italic",
    marginTop: "8px",
  }

  const binaryBoxStyle = {
    ...infoBoxStyle,
    fontFamily: "monospace",
    fontSize: "12px",
    color: "#9ca3af",
    minHeight: "60px",
  }

  const footnoteStyle = {
    fontSize: "11px",
    color: "#6b7280",
    fontStyle: "italic",
    marginTop: "12px",
  }

  const latestMovesTitleStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "10px",
  }

  const latestMovesBoxStyle = {
    backgroundColor: "#1f2937",
    borderRadius: "6px",
    padding: "12px",
    border: "1px solid #374151",
    minHeight: "50px",
  }

  const placeholderTextStyle = {
    color: "#6b7280",
    fontSize: "12px",
    fontStyle: "italic",
  }

  const overlayBackdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
    overflow: "auto",
  }

  const overlayContentStyle = {
    backgroundColor: "#0a0e1a",
    borderRadius: "16px",
    border: "1px solid #1f2937",
    padding: "20px",
    maxWidth: "900px",
    width: "100%",
    position: "relative",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
  }

  const closeButtonStyle = {
    position: "absolute",
    top: "12px",
    right: "12px",
    backgroundColor: "#1f2937",
    border: "1px solid #374151",
    borderRadius: "8px",
    color: "#9ca3af",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "18px",
    transition: "all 0.2s",
    zIndex: 10,
  }

  const overlayMainContentStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  }

  const overlayLeftPanelStyle = {
    flex: "1",
    minWidth: "280px",
    backgroundColor: "#111827",
    borderRadius: "12px",
    border: "1px solid #1f2937",
    padding: "16px",
  }

  const overlayRightPanelStyle = {
    flex: "1",
    minWidth: "280px",
    backgroundColor: "#111827",
    borderRadius: "12px",
    border: "1px solid #1f2937",
    padding: "16px",
  }

  const overlayChessBoardStyle = {
    display: "grid",
    gridTemplateColumns: "20px repeat(8, 1fr)",
    gridTemplateRows: "repeat(8, 1fr) 20px",
    width: "100%",
    maxWidth: "300px",
    margin: "0 auto 16px",
  }

  const overlaySquareStyle = (row, col) => ({
    aspectRatio: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "clamp(14px, 3vw, 24px)",
    backgroundColor: (row + col) % 2 === 0 ? "#d4a574" : "#8b5a2b",
  })

  const rowLabelStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color: "#6b7280",
    width: "20px",
  }

  const colLabelStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color: "#6b7280",
    height: "20px",
  }

  const overlayHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  }

  const overlayTitleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#fff",
    margin: 0,
  }

  const overlayBodyStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }

  const overlayInfoCardStyle = {
    backgroundColor: "#1f2937",
    borderRadius: "8px",
    padding: "12px",
    border: "1px solid #374151",
  }

  const overlayProgressBarStyle = {
    height: "8px",
    backgroundColor: "#374151",
    borderRadius: "4px",
    overflow: "hidden",
  }

  const overlayProgressFillStyle = {
    height: "100%",
    backgroundColor: "#06b6d4",
    width: "0%",
    transition: "width 0.3s ease",
  }

  const overlayStatusTextStyle = {
    textAlign: "center",
    color: "#9ca3af",
    fontSize: "12px",
    marginTop: "8px",
  }

  return (
    <div style={containerStyle}>
      {/* Overlay Modal */}
      {showOverlay && (
        <div style={overlayBackdropStyle} onClick={handleCloseOverlay}>
          <div style={overlayContentStyle} onClick={(e) => e.stopPropagation()}>
            <button
              style={closeButtonStyle}
              onClick={handleCloseOverlay}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#374151"
                e.target.style.color = "#fff"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#1f2937"
                e.target.style.color = "#9ca3af"
              }}
            >
              ✕
            </button>

            <div style={overlayMainContentStyle}>
              {/* Chess Board Panel */}
              <div style={overlayLeftPanelStyle}>
                <h2 style={{ ...cyanTitleStyle, marginBottom: "16px" }}>Chess Board</h2>
                
                {/* Chess Board with Labels */}
                <div style={overlayChessBoardStyle}>
                  {initialBoard.map((row, rowIndex) => (
                    <>
                      <div key={`row-label-${rowIndex}`} style={rowLabelStyle}>
                        {8 - rowIndex}
                      </div>
                      {row.map((piece, colIndex) => (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          style={overlaySquareStyle(rowIndex, colIndex)}
                        >
                          {piece && pieceSymbols[piece]}
                        </div>
                      ))}
                    </>
                  ))}
                  <div style={colLabelStyle} />
                  {["a", "b", "c", "d", "e", "f", "g", "h"].map((col) => (
                    <div key={col} style={colLabelStyle}>{col}</div>
                  ))}
                </div>

                {/* Stats Row */}
                <div style={statsRowStyle}>
                  <div style={statItemStyle}>
                    <div style={statLabelStyle}>Game</div>
                    <div style={statValueStyle}>{gameCount}</div>
                  </div>
                  <div style={statItemStyle}>
                    <div style={statLabelStyle}>Move</div>
                    <div style={statValueStyle}>{moveCount}</div>
                  </div>
                  <div style={statItemStyle}>
                    <div style={statLabelStyle}>Progress</div>
                    <div style={statValueStyle}>{progress}%</div>
                  </div>
                  <div style={statItemStyle}>
                    <div style={statLabelStyle}>Status</div>
                    <div style={statusValueStyle}>{status}</div>
                  </div>
                </div>

                {/* Latest Moves */}
                <h3 style={latestMovesTitleStyle}>Latest Moves</h3>
                <div style={latestMovesBoxStyle}>
                  <p style={placeholderTextStyle}>No moves yet. Start visualization to see moves.</p>
                </div>
              </div>

              {/* Encoding Information Panel */}
              <div style={overlayRightPanelStyle}>
                <h2 style={{ ...sectionTitleStyle, marginBottom: "16px" }}>Encoding Information</h2>

                <h3 style={subsectionTitleStyle}>File Information</h3>
                <div style={infoBoxStyle}>
                  <p style={infoTextStyle}>
                    {fileName === "No file chosen" ? "No file selected" : fileName}
                  </p>
                </div>

                <h3 style={subsectionTitleStyle}>Current Encoding Step</h3>
                <div style={infoBoxStyle}>
                  <div style={infoRowStyle}>
                    <span style={infoLabelStyle}>Legal moves:</span>
                    <span style={infoValueStyle}>0</span>
                  </div>
                  <div style={infoRowStyle}>
                    <span style={infoLabelStyle}>Max bits per move:</span>
                    <span style={infoValueStyle}>0</span>
                  </div>
                  <div style={infoRowStyle}>
                    <span style={infoLabelStyle}>Bits encoded:</span>
                    <span style={infoValueStyle}>0 / 0</span>
                  </div>
                  <p style={waitingTextStyle}>Waiting to start...</p>
                </div>

                <h3 style={subsectionTitleStyle}>Binary View</h3>
                <div style={binaryBoxStyle}>
                  Binary data will appear here
                </div>

                <p style={footnoteStyle}>Highlighted bits are currently being encoded</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <header style={headerStyle}>
        <h1 style={titleStyle}>Chess Steganography Visualizer</h1>
      </header>

      {/* Upload Section */}
      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}>Upload File for Live Encryption Preview</h2>
        
        <div style={inputRowStyle}>
          <div style={fileInputWrapperStyle}>
            <label style={labelStyle}>Select file to encrypt:</label>
            <div style={fileInputContainerStyle}>
              <label style={chooseFileButtonStyle}>
                Choose File
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </label>
              <span style={fileNameStyle}>{fileName}</span>
            </div>
          </div>
          
          <div style={selectWrapperStyle}>
            <label style={labelStyle}>File type:</label>
            <select
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              style={selectStyle}
            >
              <option value="Text">Text</option>
              <option value="Image">Image</option>
              <option value="Binary">Binary</option>
            </select>
          </div>
        </div>

        <div style={sliderRowStyle}>
          <label style={labelStyle}>Processing Speed:</label>
          <input
            type="range"
            min="50"
            max="1000"
            value={processingSpeed}
            onChange={(e) => setProcessingSpeed(e.target.value)}
            style={sliderStyle}
          />
          <span style={sliderValueStyle}>{processingSpeed}ms</span>
        </div>

        <div style={buttonRowStyle}>
          <button style={primaryButtonStyle} onClick={handleStartVisualization}>
            Start Visualization
          </button>
          <button style={secondaryButtonStyle} onClick={handleReset}>
            Reset
          </button>
        </div>

        <div style={progressBarContainerStyle}>
          <div style={progressBarStyle} />
        </div>
        <p style={progressTextStyle}>{progress}% complete</p>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Chess Board Panel */}
        <div style={leftPanelStyle}>
          <div style={cardStyle}>
            <h2 style={cyanTitleStyle}>Chess Board</h2>
            
            <div style={chessBoardContainerStyle}>
              <div style={chessBoardStyle}>
                {initialBoard.map((row, rowIndex) =>
                  row.map((piece, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      style={getSquareStyle(rowIndex, colIndex)}
                    >
                      {piece && pieceSymbols[piece]}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div style={statsRowStyle}>
              <div style={statItemStyle}>
                <div style={statLabelStyle}>Game</div>
                <div style={statValueStyle}>{gameCount}</div>
              </div>
              <div style={statItemStyle}>
                <div style={statLabelStyle}>Move</div>
                <div style={statValueStyle}>{moveCount}</div>
              </div>
              <div style={statItemStyle}>
                <div style={statLabelStyle}>Progress</div>
                <div style={statValueStyle}>{progress}%</div>
              </div>
              <div style={statItemStyle}>
                <div style={statLabelStyle}>Status</div>
                <div style={statusValueStyle}>{status}</div>
              </div>
            </div>

            <h3 style={latestMovesTitleStyle}>Latest Moves</h3>
            <div style={latestMovesBoxStyle}>
              <p style={placeholderTextStyle}>No moves yet. Start visualization to see moves.</p>
            </div>
          </div>
        </div>

        {/* Encoding Information Panel */}
        <div style={rightPanelStyle}>
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Encoding Information</h2>

            <h3 style={subsectionTitleStyle}>File Information</h3>
            <div style={infoBoxStyle}>
              <p style={infoTextStyle}>
                {fileName === "No file chosen" ? "No file selected" : fileName}
              </p>
            </div>

            <h3 style={subsectionTitleStyle}>Current Encoding Step</h3>
            <div style={infoBoxStyle}>
              <div style={infoRowStyle}>
                <span style={infoLabelStyle}>Legal moves:</span>
                <span style={infoValueStyle}>0</span>
              </div>
              <div style={infoRowStyle}>
                <span style={infoLabelStyle}>Max bits per move:</span>
                <span style={infoValueStyle}>0</span>
              </div>
              <div style={infoRowStyle}>
                <span style={infoLabelStyle}>Bits encoded:</span>
                <span style={infoValueStyle}>0 / 0</span>
              </div>
              <p style={waitingTextStyle}>Waiting to start...</p>
            </div>

            <h3 style={subsectionTitleStyle}>Binary View</h3>
            <div style={binaryBoxStyle}>
              Binary data will appear here
            </div>

            <p style={footnoteStyle}>Highlighted bits are currently being encoded</p>
          </div>
        </div>
      </div>
    </div>
  )
}
