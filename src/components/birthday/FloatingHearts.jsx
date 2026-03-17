import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function FloatingHearts() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const createHeart = () => {
            const id = Date.now() + Math.random();
            const left = Math.random() * 100;
            const size = Math.random() * 20 + 12;
            const duration = Math.random() * 8 + 6;
            const delay = Math.random() * 3;

            setHearts(prev => [...prev, { id, left, size, duration, delay }]);

            setTimeout(() => {
                setHearts(prev => prev.filter(h => h.id !== id));
            }, (duration + delay) * 1000);
        };

        const interval = setInterval(createHeart, 1500);
        // Create initial batch
        for (let i = 0; i < 6; i++) {
            setTimeout(createHeart, i * 400);
        }

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {hearts.map(heart => (
                <div
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: `${heart.left}%`,
                        animationDuration: `${heart.duration}s`,
                        animationDelay: `${heart.delay}s`,
                    }}
                >
                    <Heart
                        style={{ width: heart.size, height: heart.size }}
                        fill="currentColor"
                    />
                </div>
            ))}
        </>
    );
}