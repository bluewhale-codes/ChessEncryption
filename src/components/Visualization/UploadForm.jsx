"use client"

import { useState, useRef } from "react"

export default function UploadForm() {
  const [fileName, setFileName] = useState("No file chosen")
  const [fileType, setFileType] = useState("text")
  const [processingSpeed, setProcessingSpeed] = useState(300)
  const [progress, setProgress] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const fileInputRef = useRef(null)
  const intervalRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    setFileName(file ? file.name : "No file chosen")
  }

  const handleChooseFile = () => {
    fileInputRef.current?.click()
  }

  const handleStartVisualization = () => {
    if (isRunning) return
    setIsRunning(true)
    setProgress(0)

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current)
          setIsRunning(false)
          return 100
        }
        return prev + 1
      })
    }, processingSpeed / 10)
  }

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setFileName("No file chosen")
    setFileType("text")
    setProcessingSpeed(300)
    setProgress(0)
    setIsRunning(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 ">
      <div className="w-full max-w-xl">
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden">
          {/* Header */}
          <h2 className="text-xl text-white font-semibold text-foreground mb-6">
            Upload File for Encryption Preview
          </h2>

          {/* File Input Row */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* File Selector */}
            <div className="flex-1">
              <label className="block text-white text-sm font-medium text-muted-foreground mb-2">
                Select file to encrypt:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept={fileType === "text" ? ".txt,.json,.csv" : "image/*"}
                  className="hidden"
                />
                <button
                  onClick={handleChooseFile}
                  className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
                >
                  Choose File
                </button>
                <span className="text-sm  text-white text-muted-foreground truncate max-w-[180px]">
                  {fileName}
                </span>
              </div>
            </div>

            {/* File Type Selector */}
            <div className="sm:w-40">
              <label className="block text-white text-sm font-medium text-muted-foreground mb-2">
                File type:
              </label>
              <select
                value={fileType}
                onChange={(e) => setFileType(e.target.value)}
                className="w-full px-3 py-2 text-white bg-secondary text-foreground border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
              >
                <option className="text-black" value="text">Text</option>
                <option className="text-black" value="image">Image</option>
              </select>
            </div>
          </div>

          {/* Processing Speed Slider */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-white font-medium text-muted-foreground">
                Processing Speed:
              </label>
              <span className="text-sm  font-medium text-cyan-500">
                {processingSpeed}ms
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={processingSpeed}
              onChange={(e) => setProcessingSpeed(Number(e.target.value))}
              className="w-full text-white h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-pink-500"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Fast (100ms)</span>
              <span>Slow (1000ms)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleStartVisualization}
              disabled={isRunning}
              className="flex-1 px-4 py-2.5 bg-pink-600 hover:bg-pink-700 disabled:bg-pink-800 disabled:cursor-not-allowed text-white font-medium rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/20"
            >
              {isRunning ? "Running..." : "Start Visualization"}
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-secondary hover:bg-accent text-foreground font-medium rounded-md border border-border transition-all duration-200"
            >
              Reset
            </button>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Progress
              </span>
              <span className="text-sm font-medium text-foreground">
                {progress}%
              </span>
            </div>
            <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              {progress === 0 && "Ready to start"}
              {progress > 0 && progress < 100 && "Processing..."}
              {progress === 100 && "Complete!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
