import { ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import exampleImage from 'figma:asset/9dba583a025e1be4b965571f34cf4b33735409e1.png';

interface DrainageCheckScreenProps {
  onNavigate: (screen: string) => void;
  onShowAlert: () => void;
}

export function DrainageCheckScreen({ onNavigate, onShowAlert }: DrainageCheckScreenProps) {
  const [selectedDrainage, setSelectedDrainage] = useState<'normal' | 'cloudy' | null>(null);

  const handleDrainageSelect = (type: 'normal' | 'cloudy') => {
    setSelectedDrainage(type);
  };

  const handleContinue = () => {
    if (selectedDrainage === 'cloudy') {
      onShowAlert();
    } else if (selectedDrainage === 'normal') {
      onNavigate('post-dialysis-check');
    }
  };

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
              배액 상태 확인
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-5 py-6 overflow-auto pb-32">
        {/* Instructions */}
        <div className="bg-white rounded-3xl p-6 mb-6 shadow-md">
          <h2 
            className="text-[#2C2C2C] mb-3"
            style={{ fontSize: '1.556rem', fontWeight: 700 }}
          >
            배액 상태를 확인해주세요
          </h2>
          <p 
            className="text-[#8B8680] leading-relaxed"
            style={{ fontSize: '1.111rem' }}
          >
            배액 주머니를 확인하고 아래 두 가지 중 해당되는 것을 선택해주세요.
          </p>
        </div>

        {/* Reference Image */}
        <div className="bg-white rounded-3xl p-4 mb-6 shadow-md">
          <p 
            className="text-[#8B8680] text-center mb-3"
            style={{ fontSize: '1rem', fontWeight: 600 }}
          >
            참고 이미지
          </p>
          <img 
            src={exampleImage} 
            alt="배액 비교 이미지" 
            className="w-full rounded-2xl"
          />
        </div>

        {/* Selection Cards */}
        <div className="space-y-4">
          {/* Normal Drainage Card */}
          <button
            onClick={() => handleDrainageSelect('normal')}
            className={`w-full rounded-3xl p-6 shadow-lg transition-all active:scale-[0.98] ${
              selectedDrainage === 'normal'
                ? 'bg-[#A8B5A1] border-4 border-[#8FA899] shadow-xl scale-[1.02]'
                : 'bg-white border-4 border-transparent hover:border-[#A8B5A1]'
            }`}
          >
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                selectedDrainage === 'normal'
                  ? 'bg-white'
                  : 'bg-gradient-to-br from-[#A8B5A1] to-[#8FA899]'
              }`}>
                <CheckCircle 
                  className={selectedDrainage === 'normal' ? 'text-[#A8B5A1]' : 'text-white'} 
                  strokeWidth={2.5}
                  style={{ width: '40px', height: '40px' }}
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 text-left">
                <h3 
                  className={selectedDrainage === 'normal' ? 'text-white' : 'text-[#2C2C2C]'}
                  style={{ fontSize: '1.556rem', fontWeight: 700 }}
                >
                  정상 배액
                </h3>
                <p 
                  className={`leading-relaxed mb-3 ${
                    selectedDrainage === 'normal' ? 'text-white/90' : 'text-[#8B8680]'
                  }`}
                  style={{ fontSize: '1.111rem' }}
                >
                  맑고 투명한 노란색 또는 엷은 짚색
                </p>
                
                {/* Visual Indicator */}
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F9F5D7] to-[#EDE8C8] border-2 border-[#E8E4D8]"></div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFF9E5] to-[#F5F0D0] border-2 border-[#E8E4D8]"></div>
                  <div className="flex items-center ml-2">
                    <span 
                      className={selectedDrainage === 'normal' ? 'text-white' : 'text-[#A8B5A1]'}
                      style={{ fontSize: '1.111rem', fontWeight: 700 }}
                    >
                      ✓ 안전
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Cloudy Drainage Card */}
          <button
            onClick={() => handleDrainageSelect('cloudy')}
            className={`w-full rounded-3xl p-6 shadow-lg transition-all active:scale-[0.98] ${
              selectedDrainage === 'cloudy'
                ? 'bg-[#E07A7A] border-4 border-[#D86A6A] shadow-xl scale-[1.02]'
                : 'bg-gradient-to-b from-[#FFF5F5] to-white border-4 border-[#E8B4A8] hover:border-[#E07A7A]'
            }`}
          >
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                selectedDrainage === 'cloudy'
                  ? 'bg-white'
                  : 'bg-gradient-to-br from-[#E07A7A] to-[#D86A6A]'
              }`}>
                <AlertCircle 
                  className={selectedDrainage === 'cloudy' ? 'text-[#E07A7A]' : 'text-white'} 
                  strokeWidth={2.5}
                  style={{ width: '40px', height: '40px' }}
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 text-left">
                <h3 
                  className={selectedDrainage === 'cloudy' ? 'text-white' : 'text-[#E07A7A]'}
                  style={{ fontSize: '1.556rem', fontWeight: 700 }}
                >
                  혼탁한 배액
                </h3>
                <p 
                  className={`leading-relaxed mb-3 ${
                    selectedDrainage === 'cloudy' ? 'text-white/90' : 'text-[#8B8680]'
                  }`}
                  style={{ fontSize: '1.111rem' }}
                >
                  흐리거나 탁한 색상, 뿌옇거나 침전물이 보임
                </p>
                
                {/* Visual Indicator */}
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4CDB8] to-[#C4BDA8] border-2 border-[#B8B0A0]"></div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E8E0C8] to-[#D8D0B8] border-2 border-[#C8C0A8] opacity-70"></div>
                  <div className="flex items-center ml-2">
                    <span 
                      className={selectedDrainage === 'cloudy' ? 'text-white' : 'text-[#E07A7A]'}
                      style={{ fontSize: '1.111rem', fontWeight: 700 }}
                    >
                      ⚠ 주의
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-6 bg-[#FFF9E5] rounded-2xl p-5 border-2 border-[#F4A261]/30">
          <p 
            className="text-[#8B8680] text-center leading-relaxed"
            style={{ fontSize: '1rem' }}
          >
            💡 <span className="font-semibold">잘 모르겠다면?</span><br />
            혼탁한 배액을 선택하여 의료진에게 문의하세요.
          </p>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-6 shadow-lg border-t-2 border-[#F5F1E8]">
        <button
          onClick={handleContinue}
          disabled={!selectedDrainage}
          className={`w-full rounded-3xl py-6 shadow-lg transition-all ${
            selectedDrainage
              ? selectedDrainage === 'normal'
                ? 'bg-[#A8B5A1] text-white active:scale-[0.98] hover:shadow-xl'
                : 'bg-[#E07A7A] text-white active:scale-[0.98] hover:shadow-xl'
              : 'bg-[#E8E4D8] text-[#8B8680] cursor-not-allowed'
          }`}
        >
          <span style={{ fontSize: '1.556rem', fontWeight: 700 }}>
            {selectedDrainage === 'cloudy' ? '의료진에게 연락하기' : '다음 단계로 진행'}
          </span>
        </button>
      </div>
    </div>
  );
}