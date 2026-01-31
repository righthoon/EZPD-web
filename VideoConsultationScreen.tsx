import { Phone, Mic, MicOff, Video, VideoOff } from 'lucide-react';
import { useState } from 'react';
import { ConsultationReportCard } from './ConsultationReportCard';

interface VideoConsultationScreenProps {
  onNavigate: (screen: string) => void;
}

export function VideoConsultationScreen({ onNavigate }: VideoConsultationScreenProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  return (
    <div className="min-h-screen bg-[#2C2C2C] flex flex-col">
      {/* Video Call Window */}
      <div className="relative h-[45vh] bg-gradient-to-br from-[#3A4A5A] to-[#2C3C4C]">
        {/* Nurse Video Placeholder */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            {/* Nurse Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-[#A8B5A1] to-[#8FA899] rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
              <span className="text-white" style={{ fontSize: '3rem', fontWeight: 700 }}>
                박
              </span>
            </div>
            <h2 className="text-white mb-2" style={{ fontSize: '1.778rem', fontWeight: 700 }}>
              박투석 전담 간호사
            </h2>
          </div>
        </div>

        {/* Patient Small Video (Picture-in-Picture) */}
        <div className="absolute top-4 right-4 w-24 h-32 bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border-2 border-white/20">
          <div className="w-full h-full bg-gradient-to-br from-[#E8B4A8] to-[#D8A498] flex items-center justify-center">
            <span className="text-white" style={{ fontSize: '2rem', fontWeight: 700 }}>
              김
            </span>
          </div>
        </div>

        {/* Call Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 px-4">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
              isMuted ? 'bg-[#E07A7A]' : 'bg-white/20 backdrop-blur-md'
            }`}
          >
            {isMuted ? (
              <MicOff className="w-6 h-6 text-white" strokeWidth={2.5} />
            ) : (
              <Mic className="w-6 h-6 text-white" strokeWidth={2.5} />
            )}
          </button>

          <button 
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
              !isVideoOn ? 'bg-[#E07A7A]' : 'bg-white/20 backdrop-blur-md'
            }`}
          >
            {isVideoOn ? (
              <Video className="w-6 h-6 text-white" strokeWidth={2.5} />
            ) : (
              <VideoOff className="w-6 h-6 text-white" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Patient Report Section - Bottom 60% */}
      <div className="flex-1 bg-[#F5F1E8] rounded-t-3xl -mt-4 relative z-10 overflow-hidden">
        <div className="h-full overflow-y-auto px-5 py-6">
          <ConsultationReportCard />
        </div>
      </div>

      {/* End Call Button */}
      <div className="bg-[#F5F1E8] px-5 pb-6">
        <button 
          onClick={() => onNavigate('results')}
          className="w-full bg-gradient-to-r from-[#E07A7A] to-[#D86A6A] text-white rounded-3xl py-6 shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-4"
        >
          <Phone className="w-7 h-7 rotate-[135deg]" strokeWidth={2.5} />
          <span style={{ fontSize: '1.778rem', fontWeight: 700 }}>
            통화 종료
          </span>
        </button>
      </div>
    </div>
  );
}