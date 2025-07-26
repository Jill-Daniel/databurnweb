// === BackgroundEffects.js ===
import React from 'react';
import { motion } from 'framer-motion';


const stars = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 3 + 1}px`,
}));

const BackgroundEffects = () => {
  return (
    <div className="background-wrapper">
      {/* Stars */}
      <div className="stars-layer">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="star"
            style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Clouds */}
      <div className="cloud cloud1" />
      <div className="cloud cloud2" />
      <div className="cloud cloud3" />

      {/* Animated Glow */}
      <div className="glow-gradient" />
    </div>
  );
};

export default BackgroundEffects;
