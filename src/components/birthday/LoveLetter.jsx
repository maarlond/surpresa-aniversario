import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoveLetter() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative petals */}
      <div className="absolute top-10 right-10 text-rose-200 text-6xl opacity-30 rotate-12">
        ❤
      </div>
      <div className="absolute bottom-10 left-10 text-rose-200 text-4xl opacity-20 -rotate-12">
        ❤
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-dancing text-2xl text-rose-400 block mb-2">
            do fundo do coração
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-rose-900 mb-4">
            Um textinho clichê
          </h2>
          <div className="w-20 h-0.5 bg-rose-300 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Letter container */}
          <div className="bg-gradient-to-br from-rose-50 to-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-rose-100/50 border border-rose-100 relative overflow-hidden">
            {/* Stamp decoration */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-lg border-2 border-dashed border-rose-200 flex items-center justify-center rotate-6">
              <Heart className="w-6 h-6 text-rose-400" fill="currentColor" />
            </div>

            <p className="font-dancing text-2xl text-rose-500 mb-6">
              Meu amor,
            </p>

            <div className="font-inter text-rose-800/80 leading-loose text-base sm:text-lg space-y-6">
              <p>
                Desde que você entrou na minha vida, tudo ficou mais bonito. As
                cores ficaram mais vibrantes, os dias mais alegres e cada
                momento ganhou um significado especial.
              </p>
              <p>
                Seu sorriso ilumina meus dias e seu carinho faz tudo valer a
                pena. Quando estou ao seu lado, sinto que posso enfrentar
                qualquer coisa, porque tenho o maior tesouro do mundo comigo.
              </p>
              <p>
                Hoje é seu dia, mas quem ganha o presente sou eu — por ter você
                comigo. Cada segundo ao seu lado é uma bênção que agradeço todos
                os dias.
              </p>
              <p>
                Que esse novo ano da sua vida seja repleto de realizações,
                alegrias e muito amor. Estarei sempre aqui, ao seu lado, te
                amando mais a cada dia.
              </p>
            </div>

            <div className="mt-8 text-right">
              <p className="font-dancing text-2xl text-rose-600">
                Com todo meu amor,
              </p>
              <p className="font-dancing text-3xl text-rose-700 mt-2">
                Seu amor ❤️
              </p>
            </div>

            {/* Decorative line at bottom */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-rose-200" />
              <Heart className="w-4 h-4 text-rose-300" fill="currentColor" />
              <div className="h-px w-16 bg-rose-200" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
