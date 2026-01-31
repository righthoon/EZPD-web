import { ArrowLeft, Frown, Thermometer, Droplet, Activity } from 'lucide-react';
import { VoiceOrb } from './VoiceOrb';
import { useState } from 'react';

interface PostDialysisCheckScreenProps {
  onNavigate: (screen: string) => void;
  onShowAlert: () => void;
}

export function PostDialysisCheckScreen({ onNavigate, onShowAlert }: PostDialysisCheckScreenProps) {
  const [symptoms, setSymptoms] = useState({
    abdominalPain: false,
    fever: false,
    exitSiteIssues: false,
    tunnelInfection: false,
  });

  const toggleSymptom = (symptom: keyof typeof symptoms) => {
    setSymptoms(prev => ({ ...prev, [symptom]: !prev[symptom] }));
  };

  const hasAnySymptoms = Object.values(symptoms).some(value => value);

  const handleComplete = () => {
    if (hasAnySymptoms) {
      onShowAlert();
    } else {
      onNavigate('home');
    }
  };

  const symptomCards = [
    {
      id: 'abdominalPain' as const,
      icon: Frown,
      title: '복통 / 복부 팽만감',
      description: '배가 아프거나 부풀어 오른 느낌',
      color: '#E8B4A8',
    },
    {
      id: 'fever' as const,
      icon: Thermometer,
      title: '발열 / 오한',
      description: '열이 나거나 춥고 떨리는 증상',
      color: '#E07A7A',
    },
    {
      id: 'exitSiteIssues' as const,
      icon: Droplet,
      title: '출구 부위 이상',
      description: '카테터 출구 부위의 발적, 분비물, 통증',
      color: '#F4A261',
    },
    {
      id: 'tunnelInfection' as const,
      icon: Activity,
      title: '터널 감염 징후',
      description: '카테터 경로를 따라 압통이나 부종',
      color: '#A3C4D9',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      {/* Header */}
      <div className="bg-white px-5 pt-6 pb-4 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => onNavigate('monitoring')}
            className="p-3 bg-[#F5F1E8] rounded-2xl"
          >
            <ArrowLeft className="w-6 h-6 text-[#2C2C2C]" strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <h1 style={{ fontSize: '1.556rem', fontWeight: 700, color: '#2C2C2C' }}>
              투석 후 상태 확인
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-5 py-6 overflow-auto pb-32">
        {/* Instructions */}
        <div className="bg-white rounded-3xl p-6 mb-6 shadow-md">
          <h2 
            className="text-[#2C2C2C] text-center leading-snug"
            style={{ fontSize: '1.889rem', fontWeight: 700 }}
          >
            투석 후 기분이<br />어떠신가요?
          </h2>
          <p 
            className="text-[#8B8680] text-center mt-3"
            style={{ fontSize: '1.111rem' }}
          >
            아래 증상 중 해당하는 것이 있으면 선택해주세요
          </p>
        </div>

        {/* Symptom Cards Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {symptomCards.map((card) => {
            const Icon = card.icon;
            const isSelected = symptoms[card.id];
            
            return (
              <button
                key={card.id}
                onClick={() => toggleSymptom(card.id)}
                className={`rounded-3xl p-5 transition-all shadow-md ${
                  isSelected
                    ? 'bg-gradient-to-br from-white to-[#FFF5F5] border-4 scale-105'
                    : 'bg-white border-4 border-transparent hover:border-[#E8E4D8]'
                }`}
                style={{
                  borderColor: isSelected ? card.color : 'transparent',
                }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  {/* Icon Container */}
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                      isSelected ? 'scale-110' : ''
                    }`}
                    style={{ 
                      backgroundColor: isSelected ? card.color : `${card.color}30`,
                    }}
                  >
                    <Icon 
                      className={isSelected ? 'text-white' : 'text-[#8B8680]'}
                      style={{ width: '32px', height: '32px' }}
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 
                      className="text-[#2C2C2C] mb-2"
                      style={{ fontSize: '1.111rem', fontWeight: 700 }}
                    >
                      {card.title}
                    </h3>
                    <p 
                      className="text-[#8B8680] leading-snug"
                      style={{ fontSize: '0.889rem' }}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="mt-2">
                    <div 
                      className={`w-full py-2 px-4 rounded-xl transition-all ${
                        isSelected
                          ? 'bg-white shadow-sm'
                          : 'bg-[#F5F1E8]'
                      }`}
                    >
                      <span 
                        className={isSelected ? 'text-[#E07A7A]' : 'text-[#8B8680]'}
                        style={{ fontSize: '1rem', fontWeight: 700 }}
                      >
                        {isSelected ? '예' : '아니요'}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Warning Message if symptoms selected */}
        {hasAnySymptoms && (
          <div className="bg-gradient-to-b from-[#FFE5E5] to-white rounded-3xl p-6 mb-6 shadow-md border-2 border-[#E07A7A]">
            <p 
              className="text-[#E07A7A] text-center leading-relaxed"
              style={{ fontSize: '1.333rem', fontWeight: 700 }}
            >
              ⚠ 증상이 감지되었습니다<br />
              <span style={{ fontSize: '1.111rem', fontWeight: 600 }}>
                의료진에게 연락이 필요합니다
              </span>
            </p>
          </div>
        )}

        {/* Voice Orb Section */}
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <p 
            className="text-[#8B8680] text-center mb-6"
            style={{ fontSize: '1.111rem', fontWeight: 600 }}
          >
            음성으로 증상을 보고할 수 있습니다
          </p>
          
          <div className="flex justify-center">
            <VoiceOrb />
          </div>
          
          <p 
            className="text-[#8B8680] text-center mt-6"
            style={{ fontSize: '1rem' }}
          >
            예: "배가 아파요" 또는 "열이 나요"
          </p>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-6 shadow-lg border-t-2 border-[#F5F1E8]">
        <button
          onClick={handleComplete}
          className={`w-full rounded-3xl py-6 shadow-lg transition-all ${
            hasAnySymptoms
              ? 'bg-[#E07A7A] text-white active:scale-[0.98] hover:shadow-xl'
              : 'bg-[#A8B5A1] text-white active:scale-[0.98] hover:shadow-xl'
          }`}
        >
          <span style={{ fontSize: '1.556rem', fontWeight: 700 }}>
            {hasAnySymptoms ? '의료진에게 연락하기' : '완료 및 홈으로'}
          </span>
        </button>
      </div>
    </div>
  );
}
