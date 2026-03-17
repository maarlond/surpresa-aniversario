import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ onOpenSurprise }) {
  // 🔒 Bloqueia o scroll ao entrar
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = () => {
    // 🔓 Libera scroll
    document.body.style.overflow = "auto";

    // 👉 chama sua função original
    onOpenSurprise();

    // ⬇️ scroll suave automático (opcional mas top)
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{
        background:
          "linear-gradient(135deg, #fbc2eb 0%, #fcd5ce 40%, #fff3b0 70%, #ffe066 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl" />
      <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-rose-300/20 blur-2xl" />
      <div className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-purple-300/20 blur-xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 max-w-2xl"
      >
        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-5 py-2 rounded-full mb-8"
        >
          <Heart className="w-4 h-4 text-rose-600" fill="currentColor" />
          <span className="text-rose-800 font-inter text-sm font-medium tracking-wide">
            22 de Março
          </span>
          <Heart className="w-4 h-4 text-rose-600" fill="currentColor" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold text-rose-900 leading-tight mb-6"
        >
          Feliz Aniversário,
          <br />
          <span className="font-dancing text-5xl sm:text-6xl md:text-8xl text-rose-700">
            Meu Amor
          </span>
          <span className="text-rose-500"> ❤️</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-inter text-base sm:text-lg text-rose-800/80 max-w-md mx-auto mb-10 leading-relaxed font-light"
        >
          Bom, não costumamos tirar muitas fotos, mas criei um pequeno presente
          com o que temos, para a pessoa mais especial da minha vida
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <Button
            onClick={handleClick}
            className="pulse-glow bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 rounded-full text-lg font-inter font-medium shadow-lg shadow-rose-300/50 transition-all duration-300 hover:scale-105"
          >
            <Heart className="w-5 h-5 mr-2" fill="currentColor" />
            Abrir minha surpresa
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-rose-700/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
