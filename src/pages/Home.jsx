import React, { useRef, useState, useEffect } from "react";
import StarsBackground from "../components/birthday/StarsBackground";
import FloatingHearts from '../components/birthday/FloatingHearts';
import HeroSection from '../components/birthday/HeroSection';
import OurStory from '../components/birthday/OurStory';
import PhotoGallery from '../components/birthday/PhotoGallery';
import LoveLetter from '../components/birthday/LoveLetter';
import TimeCounter from '../components/birthday/TimeCounter';
import FinalSurprise from '../components/birthday/FinalSurprise';
import MusicPlayer from '../components/birthday/MusicPlayer';

export default function Home() {
  const contentRef = useRef(null);
  const [showMusic, setShowMusic] = useState(false);

  // Garantir scroll no topo mesmo ao F5
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50); // 50ms é suficiente para o DOM renderizar
    return () => clearTimeout(timer);
  }, []);

  const handleOpenSurprise = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowMusic(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <StarsBackground />
      <FloatingHearts />
      <HeroSection onOpenSurprise={handleOpenSurprise} />
      <div ref={contentRef}>
        <OurStory />
      </div>
      <PhotoGallery />
      <LoveLetter />
      <TimeCounter />
      <FinalSurprise />
      {showMusic && <MusicPlayer />}
    </div>
  );
}