import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, ChevronUp, ChevronDown } from 'lucide-react';
import { Heart } from 'lucide-react';
import musicFile from "../music/music.mp3";

const SONG = {
    title: 'Yellow',
    artist: 'Coldplay',
    src: musicFile,
};

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  // Try autoplay on first user interaction with page
  useEffect(() => {
    const tryAutoplay = () => {
      if (!userInteracted && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setPlaying(true);
            setUserInteracted(true);
          })
          .catch(() => {});
        document.removeEventListener('click', tryAutoplay);
        document.removeEventListener('touchstart', tryAutoplay);
        document.removeEventListener('keydown', tryAutoplay);
      }
    };

    // Also try immediate autoplay
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => { setPlaying(true); setUserInteracted(true); })
        .catch(() => { /* autoplay blocked by browser, wait for interaction */ });
    }

    document.addEventListener('click', tryAutoplay);
    document.addEventListener('touchstart', tryAutoplay);
    document.addEventListener('keydown', tryAutoplay);

    return () => {
      document.removeEventListener('click', tryAutoplay);
      document.removeEventListener('touchstart', tryAutoplay);
      document.removeEventListener('keydown', tryAutoplay);
    };
  }, [userInteracted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume;
    }
  }, [volume, muted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
    setUserInteracted(true);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    if (audioRef.current) {
      audioRef.current.currentTime = pct * audioRef.current.duration;
    }
  };

  const formatTime = (s) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${String(sec).padStart(2, '0')}`;
  };

  const currentTime = audioRef.current ? audioRef.current.currentTime : 0;

  return (
    <>
      <audio
        ref={audioRef}
        src={SONG.src}
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6, type: 'spring', damping: 20 }}
        className="fixed bottom-4 left-1/2 z-50"
        style={{ transform: 'translateX(-50%)' }}
      >
        <div
          className="rounded-2xl shadow-2xl border border-rose-100 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 40px rgba(220, 80, 120, 0.25), 0 2px 12px rgba(0,0,0,0.08)',
            minWidth: expanded ? 320 : 'auto',
          }}
        >
          {/* Gradient top bar */}
          <div className="h-0.5 w-full bg-gradient-to-r from-rose-300 via-rose-500 to-purple-400" />

          <div className="px-4 py-3">
            {/* Collapsed view */}
            {!expanded ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-rose-500 hover:bg-rose-600 transition-colors shadow-md shadow-rose-200 flex-shrink-0"
                >
                  {playing
                    ? <Pause className="w-4 h-4 text-white" />
                    : <Play className="w-4 h-4 text-white ml-0.5" />
                  }
                </button>
                <Music className="w-4 h-4 text-rose-400 animate-pulse" />
                <button
                  onClick={() => setExpanded(true)}
                  className="text-rose-300 hover:text-rose-500 transition-colors"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* Expanded view */
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {/* Animated music icon */}
                    <div className="relative">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #f48fb1, #ce93d8)' }}
                      >
                        <Music className="w-5 h-5 text-white" />
                      </div>
                      {playing && (
                        <motion.div
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ repeat: Infinity, duration: 1.2 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-playfair text-sm font-semibold text-rose-900 leading-tight">{SONG.title}</p>
                      <p className="font-inter text-xs text-rose-500">{SONG.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-300" fill="currentColor" />
                    <button
                      onClick={() => setExpanded(false)}
                      className="text-rose-300 hover:text-rose-500 transition-colors ml-1"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div
                  className="w-full h-1.5 bg-rose-100 rounded-full cursor-pointer mb-1 group"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full rounded-full transition-all duration-100 relative"
                    style={{
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #f48fb1, #e91e63)',
                    }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-rose-500 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between text-rose-400 font-inter mb-3" style={{ fontSize: 10 }}>
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-rose-500 hover:bg-rose-600 active:scale-95 transition-all shadow-md shadow-rose-200 flex-shrink-0"
                  >
                    {playing
                      ? <Pause className="w-4 h-4 text-white" />
                      : <Play className="w-4 h-4 text-white ml-0.5" />
                    }
                  </button>

                  {/* Volume */}
                  <button
                    onClick={() => setMuted(m => !m)}
                    className="text-rose-400 hover:text-rose-600 transition-colors flex-shrink-0"
                  >
                    {muted || volume === 0
                      ? <VolumeX className="w-4 h-4" />
                      : <Volume2 className="w-4 h-4" />
                    }
                  </button>

                  <div className="flex-1 relative group">
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={muted ? 0 : volume}
                      onChange={(e) => {
                        setVolume(parseFloat(e.target.value));
                        setMuted(false);
                      }}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #f48fb1 ${(muted ? 0 : volume) * 100}%, #fce4ec ${(muted ? 0 : volume) * 100}%)`,
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Auto-play hint */}
                {!playing && !userInteracted && (
                  <p className="text-center font-inter text-rose-400 mt-2" style={{ fontSize: 10 }}>
                    Clique em qualquer lugar para tocar ♫
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Input range style */}
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e91e63;
          cursor: pointer;
          box-shadow: 0 0 4px rgba(233, 30, 99, 0.4);
        }
        input[type='range']::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e91e63;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 4px rgba(233, 30, 99, 0.4);
        }
      `}</style>
    </>
  );
}