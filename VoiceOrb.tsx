import { Mic } from 'lucide-react';
import { useState, useEffect } from 'react';

export function VoiceOrb() {
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Simulate listening animation
    const interval = setInterval(() => {
      setIsListening(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow rings */}
      <div 
        className={`absolute w-48 h-48 rounded-full transition-all duration-1000 ${
          isListening ? 'bg-[#F4A261] opacity-20 scale-110' : 'bg-[#F4A261] opacity-10 scale-100'
        }`}
      ></div>
      <div 
        className={`absolute w-40 h-40 rounded-full transition-all duration-700 ${
          isListening ? 'bg-[#F4A261] opacity-30 scale-105' : 'bg-[#F4A261] opacity-20 scale-100'
        }`}
      ></div>
      
      {/* Main orb */}
      <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br from-[#F4A261] to-[#E8934A] shadow-2xl flex items-center justify-center transition-transform duration-500 ${
        isListening ? 'scale-105' : 'scale-100'
      }`}>
        {/* Inner glow */}
        <div className="absolute inset-4 rounded-full bg-white opacity-20"></div>
        
        {/* Microphone Icon */}
        <Mic className="w-14 h-14 text-white relative z-10" strokeWidth={2.5} />
        
        {/* Pulse effect */}
        {isListening && (
          <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></div>
        )}
      </div>

      {/* Sound waves */}
      {isListening && (
        <>
          <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 flex gap-1">
            <div className="w-1 bg-[#F4A261] rounded-full animate-pulse" style={{ height: '20px' }}></div>
            <div className="w-1 bg-[#F4A261] rounded-full animate-pulse" style={{ height: '32px', animationDelay: '0.1s' }}></div>
            <div className="w-1 bg-[#F4A261] rounded-full animate-pulse" style={{ height: '24px', animationDelay: '0.2s' }}></div>
          </div>
          <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 flex gap-1">
            <div className="w-1 bg-[#F4A261] rounded-full animate-pulse" style={{ height: '24px' }}></div>
            <div className="w-1 bg-[#F4A261] rounded-full animate-pulse" style={{ height: '32px', animationDelay: '0.1s' }}></div>
            <div className="w-1 bg-[#F4A261] rounded-full animate-pulse" style={{ height: '20px', animationDelay: '0.2s' }}></div>
          </div>
        </>
      )}
    </div>
  );
}
