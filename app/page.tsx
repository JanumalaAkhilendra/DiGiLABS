'use client';

import { Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNotification = async () => {
    setIsAnimating(true);
    
    if (!('Notification' in window)) {
      alert('This browser does not support notifications');
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      
      if (permission === 'granted') {
        new Notification('Hello!', {
          body: 'This is a test notification',
          icon: '/icons/icon-192x192.png'
        });
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }

    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <main className="min-h-screen bg-[#1a1625] text-white p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-20">
          <h1 className="text-2xl font-semibold">Hola Janumala!</h1>
          
        </div>

        {/* Notification Button Area */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div
            className="relative flex justify-center items-center" 
            animate={isAnimating ? {
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            } : {}}
            transition={{ duration: 1 }}
          >
            <div className="w-32 h-32 rounded-full bg-[#2a2435] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="w-48 h-48 rounded-full bg-[#2a2435] opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="w-64 h-64 rounded-full bg-[#2a2435] opacity-25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <motion.div
              className="relative z-10 w-20 h-20 flex items-center justify-center h-52"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-12 h-12 text-purple-400" />
            </motion.div>
          </motion.div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Janumala Akhilendra </h2>
            <p className="text-gray-400">Notifications....</p>
          </div>

          <button
            onClick={handleNotification}
            className="w-full py-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold"
          >
            Send Notification
          </button>
        </div>
      </div>
    </main>
  );
}