import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock } from 'lucide-react';

export default function TimeCounter() {
    const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Set your relationship start date here
        const startDate = new Date('2023-12-30T00:00:00');

        const update = () => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setElapsed({ days, hours, minutes, seconds });
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    const timeBlocks = [
        { value: elapsed.days, label: 'Dias' },
        { value: elapsed.hours, label: 'Horas' },
        { value: elapsed.minutes, label: 'Minutos' },
        { value: elapsed.seconds, label: 'Segundos' },
    ];

    return (
        <section className="py-20 px-4 relative overflow-hidden"
            style={{
                //background: 'linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #fce4ec 100%)' 
                background: 'linear-gradient(135deg, #fbc2eb 0%, #fcd5ce 40%, #fff3b0 70%, #ffe066 100%)'
            }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Clock className="w-5 h-5 text-rose-500" />
                        <span className="font-dancing text-2xl text-rose-400">nosso tempo juntos</span>
                    </div>
                    <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-rose-900 mb-4">
                        Cada Segundo ao Seu Lado
                    </h2>
                    <p className="font-inter text-rose-700/70 mb-12 max-w-md mx-auto">
                        E cada um deles é precioso demais
                    </p>
                    <div className="w-20 h-0.5 bg-rose-300 mx-auto mb-12" />
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {timeBlocks.map((block, index) => (
                        <motion.div
                            key={block.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg shadow-rose-200/30 border border-rose-100">
                                <Heart className="w-4 h-4 text-rose-300 mx-auto mb-3" fill="currentColor" />
                                <div className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-rose-700 mb-2">
                                    {String(block.value).padStart(2, '0')}
                                </div>
                                <div className="font-inter text-sm text-rose-500 font-medium tracking-wider uppercase">
                                    {block.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 font-dancing text-xl text-rose-600"
                >
                    ...e contando ❤️
                </motion.p>
            </div>
        </section>
    );
}