import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";

import fotoSertao from "../../img/fotoSertao.jpeg";

import fotoJuntos1 from "../../img/fotoJuntos1.jpeg";

import juntosBarra from "../../img/juntosBarra.jpeg";

import fotoRodizio3 from "../../img/fotoRodizio3.jpeg";
import fotoRodizio4 from "../../img/fotoRodizio4.jpeg";

import maravilhosaaa from "../../img/maravilhosaaa.jpeg";
import maravilhosaaa3 from "../../img/maravilhosaaa3.jpeg";
import maravilhosaaa2 from "../../img/maravilhosaaa2.jpeg";

import fotoComAlice from "../../img/fotoComAlice.jpeg";
import fotoComAlice2 from "../../img/fotoComAlice2.jpeg";

import fotoGpt1 from "../../img/fotoGpt1.jpeg";
import fotoGpt2 from "../../img/fotoGpt2.jpeg";
import fotoGpt3 from "../../img/fotoGpt3.jpeg";

import fotoJulie1 from "../../img/fotoJulie1.jpeg";
import fotoJufotoPraiaJulielie1 from "../../img/fotoPraiaJulie.jpeg";

import fotoBus from "../../img/fotoBus.jpeg";

//import fotoSertao from "../../img/fotoSertao.jpeg";
//import fotoSertao from "../../img/fotoSertao.jpeg";

const photos = [
  //{ src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop', caption: 'Nosso amor é lindo' },
  { src: fotoJuntos1, caption: "Nosso amor é lindo" },
  {
    src: fotoSertao,
    caption: "Momentos especiais",
    position: "10% 35%",
    vertical: true,
  },
  {
    src: juntosBarra,
    caption: "Juntos é melhor",
  },
  {
    src: fotoRodizio3,
    caption: "Para sempre nós dois",
  },
  {
    src: maravilhosaaa2,
    caption: "Te amo infinitamente",
  },
  {
    src: fotoJufotoPraiaJulielie1,
    caption: "Nosso mundo",
  },

  {
    src: fotoComAlice,
    caption: "Nosso mundo",
  },

  {
    src: fotoComAlice2,
    //caption: "Te amo infinitamente",
  },

  {
    src: fotoJulie1,
    //caption: "Te amo infinitamente",
  },

  {
    src: fotoRodizio4,
    //caption: "Te amo infinitamente",
  },

  {
    src: fotoGpt3,
    //caption: "Te amo infinitamente",
  },

  {
    src: fotoGpt2,
    //caption: "Te amo infinitamente",
  },

  {
    src: fotoBus,
    //caption: "Te amo infinitamente",
  },

  {
    src: maravilhosaaa,
    caption: "Maravilhosaa",
  },

  {
    src: fotoGpt1,
    //caption: "Te amo infinitamente",
  },
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section
      className="py-20 px-4 relative"
      //style={{ background: 'linear-gradient(180deg, #fff5f5 0%, #fcfce4 100%)' }}
      style={{
        //background: 'linear-gradient(135deg, #fff5f5 0%, #f8bbd0 40%, #e7ce82 70%, #c0a240 100%)'
        background:
          "linear-gradient(135deg, #fbc2eb 0%, #fcd5ce 40%, #fff3b0 70%, #ffe066 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-dancing text-2xl text-rose-400 block mb-2">
            memórias
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-rose-900 mb-4">
            Nossos Momentos
          </h2>
          <div className="w-20 h-0.5 bg-rose-300 mx-auto" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group cursor-pointer relative overflow-hidden rounded-2xl shadow-md shadow-rose-200/40 ${
                index % 3 === 1 ? "row-span-1 md:row-span-1" : ""
              }`}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full min-h-[180px] sm:min-h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-white" fill="currentColor" />
                  <span className="text-white text-sm font-inter font-medium">
                    {photo.caption}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="w-full rounded-2xl shadow-2xl"
              />
              <p className="text-center text-white/90 font-dancing text-xl mt-4">
                {selectedPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
