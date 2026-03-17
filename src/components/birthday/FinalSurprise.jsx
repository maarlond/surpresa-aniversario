import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalSurprise() {
    const [showSurprise, setShowSurprise] = useState(false);
    const [burstHearts, setBurstHearts] = useState([]);

    const triggerHeartBurst = useCallback(() => {
        const hearts = [];
        for (let i = 0; i < 50; i++) {
            hearts.push({
                id: Date.now() + i,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 30 + 15,
                dx: (Math.random() - 0.5) * 400,
                dy: -(Math.random() * 300 + 100),
                rotation: Math.random() * 360,
                delay: Math.random() * 0.5,
            });
        }
        setBurstHearts(hearts);
        setShowSurprise(true);

        setTimeout(() => {
            setBurstHearts([]);
        }, 3000);
    }, []);

    return (
        <section className="py-20 px-4 relative overflow-hidden"
            style={{ 
                background: 'linear-gradient(135deg, #f48fb1 0%, #ce93d8 50%, #ded67a 100%)' 
            }}
        >
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Gift className="w-12 h-12 text-white/80 mx-auto mb-6" />
                    <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Uma Última Surpresa
                    </h2>
                    <p className="font-inter text-white/80 mb-10 text-lg">
                        Preparei algo especial para você...
                    </p>

                    <AnimatePresence mode="wait">
                        {!showSurprise ? (
                            <motion.div
                                key="button"
                                exit={{ opacity: 0, scale: 0.8 }}
                            >
                                <Button
                                    onClick={triggerHeartBurst}
                                    className="bg-white text-rose-600 hover:bg-white/90 px-10 py-7 rounded-full text-xl font-inter font-semibold shadow-2xl shadow-rose-900/30 transition-all duration-300 hover:scale-105"
                                >
                                    <Heart className="w-6 h-6 mr-3" fill="currentColor" />
                                    Clique para uma surpresa
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="message"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                                className="space-y-6"
                            >
                                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-10 sm:p-14 border border-white/30">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="text-6xl sm:text-8xl mb-6"
                                    >
                                        ❤️
                                    </motion.div>
                                    <h3 className="font-dancing text-4xl sm:text-6xl text-white font-bold mb-4">
                                        Eu te amo muitooo!
                                    </h3>
                                    <p className="font-playfair text-xl sm:text-2xl text-white/90 italic">
                                        Feliz Aniversário, meu amor!
                                    </p>
                                    <p className="font-inter text-white/70 mt-4 text-sm">
                                        Que todos os seus sonhos se realizem ✨
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Heart burst overlay */}
            {burstHearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{
                        x: window.innerWidth / 2,
                        y: window.innerHeight / 2,
                        scale: 0,
                        opacity: 1,
                        rotate: 0,
                    }}
                    animate={{
                        x: heart.x,
                        y: heart.y,
                        scale: 1,
                        opacity: 0,
                        rotate: heart.rotation,
                    }}
                    transition={{
                        duration: 2,
                        delay: heart.delay,
                        ease: 'easeOut',
                    }}
                    className="fixed pointer-events-none z-50"
                    style={{ fontSize: heart.size }}
                >
                    ❤️
                </motion.div>
            ))}

            {/* Footer */}
            <div className="text-center mt-16 relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-12 bg-white/30" />
                    <Heart className="w-4 h-4 text-white/50" fill="currentColor" />
                    <div className="h-px w-12 bg-white/30" />
                </div>
                <p className="font-inter text-white/50 text-sm">
                    Feito com ❤️ para a pessoa mais especial do mundo
                </p>
            </div>
        </section>
    );
}