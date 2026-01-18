import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize2, Minimize2 } from 'lucide-react';

export const MusicPlayer = ({ tracks }) => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const iframeRef = useRef(null);
  const isInitialized = useRef(false);

  // Inicializar YouTube Iframe
  useEffect(() => {
    if (!isInitialized.current && tracks.length > 0) {
      // Pequeño delay para asegurar que el DOM esté listo
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = `https://www.youtube.com/embed/${tracks[0].id}?enablejsapi=1&origin=${window.location.origin}&autoplay=0&controls=0&modestbranding=1&rel=0`;
          isInitialized.current = true;
        }
      }, 100);
    }
  }, [tracks]);

  const sendCommand = (func, args = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: func,
        args: args
      }), '*');
    }
  };

  const toggleMusic = (e) => {
    e?.stopPropagation();
    if (musicPlaying) {
      sendCommand('pauseVideo');
    } else {
      sendCommand('playVideo');
    }
    setMusicPlaying(!musicPlaying);
  };

  const changeTrack = (direction) => {
    let newIndex = direction === 'next' 
      ? (currentTrack + 1) % tracks.length 
      : (currentTrack - 1 + tracks.length) % tracks.length;
    
    setCurrentTrack(newIndex);
    setMusicPlaying(true);
    
    // Cargar nuevo video
    setTimeout(() => {
      sendCommand('loadVideoById', [tracks[newIndex].id]);
    }, 100);
  };

  const handleVolumeChange = (e) => {
    const val = parseInt(e.target.value);
    setVolume(val);
    sendCommand('setVolume', [val]);
  };

  // Si no hay tracks, no renderizar nada
  if (!tracks || tracks.length === 0) return null;

  const track = tracks[currentTrack];

  return (
    <div className={`
      fixed bottom-5 right-5 z-[1000] transition-all duration-300 font-cinzel
      ${isExpanded ? 'w-[350px]' : 'w-[300px]'}
    `}>
      {/* Iframe Oculto */}
      <iframe
        ref={iframeRef}
        className="hidden"
        title="Audio Player"
        allow="autoplay"
      />

      <div className="bg-[rgba(10,0,0,0.95)] border-2 border-blood-900 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(139,0,0,0.4)] backdrop-blur-md">
        
        {/* CABECERA (Click para expandir/contraer) */}
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gradient-to-r from-blood-900 to-black p-3 flex justify-between items-center cursor-pointer border-b border-blood-800"
        >
          <div className="flex items-center gap-2">
             {/* Icono animado del header */}
            <img 
              src="/images/logo-music.png" 
              alt="icon" 
              className={`w-6 h-6 filter sepia saturate-200 hue-rotate-[320deg] ${musicPlaying ? 'animate-pulse' : ''}`}
            />
            <span className="text-white font-cinzel font-semibold text-sm tracking-widest">MUSIC PLAYER</span>
          </div>
          <button className="text-gray-400 hover:text-white">
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>

        {/* CONTENIDO EXPANDIDO (Aquí va tu Vinilo) */}
        {isExpanded && (
          <div className="p-5 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]">
            
            {/* --- SECCIÓN DEL VINILO (Tu código integrado) --- */}
            <div className="recordPlayer mb-4">
              {/* El Vinilo: gira si musicPlaying es true */}
              <img 
                className={`vinyl ${!musicPlaying ? 'paused-spin' : ''}`} 
                src="https://beta.vinylify.com/wp-content/uploads/2018/05/vinyl-black.png" 
                alt="Vinyl Record"
              />
              
              {/* La Carátula: Es la imagen de la canción actual */}
              <img 
                className="vinylCover" 
                src={track.image} 
                alt="Album Cover"
              />
            </div>
            {/* ----------------------------------------------- */}

            <div className="text-center mb-4 space-y-1">
              <h3 className="text-white font-bold text-lg truncate drop-shadow-md">{track.title}</h3>
              <p className="text-blood-700 text-sm italic">{track.artist}</p>
            </div>

            {/* Controles Expandidos */}
            <div className="flex justify-center items-center gap-6 mb-4">
              <button onClick={() => changeTrack('prev')} className="text-gray-400 hover:text-white hover:scale-110 transition-transform">
                <SkipBack size={24} />
              </button>
              
              <button 
                onClick={toggleMusic} 
                className="w-12 h-12 rounded-full bg-blood-800 flex items-center justify-center text-white border-2 border-blood-600 hover:bg-blood-700 hover:scale-105 transition-all shadow-[0_0_15px_rgba(139,0,0,0.6)]"
              >
                {musicPlaying ? <Pause size={24} /> : <Play size={24} ml={1} />}
              </button>
              
              <button onClick={() => changeTrack('next')} className="text-gray-400 hover:text-white hover:scale-110 transition-transform">
                <SkipForward size={24} />
              </button>
            </div>

            {/* Volumen */}
            <div className="flex items-center gap-2 px-4">
              <Volume2 size={16} className="text-blood-700" />
              <input 
                type="range" 
                min="0" max="100" 
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-blood-600 [&::-webkit-slider-thumb]:rounded-full"
              />
            </div>
          </div>
        )}

        {/* FOOTER (Vista colapsada / Mini Player) */}
        {!isExpanded && (
          <div className="p-3 flex items-center justify-between bg-black/50">
            <div className="flex items-center gap-3 overflow-hidden">
              <img src={track.image} alt="cover" className="w-10 h-10 rounded border border-blood-900 object-cover" />
              <div className="flex flex-col overflow-hidden">
                <span className="text-white text-xs font-bold truncate w-32">{track.title}</span>
                <span className="text-gray-500 text-[10px] truncate">{track.artist}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button onClick={() => changeTrack('prev')} className="text-gray-400 hover:text-white">
                <SkipBack size={16} />
              </button>
              <button onClick={toggleMusic} className="text-white hover:text-blood-500">
                {musicPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button onClick={() => changeTrack('next')} className="text-gray-400 hover:text-white">
                <SkipForward size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};