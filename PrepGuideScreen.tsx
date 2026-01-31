import { ArrowLeft, Check } from 'lucide-react';
import { VoiceOrb } from './VoiceOrb';
import { useState } from 'react';

interface PrepGuideScreenProps {
  onNavigate: (screen: string) => void;
}

export function PrepGuideScreen({ onNavigate }: PrepGuideScreenProps) {
  const currentStep = 1;
  const totalSteps = 3;
  const progressPercent = (currentStep / totalSteps) * 100;

  const [checklist, setChecklist] = useState({
    handWashing: false,
    mask: false,
    workspace: false,
  });

  const allChecked = checklist.handWashing && checklist.mask && checklist.workspace;

  const toggleCheck = (item: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#F5F1E8] px-5 pt-6 pb-4">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="p-3 bg-white rounded-2xl shadow-sm"
          >
            <ArrowLeft className="w-6 h-6 text-[#2C2C2C]" strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <h1 style={{ fontSize: '1.556rem', fontWeight: 700, color: '#2C2C2C' }}>
              투석 준비 가이드
            </h1>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3">
          <span style={{ fontSize: '1.111rem', fontWeight: 600, color: '#8B8680' }}>
            {currentStep}/{totalSteps} 단계: 준비
          </span>
          <div className="flex-1 bg-[#E8E4D8] rounded-full h-3 overflow-hidden">
            <div 
              className="bg-[#A8B5A1] h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-6 py-6 overflow-auto pb-32">
        {/* Hand Washing Animation */}
        <div className="mb-6 bg-gradient-to-b from-[#F5F1E8] to-white rounded-3xl p-8 w-full max-w-sm shadow-md">
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Hand Washing Illustration with Animation */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Faucet */}
              <rect x="80" y="20" width="40" height="10" rx="5" fill="#8B8680" />
              <rect x="95" y="30" width="10" height="15" fill="#8B8680" />
              
              {/* Water drops with animation */}
              <circle cx="85" cy="55" r="3" fill="#A3C4D9" opacity="0.7">
                <animate attributeName="cy" values="55;85;55" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="50" r="4" fill="#A3C4D9" opacity="0.8">
                <animate attributeName="cy" values="50;90;50" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="115" cy="55" r="3" fill="#A3C4D9" opacity="0.7">
                <animate attributeName="cy" values="55;85;55" dur="1.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite" />
              </circle>
              
              {/* Hands with subtle movement */}
              <g>
                <animate attributeName="opacity" values="1;0.9;1" dur="2s" repeatCount="indefinite" />
                <ellipse cx="70" cy="120" rx="25" ry="35" fill="#E8B4A8" />
                <ellipse cx="130" cy="120" rx="25" ry="35" fill="#E8B4A8" />
              </g>
              
              {/* Soap bubbles with animation */}
              <circle cx="60" cy="100" r="8" fill="white" opacity="0.6">
                <animate attributeName="cy" values="100;90;100" dur="3s" repeatCount="indefinite" />
                <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="75" cy="95" r="6" fill="white" opacity="0.5">
                <animate attributeName="cy" values="95;85;95" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="r" values="6;8;6" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="125" cy="95" r="7" fill="white" opacity="0.6">
                <animate attributeName="cy" values="95;88;95" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="140" cy="100" r="9" fill="white" opacity="0.5">
                <animate attributeName="cy" values="100;92;100" dur="3.2s" repeatCount="indefinite" />
                <animate attributeName="r" values="9;11;9" dur="3.2s" repeatCount="indefinite" />
              </circle>
              
              {/* Sink */}
              <rect x="40" y="155" width="120" height="8" rx="4" fill="#8B8680" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Question Text */}
        <div className="text-center mb-6 w-full">
          <h2 
            className="text-[#2C2C2C] leading-snug mb-6"
            style={{ fontSize: '1.556rem', fontWeight: 700 }}
          >
            투석 준비가 완료되셨나요?
          </h2>

          {/* Checklist Cards */}
          <div className="space-y-3">
            {/* Hand Washing */}
            <button
              onClick={() => toggleCheck('handWashing')}
              className={`w-full rounded-2xl p-5 transition-all shadow-md ${
                checklist.handWashing
                  ? 'bg-[#A8B5A1] border-2 border-[#8FA899]'
                  : 'bg-white border-2 border-[#E8E4D8]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center border-2 ${
                  checklist.handWashing
                    ? 'bg-white border-white'
                    : 'bg-transparent border-[#E8E4D8]'
                }`}>
                  {checklist.handWashing && <Check className="w-6 h-6 text-[#A8B5A1]" strokeWidth={3} />}
                </div>
                <div className="flex-1 text-left">
                  <p 
                    className={checklist.handWashing ? 'text-white' : 'text-[#2C2C2C]'}
                    style={{ fontSize: '1.333rem', fontWeight: 700 }}
                  >
                    손을 30초 동안 깨끗이 씻었습니다
                  </p>
                </div>
              </div>
            </button>

            {/* Mask */}
            <button
              onClick={() => toggleCheck('mask')}
              className={`w-full rounded-2xl p-5 transition-all shadow-md ${
                checklist.mask
                  ? 'bg-[#A8B5A1] border-2 border-[#8FA899]'
                  : 'bg-white border-2 border-[#E8E4D8]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center border-2 ${
                  checklist.mask
                    ? 'bg-white border-white'
                    : 'bg-transparent border-[#E8E4D8]'
                }`}>
                  {checklist.mask && <Check className="w-6 h-6 text-[#A8B5A1]" strokeWidth={3} />}
                </div>
                <div className="flex-1 text-left">
                  <p 
                    className={checklist.mask ? 'text-white' : 'text-[#2C2C2C]'}
                    style={{ fontSize: '1.333rem', fontWeight: 700 }}
                  >
                    마스크를 착용했습니다
                  </p>
                </div>
              </div>
            </button>

            {/* Workspace */}
            <button
              onClick={() => toggleCheck('workspace')}
              className={`w-full rounded-2xl p-5 transition-all shadow-md ${
                checklist.workspace
                  ? 'bg-[#A8B5A1] border-2 border-[#8FA899]'
                  : 'bg-white border-2 border-[#E8E4D8]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center border-2 ${
                  checklist.workspace
                    ? 'bg-white border-white'
                    : 'bg-transparent border-[#E8E4D8]'
                }`}>
                  {checklist.workspace && <Check className="w-6 h-6 text-[#A8B5A1]" strokeWidth={3} />}
                </div>
                <div className="flex-1 text-left">
                  <p 
                    className={checklist.workspace ? 'text-white' : 'text-[#2C2C2C]'}
                    style={{ fontSize: '1.333rem', fontWeight: 700 }}
                  >
                    작업 공간을 정리했습니다
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Voice Orb */}
        <div className="mt-6">
          <VoiceOrb />
          
          <p 
            className="text-[#8B8680] text-center mt-6"
            style={{ fontSize: '1.333rem', fontWeight: 600 }}
          >
            "네, 완료했습니다"라고 말씀해주세요
          </p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 px-5 pb-6 pt-4 bg-white border-t-2 border-[#F5F1E8] shadow-lg">
        <button 
          onClick={() => onNavigate('monitoring')}
          disabled={!allChecked}
          className={`w-full rounded-3xl py-5 shadow-lg transition-all ${
            allChecked
              ? 'bg-[#A8B5A1] text-white active:scale-[0.98] hover:shadow-xl'
              : 'bg-[#E8E4D8] text-[#8B8680] cursor-not-allowed'
          }`}
        >
          <span style={{ fontSize: '1.333rem', fontWeight: 700 }}>
            네, 완료했습니다
          </span>
        </button>
      </div>
    </div>
  );
}