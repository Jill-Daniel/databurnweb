import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logo from '../images/school-logo.png'; 

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-indigo-900 flex flex-col items-center justify-center text-white px-4">
      <motion.img
        src={logo}
        alt="Databurn Logo"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-32 h-32 mb-4 rounded-full shadow-lg"
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Welcome to Databurn Computer School
      </motion.h1>

      <motion.p
        className="text-lg mt-4 max-w-xl text-center text-blue-100"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Discover excellence in computer education, from coding to design to data.
      </motion.p>

      <motion.button
        onClick={() => navigate('/studentportal')}
        className="mt-8 bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-200 transition"
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
      >
        Enter Student Portal
      </motion.button>
    </div>
  );
};

export default Landing;
