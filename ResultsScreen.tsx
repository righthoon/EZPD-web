import { ArrowLeft, CheckCircle, Phone, Droplet, Activity } from 'lucide-react';

interface ResultsScreenProps {
  onNavigate: (screen: string) => void;
}

export function ResultsScreen({ onNavigate }: ResultsScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-white">
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
            <h1 style={{ fontSize: '1.778rem', fontWeight: 700, color: '#2C2C2C' }}>
              오늘의 투석 결과
            </h1>
            <p style={{ fontSize: '1rem', color: '#8B8680' }}>
              2026년 1월 29일 (수)
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 py-6 pb-32">
        {/* Overall Status Card */}
        <div className="bg-gradient-to-br from-[#A8B5A1] to-[#8FA899] rounded-3xl p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-[#A8B5A1]" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-white" style={{ fontSize: '1.778rem', fontWeight: 700 }}>
                정상 완료
              </h2>
              <p className="text-white/90" style={{ fontSize: '1.111rem' }}>
                모든 항목이 양호합니다
              </p>
            </div>
          </div>
        </div>

        {/* Daily Volume Card */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#A3C4D9] to-[#7FA8C7] rounded-2xl flex items-center justify-center flex-shrink-0">
              <Droplet className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-[#2C2C2C] mb-2" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                오늘의 투석량
              </h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[#2C2C2C]" style={{ fontSize: '2.667rem', fontWeight: 700 }}>
                  2,000
                </span>
                <span className="text-[#8B8680]" style={{ fontSize: '1.333rem', fontWeight: 600 }}>
                  cc
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-[#E8F4F8] rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#A3C4D9] to-[#7FA8C7] h-full rounded-full" style={{ width: '80%' }} />
                </div>
                <span className="text-[#A3C4D9]" style={{ fontSize: '1rem', fontWeight: 700 }}>
                  목표 달성
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fluid Turbidity Card */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#A8B5A1] to-[#8FA899] rounded-2xl flex items-center justify-center flex-shrink-0">
              <Activity className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-[#2C2C2C] mb-3" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                배액 상태
              </h3>
              
              {/* Status with Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#A8B5A1] rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[#2C2C2C]" style={{ fontSize: '1.556rem', fontWeight: 700 }}>
                    정상
                  </p>
                  <p className="text-[#8B8680]" style={{ fontSize: '1rem' }}>
                    맑고 깨끗한 상태
                  </p>
                </div>
              </div>

              {/* Visual Indicator */}
              <div className="flex gap-2 items-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFF9E5] to-[#F5F0D0] border-2 border-[#E8E4D8]" />
                <span className="text-[#8B8680]" style={{ fontSize: '1rem' }}>
                  투명한 노란색
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Condition Summary */}
        <div className="bg-gradient-to-br from-[#FFF5F5] to-white rounded-3xl p-6 shadow-md border-2 border-[#E8B4A8]">
          <h3 className="text-[#2C2C2C] mb-4" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
            오늘의 컨디션
          </h3>
          
          <div className="space-y-3">
            {/* Blood Pressure */}
            <div className="flex items-center justify-between">
              <span className="text-[#8B8680]" style={{ fontSize: '1.111rem' }}>
                혈압
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[#2C2C2C]" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                  120/80
                </span>
                <div className="w-8 h-8 bg-[#A8B5A1] rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Weight */}
            <div className="flex items-center justify-between">
              <span className="text-[#8B8680]" style={{ fontSize: '1.111rem' }}>
                체중
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[#2C2C2C]" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                  68.5 kg
                </span>
                <div className="w-8 h-8 bg-[#A8B5A1] rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Pain Level */}
            <div className="flex items-center justify-between">
              <span className="text-[#8B8680]" style={{ fontSize: '1.111rem' }}>
                통증 정도
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[#2C2C2C]" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                  없음
                </span>
                <div className="w-8 h-8 bg-[#A8B5A1] rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Call Nurse Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-6 shadow-lg border-t-2 border-[#F5F1E8]">
        <button 
          onClick={() => onNavigate('video-consultation')}
          className="w-full bg-gradient-to-r from-[#F4A261] to-[#E07A7A] text-white rounded-3xl py-6 shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-4"
        >
          <Phone className="w-7 h-7" strokeWidth={2.5} />
          <span style={{ fontSize: '1.778rem', fontWeight: 700 }}>
            담당 간호사에게 전화
          </span>
        </button>
      </div>
    </div>
  );
}
