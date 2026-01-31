import { Bell, Play, FileText, Activity, Video } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const dialysisData = [
    { name: 'Completed', value: 2 },
    { name: 'Remaining', value: 2 },
  ];

  const COLORS = ['#A8B5A1', '#E8E4D8'];

  return (
    <div className="min-h-screen bg-[#F5F1E8] pb-24 px-5 pt-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-[#8B8680] mb-1" style={{ fontSize: '1.111rem' }}>안녕하세요,</p>
          <h1 className="text-[#2C2C2C]" style={{ fontSize: '2.333rem', fontWeight: 700 }}>
            김필수님
          </h1>
        </div>
        <button className="relative p-3 bg-white rounded-2xl shadow-sm">
          <Bell className="w-7 h-7 text-[#8B8680]" />
          <span className="absolute top-2 right-2 w-3 h-3 bg-[#E8B4A8] rounded-full border-2 border-white"></span>
        </button>
      </div>

      {/* Today's Dialysis Progress Card */}
      <div className="bg-white rounded-3xl p-6 mb-5 shadow-md">
        <h2 className="mb-6" style={{ fontSize: '1.556rem', fontWeight: 700 }}>
          오늘의 투석 진행 상황
        </h2>
        
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-56 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dialysisData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={95}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {dialysisData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#2C2C2C' }}>2/4</div>
              <div style={{ fontSize: '1.111rem', color: '#8B8680' }}>회 완료</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-[#F5F1E8] rounded-2xl py-3">
            <p className="text-[#8B8680] mb-1" style={{ fontSize: '1rem' }}>완료</p>
            <p className="text-[#A8B5A1]" style={{ fontSize: '1.556rem', fontWeight: 700 }}>2회</p>
          </div>
          <div className="bg-[#F5F1E8] rounded-2xl py-3">
            <p className="text-[#8B8680] mb-1" style={{ fontSize: '1rem' }}>남은 횟수</p>
            <p className="text-[#2C2C2C]" style={{ fontSize: '1.556rem', fontWeight: 700 }}>2회</p>
          </div>
        </div>
      </div>

      {/* Recent Vitals */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Weight Card */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <p className="text-[#8B8680] mb-2" style={{ fontSize: '1rem' }}>최근 체중</p>
          <p className="text-[#2C2C2C]" style={{ fontSize: '2.333rem', fontWeight: 700 }}>
            62.5
            <span style={{ fontSize: '1.333rem', fontWeight: 600 }}>kg</span>
          </p>
          <p className="text-[#A8B5A1] mt-2" style={{ fontSize: '0.889rem' }}>↓ 0.3kg (전일 대비)</p>
        </div>

        {/* Blood Pressure Card */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <p className="text-[#8B8680] mb-2" style={{ fontSize: '1rem' }}>혈압</p>
          <p className="text-[#2C2C2C]" style={{ fontSize: '1.889rem', fontWeight: 700 }}>
            130/85
          </p>
          <p className="text-[#8B8680] mt-2" style={{ fontSize: '0.889rem' }}>mmHg</p>
        </div>
      </div>

      {/* Start Dialysis Button */}
      <button 
        onClick={() => onNavigate('prep-guide')}
        className="w-full bg-gradient-to-r from-[#A8B5A1] to-[#8FA899] text-white rounded-3xl py-6 shadow-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all active:scale-[0.98] mb-4"
      >
        <Play className="w-9 h-9" fill="white" />
        <span style={{ fontSize: '1.556rem', fontWeight: 700 }}>오늘의 투석 시작하기</span>
      </button>

      {/* Quick Access Buttons */}
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => onNavigate('results')}
          className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center gap-2 hover:shadow-lg transition-all active:scale-[0.98]"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-[#A3C4D9] to-[#7FA8C7] rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[#2C2C2C]" style={{ fontSize: '0.889rem', fontWeight: 600 }}>
            투석 결과
          </span>
        </button>

        <button
          onClick={() => onNavigate('health-metrics')}
          className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center gap-2 hover:shadow-lg transition-all active:scale-[0.98]"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-[#A8B5A1] to-[#8FA899] rounded-xl flex items-center justify-center">
            <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[#2C2C2C]" style={{ fontSize: '0.889rem', fontWeight: 600 }}>
            건강 지표
          </span>
        </button>

        <button
          onClick={() => onNavigate('video-consultation')}
          className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center gap-2 hover:shadow-lg transition-all active:scale-[0.98]"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-[#F4A261] to-[#E89855] rounded-xl flex items-center justify-center">
            <Video className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[#2C2C2C]" style={{ fontSize: '0.889rem', fontWeight: 600 }}>
            간호사 통화
          </span>
        </button>
      </div>
    </div>
  );
}