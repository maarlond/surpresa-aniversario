import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Gift } from "lucide-react";
import fotoGpt3 from "../../img/fotoGpt3.jpeg";
import fotoSertao2 from "../../img/fotoSertao2.jpeg";
import maravilhosaaa4 from "../../img/maravilhosaaa4.png";
import fotoPraia1 from "../../img/fotoPraia1.jpeg";
import fotoRodizio1 from "../../img/fotoRodizio1.jpeg";

const moments = [
  {
    icon: Sparkles,
    title: "O dia que nos conhecemos",
    description:
      "Desde que te conheci, tudo ficou mais bonito… como estrelas brilhando em amarelo só pra gente.",
    image: fotoSertao2,
    position: "50% 70%",
  },
  {
    icon: Heart,
    title: "A música que me faz lembrar de ti",
    description:
      "Se as estrelas brilham em amarelo, é porque tentam chegar perto da luz que você tem.",
    image: maravilhosaaa4,
  },
  {
    icon: Star,
    title: "Momentos juntos",
    description:
      "Cada momento ao seu lado é uma memória que guardo com todo carinho.",
    image: fotoPraia1,
    position: "50% 70%",
  },
  {
    icon: Gift,
    title: "Hoje e sempre",
    description:
      "Nosso amor cresce a cada dia. Você é meu presente, minha alegria, meu tudo.",
    image: fotoRodizio1,
  },
];

export default function OurStory() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-dancing text-2xl text-rose-400 block mb-2">
            para sempre
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-rose-900 mb-4">
            Nossa História
          </h2>
          <div className="w-20 h-0.5 bg-rose-300 mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-200 via-rose-400 to-rose-200 transform -translate-x-1/2" />

          {moments.map((moment, index) => {
            const Icon = moment.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-6 mb-16 last:mb-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Texto */}
                <div
                  className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}
                >
                  <div
                    className={`bg-rose-50/80 rounded-2xl p-6 shadow-sm border border-rose-100 ${isEven ? "md:mr-8" : "md:ml-8"}`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-3 ${isEven ? "md:justify-end" : ""}`}
                    >
                      <Icon className="w-5 h-5 text-rose-500" />
                      <h3 className="font-playfair text-xl font-semibold text-rose-900">
                        {moment.title}
                      </h3>
                    </div>
                    <p className="font-inter text-rose-700/80 leading-relaxed text-sm">
                      {moment.description}
                    </p>
                  </div>
                </div>

                {/* Bolinha */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-rose-500 shadow-lg shadow-rose-300/50 z-10 flex-shrink-0">
                  <Heart className="w-4 h-4 text-white" fill="currentColor" />
                </div>

                {/* Imagem */}
                <div className="flex-1">
                  <div className={`${isEven ? "md:ml-8" : "md:mr-8"}`}>
                    <div className="overflow-hidden rounded-2xl shadow-lg shadow-rose-200/50 border-2 border-white aspect-[4/3]">
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
