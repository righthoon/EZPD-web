import { AlertTriangle, Phone, X } from 'lucide-react';

interface EmergencyAlertProps {
  onClose: () => void;
}

export function EmergencyAlert({ onClose }: EmergencyAlertProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Alert Modal */}
      <div className="relative bg-gradient-to-b from-[#FFE5E5] via-[#FFF0F0] to-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-all"
        >
          <X className="w-6 h-6 text-[#8B8680]" />
        </button>

        {/* Warning Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Pulsing rings */}
            <div className="absolute inset-0 animate-ping">
              <div className="w-28 h-28 rounded-full bg-[#E07A7A] opacity-30"></div>
            </div>
            
            {/* Main icon container */}
            <div className="relative w-28 h-28 bg-[#E07A7A] rounded-full flex items-center justify-center shadow-lg">
              <AlertTriangle className="w-16 h-16 text-white" strokeWidth={2.5} fill="white" />
            </div>
          </div>
        </div>

        {/* Alert Title */}
        <h2 
          className="text-center text-[#E07A7A] mb-4"
          style={{ fontSize: '2.333rem', fontWeight: 800 }}
        >
          조치가 필요합니다!
        </h2>

        {/* Alert Message */}
        <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm border-2 border-[#E07A7A]/30">
          <h3 
            className="text-[#2C2C2C] mb-3"
            style={{ fontSize: '1.556rem', fontWeight: 700 }}
          >
            복막염 의심
          </h3>
          <p 
            className="text-[#8B8680] leading-relaxed"
            style={{ fontSize: '1.111rem' }}
          >
            즉시 투석을 중단하고 담당 간호사에게 연락하시기 바랍니다.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Primary: Call Nurse */}
          <button 
            onClick={() => {
              // Simulate phone call
              alert('전화 연결 중: 02-1234-5678');
            }}
            className="w-full bg-[#E07A7A] text-white rounded-2xl py-6 flex items-center justify-center gap-3 shadow-lg active:scale-[0.98] transition-all hover:bg-[#D86A6A]"
          >
            <Phone className="w-7 h-7" />
            <span style={{ fontSize: '1.556rem', fontWeight: 700 }}>
              📞 전담 간호사 연결 (02-1234-5678)
            </span>
          </button>

          {/* Secondary: Close */}
          <button 
            onClick={onClose}
            className="w-full bg-white text-[#8B8680] border-2 border-[#E8E4D8] rounded-2xl py-5 active:scale-[0.98] transition-all hover:bg-[#F5F1E8]"
          >
            <span style={{ fontSize: '1.333rem', fontWeight: 700 }}>
              닫고 홈으로 돌아가기
            </span>
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-[#8B8680]" style={{ fontSize: '0.889rem' }}>
            응급 상황 시 119에 즉시 연락하세요
          </p>
        </div>
      </div>
    </div>
  );
}
