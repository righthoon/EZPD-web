import { ArrowLeft, Mic, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MonitoringScreenProps {
  onNavigate: (screen: string) => void;
  onShowAlert: () => void;
}

export function MonitoringScreen({ onNavigate, onShowAlert }: MonitoringScreenProps) {
  const [timeRemaining, setTimeRemaining] = useState(12 * 60 + 30); // 12:30 in seconds
  const [volume, setVolume] = useState('');
  const [selectedDrainage, setSelectedDrainage] = useState<'normal' | 'cloudy' | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = ((12 * 60 + 30 - timeRemaining) / (12 * 60 + 30)) * 100;

  const handleDrainageSelect = (type: 'normal' | 'cloudy') => {
    setSelectedDrainage(type);
    if (type === 'cloudy') {
      // Show emergency alert for cloudy drainage
      setTimeout(() => {
        onShowAlert();
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      {/* Header */}
      <div className="bg-white px-5 pt-6 pb-4 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => onNavigate('home')}
            className="p-3 bg-[#F5F1E8] rounded-2xl"
          >
            <ArrowLeft className="w-6 h-6 text-[#2C2C2C]" strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <h1 style={{ fontSize: '1.556rem', fontWeight: 700, color: '#2C2C2C' }}>
              투석 진행 중
            </h1>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-2">
            <span style={{ fontSize: '1.111rem', fontWeight: 600, color: '#A3C4D9' }}>
              배액 중...
            </span>
            <span style={{ fontSize: '1rem', color: '#8B8680' }}>
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div className="bg-[#F5F1E8] rounded-full h-3 overflow-hidden">
            <div 
              className="bg-[#A3C4D9] h-full rounded-full transition-all duration-1000"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-start px-6 py-8">
        {/* Timer Circle */}
        <div className="mb-10">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Outer circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="110"
                fill="none"
                stroke="#E8E4D8"
                strokeWidth="12"
              />
              <circle
                cx="128"
                cy="128"
                r="110"
                fill="none"
                stroke="#A3C4D9"
                strokeWidth="12"
                strokeDasharray={691.15} // 2 * PI * 110
                strokeDashoffset={691.15 * (1 - progressPercent / 100)}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            
            {/* Time Display */}
            <div className="text-center">
              <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#2C2C2C' }}>
                {formatTime(timeRemaining)}
              </div>
              <div style={{ fontSize: '1.333rem', color: '#8B8680', fontWeight: 600 }}>
                남은 시간
              </div>
            </div>
          </div>
        </div>

        {/* Volume Input */}
        <div className="w-full bg-white rounded-3xl p-6 mb-6 shadow-md">
          <label 
            className="block mb-4 text-[#2C2C2C]"
            style={{ fontSize: '1.333rem', fontWeight: 700 }}
          >
            배액량을 입력해주세요
          </label>
          
          <div className="bg-[#F5F1E8] rounded-2xl p-5 mb-4">
            <div className="flex items-end gap-2">
              <input
                type="text"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="2,000"
                className="flex-1 bg-transparent border-none outline-none text-[#2C2C2C]"
                style={{ fontSize: '2.333rem', fontWeight: 700 }}
              />
              <span 
                className="text-[#8B8680] pb-1"
                style={{ fontSize: '1.556rem', fontWeight: 600 }}
              >
                cc
              </span>
            </div>
          </div>

          <button className="w-full bg-[#F4A261] text-white rounded-2xl py-4 flex items-center justify-center gap-3 shadow-md active:scale-[0.98] transition-all">
            <Mic className="w-6 h-6" />
            <span style={{ fontSize: '1.333rem', fontWeight: 700 }}>음성으로 입력하기</span>
          </button>
        </div>

        {/* Connection/Injection Issues Check */}
        <div className="w-full bg-gradient-to-b from-[#FFF5F5] to-white rounded-3xl p-6 shadow-md border-2 border-[#E8B4A8]">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-[#E07A7A]" />
            <h3 
              className="text-[#2C2C2C]"
              style={{ fontSize: '1.333rem', fontWeight: 700 }}
            >
              연결 또는 주입에 문제가 있나요?
            </h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => onNavigate('drainage-check')}
              className="bg-[#A8B5A1] text-white rounded-2xl py-5 shadow-md active:scale-[0.98] transition-all"
            >
              <span style={{ fontSize: '1.333rem', fontWeight: 700 }}>아니요</span>
            </button>
            <button 
              onClick={onShowAlert}
              className="bg-[#E07A7A] text-white rounded-2xl py-5 shadow-md active:scale-[0.98] transition-all"
            >
              <span style={{ fontSize: '1.333rem', fontWeight: 700 }}>오류 보고</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}