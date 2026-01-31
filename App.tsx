import { useState } from 'react';
import { HomeScreen } from '@/app/components/HomeScreen';
import { PrepGuideScreen } from '@/app/components/PrepGuideScreen';
import { MonitoringScreen } from '@/app/components/MonitoringScreen';
import { EmergencyAlert } from '@/app/components/EmergencyAlert';
import { MobileNavigation } from '@/app/components/MobileNavigation';
import { DrainageCheckScreen } from '@/app/components/DrainageCheckScreen';
import { PostDialysisCheckScreen } from '@/app/components/PostDialysisCheckScreen';
import { ResultsScreen } from '@/app/components/ResultsScreen';
import { VideoConsultationScreen } from '@/app/components/VideoConsultationScreen';
import { HealthMetricsScreen } from '@/app/components/HealthMetricsScreen';
import { DailyHealthDiaryScreen } from '@/app/components/DailyHealthDiaryScreen';

type Screen = 'home' | 'prep-guide' | 'drainage-check' | 'monitoring' | 'post-dialysis-check' | 'records' | 'reports' | 'education' | 'results' | 'video-consultation' | 'health-metrics' | 'daily-diary';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(false);

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  return (
    <div className="min-h-screen">
      {/* Screen Content */}
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'prep-guide' && (
        <PrepGuideScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'drainage-check' && (
        <DrainageCheckScreen 
          onNavigate={handleNavigate}
          onShowAlert={() => setShowEmergencyAlert(true)}
        />
      )}
      
      {currentScreen === 'monitoring' && (
        <MonitoringScreen 
          onNavigate={handleNavigate} 
          onShowAlert={() => setShowEmergencyAlert(true)}
        />
      )}

      {currentScreen === 'post-dialysis-check' && (
        <PostDialysisCheckScreen
          onNavigate={handleNavigate}
          onShowAlert={() => setShowEmergencyAlert(true)}
        />
      )}

      {currentScreen === 'records' && (
        <div className="min-h-screen bg-[#F5F1E8] pb-24 px-5 pt-6">
          <h1 className="text-[#2C2C2C] mb-4" style={{ fontSize: '2.333rem', fontWeight: 700 }}>
            투석 기록
          </h1>
          <p className="text-[#8B8680]" style={{ fontSize: '1.333rem' }}>
            이 페이지는 개발 중입니다.
          </p>
        </div>
      )}

      {currentScreen === 'reports' && (
        <div className="min-h-screen bg-[#F5F1E8] pb-24 px-5 pt-6">
          <h1 className="text-[#2C2C2C] mb-4" style={{ fontSize: '2.333rem', fontWeight: 700 }}>
            보고서
          </h1>
          <p className="text-[#8B8680]" style={{ fontSize: '1.333rem' }}>
            이 페이지는 개발 중입니다.
          </p>
        </div>
      )}

      {currentScreen === 'education' && (
        <div className="min-h-screen bg-[#F5F1E8] pb-24 px-5 pt-6">
          <h1 className="text-[#2C2C2C] mb-4" style={{ fontSize: '2.333rem', fontWeight: 700 }}>
            환자 교육
          </h1>
          <p className="text-[#8B8680]" style={{ fontSize: '1.333rem' }}>
            이 페이지는 개발 중입니다.
          </p>
        </div>
      )}

      {currentScreen === 'results' && (
        <ResultsScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'video-consultation' && (
        <VideoConsultationScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'health-metrics' && (
        <HealthMetricsScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'daily-diary' && (
        <DailyHealthDiaryScreen onNavigate={handleNavigate} />
      )}

      {/* Bottom Navigation (only show for patient view and not on special screens) */}
      {!['prep-guide', 'drainage-check', 'monitoring', 'post-dialysis-check', 'results', 'video-consultation', 'health-metrics', 'daily-diary'].includes(currentScreen) && (
        <MobileNavigation 
          activeScreen={currentScreen} 
          onNavigate={handleNavigate}
        />
      )}

      {/* Emergency Alert Modal */}
      {showEmergencyAlert && (
        <EmergencyAlert onClose={() => {
          setShowEmergencyAlert(false);
          setCurrentScreen('home');
        }} />
      )}
    </div>
  );
}