import { useEffect, useState } from "react";
import { Shield, Lock, Unlock, Upload, ChevronDown, ChevronUp } from "lucide-react";

export default function ChessCryptFileTool() {
  const [action, setAction] = useState("encode");
  const [fileType, setFileType] = useState("");
  const [file, setFile] = useState(null);
  const [showMetadata, setShowMetadata] = useState(false);
  const [enableSelfDestruct, setEnableSelfDestruct] = useState(false);
  const [duration, setDuration] = useState({ hours: 0, minutes: 10, seconds: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("action", action);
    formData.append("file_type", fileType);


  
    
    if (action === "encode" && enableSelfDestruct) {
      const totalSeconds =
        duration.hours * 3600 + duration.minutes * 60 + duration.seconds;
      formData.append("self_destruct_timer", totalSeconds);
      formData.append("use_hidden_expiry", "true");
    }

    const url = action === "encode" ? "http://127.0.0.1:8000/encode" : "http://127.0.0.1:8000/decode";

    for(const[key , value] of formData.entries()){
      console.log("key:"+key+"--"+"Value"+value);
    }

    const res = await fetch(url, { method: "POST", body: formData });
    if (!res.ok) return alert("Error processing file");

    const blob = await res.blob();
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = action === "encode" ? "encrypted_file.pgn" :
                       fileType === "text" ? "decrypted_file.txt" : "decrypted_file.png";
            document.body.appendChild(a);
            a.click();
            a.remove();
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-slate-900 to-black text-white flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
  {/* Subtle chessboard pattern background */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0 bg-[linear-gradient(45deg,#b58863_25%,transparent_25%),linear-gradient(-45deg,#b58863_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f0d9b5_75%),linear-gradient(-45deg,transparent_75%,#f0d9b5_75%)] bg-[size:4rem_4rem] animate-pulse"></div>
  </div>
  
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md lg:max-w-3xl bg-zinc-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-700/50 lg:border-zinc-600/50 p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 relative z-10"
  >
    {/* Header */}
    <div className="text-center mb-2 sm:mb-4">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent flex items-center justify-center gap-3 mx-auto max-w-fit">
        <Shield className="w-8 h-8 sm:w-10 sm:h-10" />
        Chess Crypt Tool
      </h1>
      <p className="text-zinc-400 text-sm sm:text-base mt-1">Secure your files with chess-inspired encryption</p>
    </div>

    {/* Action Selection */}
    <section>
      <h2 className="mb-4 sm:mb-6 font-semibold text-zinc-300 text-lg sm:text-xl text-center sm:text-left">Choose Operation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <RadioCard
          label="Encrypt"
          icon={<Lock className="w-5 h-5 sm:w-6 sm:h-6" />}
          checked={action === "encode"}
          onClick={() => setAction("encode")}
          className="hover:shadow-emerald-500/25 hover:border-emerald-500/50 transition-all duration-300"
        />
        <RadioCard
          label="Decrypt"
          icon={<Unlock className="w-5 h-5 sm:w-6 sm:h-6" />}
          checked={action === "decode"}
          onClick={() => setAction("decode")}
          className="hover:shadow-blue-500/25 hover:border-blue-500/50 transition-all duration-300"
        />
      </div>
    </section>

    {/* File Type */}
    <section>
      <h2 className="mb-4 sm:mb-6 font-semibold text-zinc-300 text-lg sm:text-xl text-center sm:text-left">File Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <RadioCard 
          label="Text" 
          checked={fileType === "text"} 
          onClick={() => setFileType("text")}
          icon="📄"
          className="hover:shadow-amber-500/25 hover:border-amber-500/50"
        />
        <RadioCard 
          label="Image" 
          checked={fileType === "image"} 
          onClick={() => setFileType("image")}
          icon="🖼️"
          className="hover:shadow-purple-500/25 hover:border-purple-500/50"
        />
      </div>
    </section>

    {/* Self Destruct */}
    {action === "encode" && (
      <section className="space-y-3 sm:space-y-4 p-4 sm:p-5 bg-zinc-900/50 rounded-2xl border border-zinc-700/50">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={enableSelfDestruct}
              onChange={(e) => setEnableSelfDestruct(e.target.checked)}
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-zinc-700 border-2 border-zinc-600 text-emerald-500 focus:ring-emerald-500 focus:ring-2 transition-all duration-200 peer"
            />
            <div className="absolute inset-0 rounded-lg bg-emerald-500 opacity-0 peer-checked:opacity-100 transition-opacity scale-90 peer-checked:scale-100"></div>
          </div>
          <span className="text-sm sm:text-base font-medium text-zinc-300 group-hover:text-emerald-400 transition-colors">Enable Self-Destruct Timer</span>
        </label>

        {enableSelfDestruct && (
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
            {Object.keys(duration).map((key) => (
              <div key={key} className="relative">
                <input
                  type="number"
                  className="w-full bg-zinc-900/50 p-3 sm:p-4 rounded-xl border border-zinc-600/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 text-sm sm:text-base placeholder-zinc-500 transition-all duration-200 hover:border-zinc-500/70 shadow-sm"
                  value={duration[key]}
                  onChange={(e) => setDuration({ ...duration, [key]: Number(e.target.value) })}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  min="0"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 font-mono">{key}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    )}

    {/* PGN Metadata */}
    {action === "encode" && (
      <section className="space-y-3">
        <button
          type="button"
          onClick={() => setShowMetadata(!showMetadata)}
          className="flex items-center gap-2 w-full justify-between text-left p-4 bg-zinc-900/50 hover:bg-zinc-900 rounded-xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-200 group"
        >
          <span className="font-medium text-zinc-300 group-hover:text-white">PGN Metadata</span>
          {showMetadata ? <ChevronUp className="w-5 h-5 transition-transform group-hover:scale-110" /> : <ChevronDown className="w-5 h-5 transition-transform group-hover:scale-110" />}
        </button>
        {showMetadata && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-5 bg-zinc-900/30 rounded-2xl border border-zinc-700/30 animate-in slide-in-from-top-2 duration-300">
            <input className="input bg-zinc-900/50 p-4 rounded-xl border border-zinc-600/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 placeholder-zinc-500 text-sm sm:text-base transition-all" placeholder="Event" />
            <input className="input bg-zinc-900/50 p-4 rounded-xl border border-zinc-600/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 placeholder-zinc-500 text-sm sm:text-base transition-all" placeholder="Site" />
            <input className="input bg-zinc-900/50 p-4 rounded-xl border border-zinc-600/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 placeholder-zinc-500 text-sm sm:text-base transition-all" placeholder="White Player" />
            <input className="input bg-zinc-900/50 p-4 rounded-xl border border-zinc-600/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 placeholder-zinc-500 text-sm sm:text-base transition-all" placeholder="Black Player" />
          </div>
        )}
      </section>
    )}

    {/* Enhanced File Upload */}
    <label className="group cursor-pointer transition-all duration-300">
      <div className="border-2 border-dashed border-zinc-600/60 rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col items-center text-center hover:border-emerald-500/60 hover:bg-emerald-500/5 hover:shadow-2xl hover:shadow-emerald-500/20 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/30 bg-zinc-900/30 backdrop-blur-sm">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Upload className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <span className="text-lg sm:text-xl font-semibold text-zinc-300 mb-2 group-hover:text-emerald-400 transition-colors">{file ? file.name : "Click or drag to upload file"}</span>
        {file ? (
          <span className="text-sm text-emerald-400 font-medium">✅ File selected</span>
        ) : (
          <span className="text-zinc-500 text-sm sm:text-base">Supports text & images up to 50MB</span>
        )}
      </div>
      <input type="file" hidden onChange={(e) => setFile(e.target.files?.[0] || null)} className="sr-only" accept={fileType === "image" ? "image/*" : "text/*,.pgn"} />
    </label>

    {/* CTA Button */}
    <button 
      type="submit" 
      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 active:scale-[0.98] rounded-2xl py-4 sm:py-5 px-8 font-bold text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 ring-2 ring-emerald-500/30 hover:ring-emerald-400/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
      disabled={!file}
    >
      {action === "encode" ? "🔒 Encrypt File" : "🔓 Decrypt File"}
    </button>
  </form>
</div>

  );
}

function RadioCard({ label, icon, checked, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl border cursor-pointer flex items-center gap-3 justify-center transition ${
        checked ? "border-emerald-500 bg-emerald-500/10" : "border-zinc-600"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
